<template>
  <Layout>
    <template slot="main">
      <div class="theme-main__inner gallery">
        <div v-if="$page.pageType === 'theme'"  class="gallery-list-wrap">
          <div class="gallery-search">
            <input v-model="keyword" type="text" placeholder="Search...">
          </div>
          <h2>{{currentKeyword}}</h2>
          <p>A curated list of awesome things related to VuePress Theme</p>
          <!-- <div class="gallery-operate">
            <p><strong>Newest:</strong> <a href="#">Dark</a> <a href="#">Colorful</a> <a href="#">Docs</a></p>
            <a href="javascript:;">Filters <Icon icon="filter"/></a>
          </div> -->
          <!-- <div class="gallery-filter">
            <fieldset class="find-shots-tag">
              <a class="clear-filter d-none" data-param="tag" href="/search/shots/filters?q=blog">Clear</a>
              <label>Tags</label>
              <div class="input-with-icon">
                <input type="search" name="tag" id="tag" value="" data-name="Tag" data-track-filter="true" autocomplete="off">
                <Icon icon="search"/>
              </div>
            </fieldset>
          </div> -->
          <ol class="gallery__list">
            <li class="gallery__item" v-for="item in galleryList" :key="item.path">
              <div class="gallery__pic-container">
                <div class="gallery__pic" :style="{backgroundImage: `url(${item.frontmatter.cover})`}">
                </div>
                <a href="">
                  <span>{{item.frontmatter.name}}</span>
                </a>
              </div>
              <div class="gallery__footer">
                <div class="user-info">
                  <a rel="contact" ref="noopener noreferrer nofollow" target="_blank" :href="`https://www.npmjs.com/~${item.frontmatter.author}`">
                    <img
                      :alt="item.frontmatter.author"
                      :src="item.frontmatter.avatar"/>
                    <span class="name">{{item.frontmatter.author}}</span>
                  </a>
                  <span class="badge">Community</span>
                </div>
                <div class="social-link">
                  <i class="icon-github"/>
                  <Icon icon="npm"/>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <Theme v-else-if="$page.pageType === 'themeItem'" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from 'vuepress-theme-maker/layouts/Layout';
import Theme from './Theme';
export default {
  name: 'GalleryLayout',
  components: {
    Layout
  },
  computed: {
    galleryList() {
      let list = this.$site.pages.filter(item => {
        return item.pid === 'theme';
      });
      list = list.sort((a,b) => {
        let time1 = new Date(a.frontmatter.date);
        let time2 = new Date(b.frontmatter.date);
        return time2 - time1;
      });
      return list;
    }
  },
  data() {
    return {
      keyword: '',
      currentKeyword: ''
    }
  }
}
</script>

<style lang="stylus" scope>
.theme-main__inner.gallery
  max-width calc(100% - 4rem)
.gallery
  &__list
    display: grid;
    grid-gap: 3.33%;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    list-style none
    padding-left: 0;
  &__item
    max-width 360px
  &__pic-container
    position: relative;
  &__pic
    border-radius: 8px;
    height: 270px;
    background-color  var(--theme-card-background)
    background-size cover
    background-position center center
  &__footer
    margin-top: 8px;
.user-info
  display: flex;
  .badge
    display: flex;
    align-items center
    transition: color, background-color 200ms ease;
    font-size: 10px;
    margin-left: 8px;
    line-height: 1;
    text-transform: uppercase;
    color: #fff;
    background: #ccc;
    border-radius: 3px;
    padding 2px 3px
    cursor: pointer;
    &:hover
      color #fff
      background-color var(--theme-accent-color)
  a
    display: flex;
    align-items center
    img
      width: 24px;
      height: 24px;
      overflow: hidden;
      border-radius 50%
    .name
      margin-left: 8px;
      font-size: 14px;
</style>