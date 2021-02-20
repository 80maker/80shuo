<template>
  <Layout>
    <template slot="main">
      <div v-if="$page.pageType === 'theme'" class="theme-main__inner gallery">
        <div  class="gallery-list-wrap">
          <!-- <div class="gallery__search">
            <input v-model="keyword" type="text" placeholder="Search...">
          </div> -->
          <!-- <h2>{{currentKeyword}}</h2> -->
          <h1 class="title">{{$page.frontmatter.description}}</h1>
          <router-link class="btn-submit" to="/post/2021/02/06/theme-submit"><i class="icon-folder-plus"></i> <span>Submit Your Theme</span></router-link>
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
                <div class="gallery__pic" :class="{'gallery__pic--empty': !item.frontmatter.cover}" :style="{backgroundImage: `url(${item.frontmatter.cover || 'none'})`}">
                </div>
                <router-link class="gallery__overlay" :to="item.path"><span>{{item.frontmatter.name}}</span></router-link>
                <p class="gallery__desc">{{item.frontmatter.desc}}</p>
                <a v-if="item.frontmatter.site" class="gallery__external" target="_blank" ref="noopener noreferrer nofollow" :href="item.frontmatter.site">
                  <i class="icon-external"/> <span>{{item.frontmatter.site}}</span>
                </a>
              </div>
              <div class="gallery__footer">
                <div class="user-info">
                  <a rel="contact" href="javascript:;">
                    <img
                      :alt="item.frontmatter.author.name"
                      :src="item.frontmatter.avatar"/>
                    <span class="name">{{item.frontmatter.author.name}}</span>
                    <span class="badge">{{item.frontmatter.from}}</span>
                  </a>
                </div>
                <div class="social-link">
                  <a :href="item.frontmatter.repo" :title="item.frontmatter.repo" ref="noopener noreferrer nofollow" target="_blank"><Icon icon="git"/></a>
                  <a :href="`https://www.npmjs.com/${item.frontmatter.name}`" :title="`https://www.npmjs.com/${item.frontmatter.name}`" ref="noopener noreferrer nofollow" target="_blank"><Icon icon="npm"/></a>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <Theme v-else-if="$page.pageType === 'themeItem'" />
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
  max-width calc(100% - 72px)
  margin-top: 1rem;
  .title
    font-size: 16px;
    font-weight normal
    text-align: center;
    font-family var(--theme-font-base)
    margin-bottom: 1rem;
    margin-top: 2rem;
  .btn-submit
    color #FFF
    display flex
    align-items center
    justify-content center
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    border: none;
    text-decoration: none;
    background: var(--theme-accent-color);
    transition: all 200ms ease;
    border-radius: 8px;
    appearance: none;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    height: 32px;
    width: 180px;
    box-sizing: border-box;
    margin-bottom: 2rem;
    > i
      margin-right: 5px;
      transform translateY(-2px)
    &:hover
      opacity: .8;
.gallery
  &__search
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, .06);
    border-radius: 8px;
    height: 48px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    > input
      font-size: 16px;
      padding: 0;
      height: 100%;
      padding-left: 60px;
      padding-right: 24px;
      background: transparent;
      border: 1px solid transparent;
      outline none
  &__list
    display: grid;
    margin-left: auto;
    margin-right: auto;
    grid-gap: 36px;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    list-style none
    padding-left: 0;
  &__pic-container
    position: relative;
    background-color  var(--theme-card-background)
    border-radius: 8px;
    &:hover .gallery__external span
        max-width: 150px;
        margin-left: 4px;
  &__desc
    display none
  &__pic
    border-radius: 8px;
    height: 0;
    padding-bottom: 75%;
    overflow: hidden;
    background-size contain
    background-position center center
    background-repeat: no-repeat;
    &--empty
      &:after
        content: ''
        position: absolute;
        background-repeat: no-repeat;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background-image url('/images/default-picture.svg')
        background-position center center
        opacity: .2
        background-size 30%
  &__footer
    display: flex;
    margin-top: 8px;
  &__external
    position: absolute;
    right: .85rem;
    top: .85rem;
    background: #fff;
    color: #0d0c22;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 4px;
    border: 1px solid rgba(0,0,0,0.1);
    box-sizing border-box
    > i
      font-size: 1rem;
    > span
      max-width: 0;
      overflow: hidden;
      transition-property max-width;
      transition-duration .3s
      text-overflow: ellipsis;
      white-space: nowrap;
  &__overlay
    cursor: pointer;
    position absolute
    display: flex;
    align-items flex-end
    border-radius 8px
    padding: 20px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 300ms ease;
    background: linear-gradient(
      180deg,
      transparent 62%,
      rgba(0, 0, 0, 0.00345888) 63.94%,
      rgba(0, 0, 0, 0.014204) 65.89%,
      rgba(0, 0, 0, 0.0326639) 67.83%,
      rgba(0, 0, 0, 0.0589645) 69.78%,
      rgba(0, 0, 0, 0.0927099) 71.72%,
      rgba(0, 0, 0, 0.132754) 73.67%,
      rgba(0, 0, 0, 0.177076) 75.61%,
      rgba(0, 0, 0, 0.222924) 77.56%,
      rgba(0, 0, 0, 0.267246) 79.5%,
      rgba(0, 0, 0, 0.30729) 81.44%,
      rgba(0, 0, 0, 0.341035) 83.39%,
      rgba(0, 0, 0, 0.367336) 85.33%,
      rgba(0, 0, 0, 0.385796) 87.28%,
      rgba(0, 0, 0, 0.396541) 89.22%,
      rgba(0, 0, 0, 0.4) 91.17%);
    &:hover
      opacity: 1;
    > span
      font-family var(--theme-font-heading)
      color: #fff;
      font-size: 18px;
      line-height: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
.user-info
  display: flex;
  align-items center
  .badge
    display: flex;
    align-items center
    transition: color, background-color 200ms ease;
    font-size: 10px;
    margin-left: 8px;
    line-height: 1;
    font-family var(--theme-font-label)
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
.social-link
  display: flex;
  flex auto
  font-size: 1.2rem;
  justify-content flex-end
  align-items center
  a
    margin-left: 8px;
@media (min-width: 1600px)
  .gallery
    &__list
      grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
</style>