/**
 * store
 */
import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useHospitalStore = defineStore("hospitalStore", () => {
  const hostype = ref<string>("");      // 医院类型
  const districtCode = ref<string>(""); // 医院地区
  const hospitalName = ref<string>(""); // 医院名称

  const updateHospitalName = (name: string): void => {
    hospitalName.value = name;
  };
    
  return {
    hostype,
    districtCode,
    hospitalName,
    updateHospitalName,
  };
})