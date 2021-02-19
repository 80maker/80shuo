<template>
  <div class="theme-post-operate">
    <router-link v-if="$mkPrevPageItem" class="post-operate__prev" :to="$mkPrevPageItem.path">{{$mkPrevPageItem.frontmatter.name}}</router-link>
    <router-link v-if="$mkNextPageItem" class="post-operate__next" :to="$mkNextPageItem.path">{{$mkNextPageItem.frontmatter.name}}</router-link>
    <router-link class="btn-theme" to="/vuepress-theme">All Themes</router-link>
  </div>
</template>
<script>
import mixins from '@theme/mixins';
export default {
  name: 'PostNav',
  mixins: [mixins]
}
</script>
<style lang="stylus">
.theme-post-operate
  display: flex;
  padding: 1.5rem 0;
  border-color: inherit;
  line-height: 1.5;
  align-items center
  &__next
    text-align right
    &:after
      right: -.5rem;
      content: "\E909";
  &__prev:after
    left: -.5rem;
    content: "\E90A";
  a
    position: relative;
    flex: 1;
    padding: 0 1rem;
    white-space nowrap
    &:after
      position: absolute;
      top: 0;
      font-size: 1.4rem;
      font-family: Icon;
      line-height: 1;
  .btn-theme
    flex-grow: 0;
    white-space nowrap
    margin-left: 2rem;
</style>