<template>
  <div class="theme">
    <div class="theme__hd d-flex">
      <strong class="theme__name">VuePress Themes</strong>
      <ThemeNav/>
    </div>
    <div class="theme__top d-flex">
      <div class="theme__info flex-auto">
        <div class="theme__title">{{$frontmatter.name}}</div>
        <p class="theme__desc">{{$frontmatter.description}}</p>
        <ul class="theme__meta">
          <li>Author: <a :href="$frontmatter.homepage" target="_blank" rel="external nofollow noopener">{{$frontmatter.author.name}}</a></li>
          <li>Updated: {{last_update}}</li>
          <li>License: {{$frontmatter.license}}</li>
          <li>tags: {{$frontmatter['theme-tags'].join(', ')}}</li>
        </ul>
        <a class="btn-theme mr-2" :href="$frontmatter.repo">Npm</a>
        <a class="btn-theme" :href="$frontmatter.homepage">Homepage</a>
      </div>
      <div class="theme__screen-shot">
        <img v-if="$frontmatter.cover" :src="$frontmatter.cover" :alt="$frontmatter.name">
      </div>
    </div>
    <div class="readme" v-html="$frontmatter.readme"></div>
  </div>
</template>

<script>
import ThemeNav from './ThemeNav';
import dayjs from 'dayjs'
import dayjsPluginUTC from 'dayjs/plugin/utc'
dayjs.extend(dayjsPluginUTC)

export default {
  name: 'Theme',
  components: {
    ThemeNav
  },
  computed: {
     last_update() {
      return dayjs
        .utc(this.$frontmatter.last_update)
        .format(this.$themeConfig.dateFormat)
    }
  },
  data() {
    return {
      content: ''
    }
  },
  mounted() {
    this.loadScript('/scripts/hljs.js')
    this.loadStyle('/styles/hljs.css')
  },
  methods: {
    loadScript(url, fn) {
      const script = document.createElement('script');
      script.src = url;
      script.addEventListener('load', fn || function() {});
      document.getElementsByTagName('head')[0].appendChild(script);
    },
    loadStyle(url, fn) {
      const style = document.createElement('link');
      style.href = url;
      style.rel = 'stylesheet';
      style.addEventListener('load', fn || function() {});
      document.getElementsByTagName('head')[0].appendChild(style);
    }
  }
}
</script>

<style lang="stylus">
.theme
  &__name
    font-size: 1.2rem;
  &__hd
    align-items center
    justify-content space-between
  &__top
    padding: 2rem;
    background #FFF
    border-radius 6px
    margin-bottom: 3rem;
  &__title
    font-size: 2rem;
    color var(--theme-accent-color)
    font-family var(--theme-font-heading)
  &__desc
    font-size: 1.5rem;
    margin-top: 1em;
    color var(--theme-foreground-color)
  &__meta
    list-style: none;
    line-height: 2;
    padding-left: 0;
    margin-top: 2rem;
    margin-bottom: 3rem;
  &__screen-shot
    width 50%;
    max-width: 50%;
  .btn-theme
    padding: .5rem;
    border-radius 4px
    background var(--theme-accent-color)
    color #FFF
    &:hover
      opacity: .85;
.readme
  max-width 900px
  margin-left: auto;
  margin-right: auto;
  .deep-link
    display none
</style>