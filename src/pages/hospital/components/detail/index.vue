<template>
  <div class='detail  text-blue-700'>
  {{ txt }} 
  </div>
</template>

<script lang='ts' setup name="Detail">
import { ref } from 'vue';

const txt = ref<string>("Detail");

</script>

<style lang='scss' scoped>

</style>
