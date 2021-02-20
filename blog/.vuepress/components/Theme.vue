<template>
  <div class="gallery-post theme-main__inner">
    <div class="gallery-post__hd d-flex justify-space-between align-center">
      <strong class="gallery-post__name">VuePress Themes</strong>
      <router-link class="btn-theme" to="/vuepress-theme">All Themes</router-link>
    </div>
    <div class="gallery-post__top">
      <div class="gallery-post__info">
        <div class="gallery-post__title">{{$frontmatter.name}}</div>
        <p class="gallery-post__desc">{{$frontmatter.description}}</p>
        <ul class="gallery-post__meta">
          <li>Author: <a :href="$frontmatter.homepage" target="_blank" rel="external nofollow noopener">{{$frontmatter.author.name}}</a></li>
          <li>Last Update: {{last_update}}</li>
          <li>Latest Version: {{$frontmatter.latest}}</li>
          <li>License: {{$frontmatter.license}}</li>
          <li>tags: {{$frontmatter['theme-tags'].join(', ')}}</li>
        </ul>
        <a class="btn-theme mr-2" target="_blank" rel="external nofollow noopener" :href="$frontmatter.repo">Repository</a>
        <a class="btn-theme mr-2" target="_blank" rel="external nofollow noopener" :href="$frontmatter.homepage">Homepage</a>
        <a v-if="$frontmatter.site" class="btn-theme" target="_blank" rel="external nofollow noopener" :href="$frontmatter.site">Preview</a>
      </div>
    </div>
    <ThemeNav class="mt-2"/>
    <div class="readme mt-2" v-html="$frontmatter.readme"></div>
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
.gallery-post
  border-radius: 6px;
  line-height 1.8
  color var(--theme-foreground-color)
  &__hd
    padding: 0 0 2rem;
    line-height: 1;
  &__name
    display: block;
    font-size: 1.78571rem;
    font-family: var(--theme-font-heading);
  &__top
    padding: 2rem;
    border-radius 6px
    background var(--theme-card-background)
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
  .btn-theme
    padding: .5rem;
    border-radius 4px
    background var(--theme-accent-color)
    color #FFF
    &:hover
      opacity: .85;
.readme
  border-radius 6px
  background var(--theme-card-background)
  padding: .80625rem 2.15rem 2.15rem;
  max-width 900px
  margin-left: auto;
  margin-right: auto;
  .deep-link
    display none
@media (max-width: $MQMobile)
  .gallery-post
    margin-top: 2rem;
    &__hd
      padding-left: 2rem;
      padding-right: 2rem;
    &__top
      flex-direction column
</style>