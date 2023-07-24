<template>
  <div class="app-container">
    <Header/>
    <Content />
    <Footer/>
  </div>
</template>

<script setup lang="ts" name="APP">
// 加个注释，避免组件名不生效
</script>

<style scoped>
.app-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
