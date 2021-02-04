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
                <a class="shot-thumbnail-link dribbble-link js-shot-thumbnail-link"
                  href="/shots/14377374--Exploration-Sport-News-Hero-Section">
                  <span class="accessibility-text">View #Exploration - Sport News Hero Section</span>
                </a>
                <div class="shot-thumbnail-overlay">
                  <div class="shot-thumbnail-overlay-content">
                    <div class="shot-title">#Exploration - Sport News Hero Section</div>
                  </div>
                </div>
              </div>
              <div class="shot-details-container">
                <div class="user-info">
                  <a class="hoverable url" rel="contact" href="/paperpillar">
                    <img
                      :alt="item.frontmatter.author"
                      :src="item.avatar"/>
                    <span class="display-name">{{item.frontmatter.author}}</span></a>
                  <span class="badge">Community</span>
                </div>
                <div class="shot-statistics-container js-shot-statistics" style="visibility: visible;">
                  <div class="shot-statistic js-shot-comments-container">
                    <a class="js-overlay-scroll-to-section" rel="no-follow" data-scroll-to-id="js-add-comment"
                      href="/shots/14377374--Exploration-Sport-News-Hero-Section">
                    </a> 
                  </div>
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
    grid-gap: 36px;
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
    list-style none
  &__item
    max-width 360px
  &__pic-container
    position: relative;
    border-radius: 8px;
  &__pic
    height: 270px;
    background-color  var(--theme-card-background)
    background-size cover
    background-position center center
</style>