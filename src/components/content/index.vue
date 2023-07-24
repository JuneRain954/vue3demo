<template>
  <div class="content">
    <RouterView />
  </div>
</template>

<script setup lang='ts' name="Content">
// 加个注释，避免组件名不生效
</script>

<style scoped>
.content{
  margin-top: 70px;
  min-height: 900px;
  width: 1200px;
}
</style>