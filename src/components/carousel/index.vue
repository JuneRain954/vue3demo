<template>
  <div class='carousel-component'>
    <section class="default" v-if="isShowDefault">
      <el-carousel height="350px">
        <el-carousel-item v-for="item in 4" :key="item">
          <img src="../../assets/images/web-banner-1.png" alt="banner">
        </el-carousel-item>
      </el-carousel>
    </section>
    <section class="specify" v-else>
      <el-carousel height="350px">
        <el-carousel-item v-for="item in props.list" :key="item">
          <img src="../../assets/images/web-banner-1.png" alt="banner">
        </el-carousel-item>
      </el-carousel>
    </section>
  </div>
</template>

<script lang='ts' setup name="Carousel">
import { PropType, computed } from 'vue';

interface CarouselItem {
  url: string; 
}
const props = defineProps({
  list: {
    type: Array as PropType<CarouselItem[]>,
    default: () => [],
  }
});

const isShowDefault = computed(() => {
  return !props.list.length;
})

</script>

<style lang='scss' scoped>
 .carousel-component{
  img{
    height: 100%;
    width: 100%;
  }
 }
</style>
