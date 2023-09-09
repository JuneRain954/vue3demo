/**
 * 医院详情信息
 */

import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { HospitalRegistrationResponse } from "../../api/type";


export const useHospitalDetailStore = defineStore("hospitalDetailStore", () => {
  const hospitalDetail = ref<HospitalRegistrationResponse["data"]>();

  const updateHospitalDetail = (data: HospitalRegistrationResponse["data"]) => {
    hospitalDetail.value = data;
  }

  return {
    hospitalDetail,
    updateHospitalDetail,
  };
})