<template>
  <div class='registration'>
    {{ txt }}
  </div>
</template>

<script lang='ts' setup name="Registration">
import { ref } from 'vue';

const txt = ref<string>("Registration");

</script>

<style lang='scss' scoped>

</style>
