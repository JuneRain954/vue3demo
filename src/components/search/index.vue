<template>
  <div class='search-component'>
    <el-autocomplete
      clearable
      placeholder="请输入医院名称"
      v-model="search"
      @select="onSelect"
      :fetch-suggestions="onSearch"/>
     <el-button round size="large" type="primary" :icon="Search" @click="onSearch" />
  </div>
</template>

<script lang='ts' setup name="Search">
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';

let search = ref("");

const onSelect = () => {
  console.log("[onSelect]");
};

const onSearch = () => {
  console.log("[onSearch]");
};

</script>

<style lang='scss' scoped>
.search-component{
  width: 100%;
  height: 50px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  // 搜索框样式调整
  :deep(.el-autocomplete){
    width: 600px;
    height: 40px;
    .el-input{
      height: 100%;
      .el-input__wrapper{
        border-radius: 20px;
        padding-right: 54px;
        .el-input__inner{
          padding-left: 6px;
        }
      }
    }
  }
  :deep(.el-button){
    margin-left: -54px;
    position: relative;
  }
}
</style>
