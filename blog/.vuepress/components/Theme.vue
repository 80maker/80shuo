<template>
  <div class="theme">theme
    {{$page.pageType}}
    <ThemeNav/>
  </div>
</template>

<script>
import ThemeNav from './ThemeNav';
export default {
  name: 'Theme',
  components: {
    ThemeNav
  }
}
</script>

<style>

</style>