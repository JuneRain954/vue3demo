<template>
  <div class='search-component'>
    <el-autocomplete
      clearable
      placeholder="请输入医院名称"
      v-model="hospitalName"
      :trigger-on-focus="false"
      @select="onSelect"
      :fetch-suggestions="onQuery"/>
     <el-button round size="large" type="primary" :icon="Search" @click="onSearch" />
  </div>
</template>

<script lang='ts' setup name="Search">
import { ref } from 'vue';
import { HospitalApi } from '@/api/home/index';
import { Search } from '@element-plus/icons-vue';
import type { HospitalNameResponse, HospitalInfo } from '@/api/type'

type Func = (...args: any) => any;

const emit = defineEmits(["getQueryContent"]);

const hospitalName = ref<string>("");

const onSelect = () => {
  emit("getQueryContent", hospitalName.value);
};

const onQuery = async (keyword: string, callback: Func) => {
  const res = await queryByName(keyword.trim());
  callback(res.map((item: HospitalInfo) => ({...item, value: item.hosname})));
};
const onSearch = () => {
  onSelect();
}

const queryByName = async (hosname: string) => {
  let list: HospitalInfo[] = [];
  try {
    const res: HospitalNameResponse = await HospitalApi.queryHospitalByName({ hosname });
    list = (res.code === 200) ? res.data : [];
  } catch (e: any) {
    console.error("[queryByName] error: ", e);
  }finally{
    return list;
  }
}

</script>

<style lang='scss' scoped>
.search-component{
  width: 100%;
  height: 50px;
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  // 搜索框样式调整
  :deep(.el-autocomplete){
    width: 800px;
    height: 60px;
    .el-input{
      height: 100%;
      .el-input__wrapper{
        border-radius: 50px;
        padding-right: 54px;
        .el-input__inner{
          padding-left: 10px;
          font-size: 18px;
        }
      }
    }
  }
  :deep(.el-button){
    background-color: #409eff;
    margin-left: -54px;
    width: 100px;
    height: 60px;
    border-radius: 50px;
    position: relative;
  }
}
</style>
