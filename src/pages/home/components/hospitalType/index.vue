<template>
  <div class='hospital-type-component'>
    <Info :title="level.title" :desc="level.desc" :list="levelList" />
  </div>
</template>

<script lang='ts' setup name="HospitalType">
import { reactive, onMounted, computed } from 'vue';
import Info from '@/components/info/index.vue';
import { HospitalApi } from '@/utils/request/index.ts';
import type { ApiResponse } from '@/utils/request/index.ts'



const level = reactive({
  title: "医院",
  desc: "等级",
  list: [],
})

onMounted(() => {
  getHospitalType();
})

const levelList = computed(() => [{id: "reandomStr", name: "全部", value: ""}, ...level.list]);

// 获取医院类型
const getHospitalType = async () => {
  try {
    const res: ApiResponse = await HospitalApi.hospitalType();
    if(res.code == 200){
      level.list = res.data;
    }
  } catch (e) {
    console.error("[getHospitalType] error: ", e);
  }
}


</script>

<style lang='scss' scoped>

</style>
