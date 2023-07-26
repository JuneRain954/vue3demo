<template>
  <div class='home-page'>
    <section class="banner">
      <Carousel/>
    </section>
    <section class="operation">
      <Search />
    </section>
    <section class="content">
      <el-row :gutter="20">
        <el-col :span="20">
          <HospitalType />
          <HospitalRegion />
          <HospitalList />
        </el-col>
        <el-col :span="4">2222</el-col>
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








</script>

<style lang='scss' scoped>

</style>


