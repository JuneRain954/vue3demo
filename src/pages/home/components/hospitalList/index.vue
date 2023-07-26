<template>
  <div class='hospital-list'>
    <div class="item" v-for="item in hospitalData.list" :key="item.name">
      <Card :info="item"/>
    </div>
  </div>
  <blockquote v-if="isShowPagination">
    <el-pagination
      :total="hospitalData.total"
      :current-page="hospitalData.curPage"
      :page-size="hospitalData.pageSize"
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
import type { HospitalItem } from '@/components/card/index.vue'
import { HospitalApi } from '@/api/index';
import type { ApiResponse, ListResponseData } from '@/api/index'

export interface HospitalData {
  list: HospitalItem[];
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
    const res: ApiResponse = await HospitalApi.hospitalList({page, limit});
    console.log("[getHospitalList] ==> res: ", res);
    if(res.code == 200){
      const { content, totalElements: total } = res.data as ListResponseData;
      hospitalData.total =  total;
      hospitalData.list = content.map((item: HospitalItem) => ({...item, logoData: `data:image/jpeg;base64,${item.logoData}`}));
    }
  } catch (e) {
    console.error("[getHospitalList] error: ", e);
  }
}

const onPageSize = function(pageSize: number){
  console.log("[onPageSize]", pageSize);
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
