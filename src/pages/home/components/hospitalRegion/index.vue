<template>
  <div class='hospital-region-component'>
    <Info :desc="region.desc" :list="regionList" />
  </div>
</template>

<script lang='ts' setup name="HospitalRegion">
import { reactive, onMounted, computed } from 'vue';
import Info from '@/components/info/index.vue';
import { HospitalApi } from '@/api/index';
import type { HospitalRegionResponse, HospitalRegion } from '@/api/type'

const region = reactive<{
  desc: string;
  list: HospitalRegion[];
}>({
  desc: "地区",
  list: [],
})

onMounted(() => {
  getHospitalRegion();
})

const regionList = computed(() => [{id: "randomStr", name: "全部", value: ""}, ...region.list]);

const getHospitalRegion =async () => {
  try {
    const res: HospitalRegionResponse = await HospitalApi.hospitalRegion();
    console.log("[getHospitalRegion] res: ", res);
    if(res.code == 200){
      region.list = res.data;
    }
  } catch (e) {
    console.error("[getHospitalRegion] error: ", e);
  }
}

</script>

<style lang='scss' scoped>

</style>
