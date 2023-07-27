<template>
  <div class='hospital-list'>
    <div class="item" v-for="item in hospitalData.list" :key="item.id">
      <Card :info="item"/>
    </div>
  </div>
  <blockquote v-if="isShowPagination">
    <el-pagination
      :total="hospitalData.total"
      v-model:current-page="hospitalData.curPage"
      v-model:page-size="hospitalData.pageSize"
      :page-sizes="hospitalData.pageSizeList"
      :layout="hospitalData.layout"
      :disabled="disabled"
      @size-change="onPageSize"
      @current-change="onCurPage"/>
  </blockquote>
</template>

<script lang='ts' setup name="HospitalList">
import Card from '@/components/card/index.vue';
import { reactive, computed, onMounted } from 'vue';
import { HospitalApi } from '@/api/index';
import type { HospitalListResponse, HospitalInfo } from '@/api/type'

export interface HospitalData {
  list: HospitalInfo[];
  total: number;
  curPage: number;
  pageSize: number;
  pageSizeList?: number[];
  layout?: string;
}

const hospitalData = reactive<HospitalData>({
  total: 0,
  curPage: 1,
  pageSize: 20,
  layout: "prev, pager, next, total, sizes, jumper",
  list: [],
});

const disabled = computed(() => !hospitalData.total);
const isShowPagination = computed(() => hospitalData.total);

onMounted(() => {
  getHospitalList();
})

// 获取医院列表
const getHospitalList = async () => {
  try {
    const { curPage: page, pageSize: limit } = hospitalData;
    const res: HospitalListResponse = await HospitalApi.hospitalList({page, limit});
    if(res.code == 200){
      const { content, totalElements: total } = res.data;
      hospitalData.total =  total;
      hospitalData.list = content.map((item: HospitalInfo) => ({...item, logoData: `data:image/jpeg;base64,${item.logoData}`}));
    }
  } catch (e) {
    console.error("[getHospitalList] error: ", e);
  }
}

const onPageSize = function(pageSize: number){
  console.log("[onPageSize]", pageSize, hospitalData);
  getHospitalList();
};
const onCurPage = function(curPage: number){
  console.log("[onCurPage]", curPage);
};


</script>

<style lang='scss' scoped>
.hospital-list{
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  .item{
    width: 48%;
  }
}
</style>
