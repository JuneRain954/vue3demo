<template>
  <div class='hospital-region-component'>
    <Info :desc="region.desc" :list="regionList" />
  </div>
</template>

<script lang='ts' setup name="HospitalRegion">
import { reactive, onMounted, computed } from 'vue';
import Info from '@/components/info/index.vue';
import { HospitalApi } from '@/utils/request/index';

const region = reactive({
  desc: "地区",
  list: [],
})

onMounted(() => {
  getHospitalRegion();
})

const regionList = computed(() => [{id: "randomStr", name: "全部", value: ""}, ...region.list]);

const getHospitalRegion =async () => {
  try {
    const res = await HospitalApi.hospitalRegion();
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
