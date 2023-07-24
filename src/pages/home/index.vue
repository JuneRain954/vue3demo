<template>
  <div class='home-page'>
    <section class="banner">
      <Carousel/>
    </section>
    <Search />
    <h1>Home-Page</h1>
  </div>
</template>

<script lang="ts" setup name="Home">
import Carousel from '@/components/carousel/index.vue';
import Search from '@/components/search/index.vue';

</script>

<style lang='scss' scoped>

</style>


