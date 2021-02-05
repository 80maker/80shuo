const https = require('https');
const vcsurl = require('./vcsurl');

const REGISTRY_URL = 'https://registry.npmjs.org';

class ReqError extends Error {
  constructor(options) {
    super(options);
    this.code = 'NOT_FOUND';
  }
}

const request = (options) => new Promise((resolve, reject) => {
  https.get(options, async (resp) => {
    let data = '';
    try {
      for await (const chunk of resp) data += chunk;
    } catch (error) {
      return reject(error);
    }
    resolve(data);
  });
});

const extractLatest = (data) => {
  if (!(data && data.time)) return {}
  const {time} = data;
  delete time.modified
  delete time.created
  const versions = Object.keys(time)
  versions.sort((a, b) => Number(new Date(time[b])) - Number(new Date(time[a])))
  const version = versions[0]
  const lt = time[version];
  const lastTime = lt && new Date(lt)
  return {version, time: lastTime};
};

const getLatest = async (name) => {
  const url = `${REGISTRY_URL}/${name}`;
  const body = await request(url);
  if (!body) throw new ReqError('Package not found')
  const data = JSON.parse(body);
  if (data.error) throw new ReqError(data.error);

  const {repository, author, description} = data;
  const {version, time} = extractLatest(data);
  return {name, version, time, author, repository, description};
};

const getFormatted = async (name) => {
  let result;
  try {
    result = await getLatest(name);
  } catch (error) {
    if (error.code !== 'NOT_FOUND') throw error;
    return `\n  Package '${name}' not found in NPM.`
  }
  const author = result.author.name;
  const repo = vcsurl(result.repository.url);
  const desc = result.description;
  return {
    author,
    repo,
    desc,
    latest: result.version
  }
};

exports.getLatest = getLatest;
exports.getFormatted = getFormatted;