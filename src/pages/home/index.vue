<template>
  <div class='home-page'>
    <section class="banner">
      <Carousel/>
    </section>
    <section class="operation">
      <Search @getQueryContent="onQueryContent" />
    </section>
    <section class="content">
      <el-row :gutter="20">
        <el-col :span="20">
          <HospitalType v-model:hostype="hosType" />
          <HospitalRegion v-model:districtCode="districtCode" />
          <HospitalList />
        </el-col>
        <el-col :span="4">
          <HospitalDepartment />
          <NormalNotice />
          <WarnNotice />
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script lang="ts" setup name="Home">
import Carousel from '@/components/carousel/index.vue';
import Search from '@/components/search/index.vue';
import HospitalType from './components/hospitalType/index.vue';
import HospitalRegion from './components/hospitalRegion/index.vue';
import HospitalList from './components/hospitalList/index.vue';
import HospitalDepartment from './components/hospitalDepartment/index.vue';
import NormalNotice from './components/normalNotice/index.vue';
import WarnNotice from './components/warnNotice/index.vue';
import { ref, watch } from 'vue';
import { useHospitalStore } from '@/store/index';

const hosType = ref<string>("");
const districtCode = ref<string>("");
const hospitalStore = useHospitalStore();

watch(hosType, (val) => {
  hospitalStore.$patch({hostype: val});
})

watch(districtCode, (val) => {
  hospitalStore.$patch((state) => state.districtCode = val);
})

const onQueryContent = (queryContent: string): void => {
  hospitalStore.updateHospitalName(queryContent);
}



</script>

<style lang='scss' scoped>

</style>


