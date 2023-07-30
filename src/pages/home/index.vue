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
          <HospitalList :hostype="hosType" :districtCode="districtCode" :hospitalName="hospitalName" />
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
import { ref } from 'vue';

const hosType = ref<string>("");
const districtCode = ref<string>("");
const hospitalName = ref<string>("");

const onQueryContent = (queryContent: string): void => {
  hospitalName.value = queryContent;
}


</script>

<style lang='scss' scoped>

</style>


