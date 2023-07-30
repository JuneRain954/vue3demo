<template>
  <div class='notice'>
  {{ txt }}
  </div>
</template>

<script lang='ts' setup name="Notice">
import { ref } from 'vue';

const txt = ref<string>("Notice");

</script>

<style lang='scss' scoped>

</style>
