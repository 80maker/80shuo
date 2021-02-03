<template>
  <Layout>
    <template slot="main">
      <div class="theme-main__inner">
        <div v-if="$page.pageType === 'theme'">
          theme index
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
  }
}
</script>

<style>

</style>