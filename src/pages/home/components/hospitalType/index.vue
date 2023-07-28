<template>
  <div class='hospital-type-component'>
    <Info v-model:val="hospitalType" :title="level.title" :desc="level.desc" :list="levelList" />
  </div>
</template>

<script lang='ts' setup name="HospitalType">
import { reactive, onMounted, computed } from 'vue';
import Info from '@/components/info/index.vue';
import { HospitalApi } from '@/api/index';
import type { HospitalTypeResponse, HospitalType } from '@/api/type';

const props = defineProps({
  hostype: {
    type: [String, Number],
    default: "",
  }
})

const emit = defineEmits<{
  (event: "update:hostype", val: string | number): void,
}>()

const hospitalType = computed({
  get(){
    return props.hostype;
  },
  set(val){
    emit("update:hostype", val);
  }
})


const level = reactive<{
  title: string;
  desc: string;
  list: HospitalType[]
}>({
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
    const res: HospitalTypeResponse = await HospitalApi.hospitalType();
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
