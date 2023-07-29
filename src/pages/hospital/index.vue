<template>
  <div class='hospital-page'>
    <h1>Hospital-Page</h1>
  </div>
</template>

<script lang='ts' setup name="hospital">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
  console.log("[onMounted] ==> ", route);
})

</script>

<style lang='scss' scoped>

</style>

