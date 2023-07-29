<template>
  <div :class="['hospital-list', {'empty': disabled}]" data-tip="暂无数据">
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
import { reactive, computed, onMounted, onUnmounted, watch, getCurrentInstance } from 'vue';
import { HospitalApi } from '@/api/index';
import type { HospitalListResponse, HospitalInfo } from '@/api/type'
import type { Message } from 'element-plus'

export interface HospitalData {
  list: HospitalInfo[];
  total: number;
  curPage: number;
  pageSize: number;
  districtCode: string;
  hosType: string;
  pageSizeList?: number[];
  layout?: string;
}

interface WithMessage{
  $message: Message;
}


const props = defineProps({
  districtCode: {
    type: String,
    default: "",
  },
  hostype: {
    type: String,
    default: ""
  }
});

const hospitalData = reactive<HospitalData>({
  total: 0,
  curPage: 1,
  pageSize: 20,
  layout: "prev, pager, next, total, sizes, jumper",
  districtCode: "",
  hosType: "",
  list: [],
});

const disabled = computed(() => !hospitalData.total);
const isShowPagination = computed(() => hospitalData.total);
let inst = getCurrentInstance();

onMounted(() => {
  getHospitalList();
})

onUnmounted(() => {
  inst = null;
})

watch(() => props.districtCode, (val) => {
  hospitalData.districtCode = val;
  getHospitalList();
})

watch(() => props.hostype, (val) => {
  hospitalData.hosType = val;
  getHospitalList();
})


// 获取医院列表
const getHospitalList = async () => {
  try {
    const { curPage: page, pageSize: limit, districtCode, hosType: hostype } = hospitalData;
    const res: HospitalListResponse = await HospitalApi.hospitalList({page, limit, districtCode, hostype});
    if(res.code == 200){
      const { content, totalElements: total } = res.data;
      hospitalData.total =  total;
      hospitalData.list = content.map((item: HospitalInfo) => ({...item, logoData: `data:image/jpeg;base64,${item.logoData}`}));
      !total && (inst?.proxy as unknown as WithMessage)?.$message({ message: "暂无数据" });
    }
  } catch (e: any) {
    console.error("[getHospitalList] error: ", e);
    (inst?.proxy as unknown as WithMessage)?.$message({message: e?.message});
  }
}

const onPageSize = function(){
  getHospitalList();
};
const onCurPage = function(){
  getHospitalList();
};


</script>

<style lang='scss' scoped>
.hospital-list{
  &.empty{
    position: relative;
    &::after{
      content: attr(data-tip);
      font-size: 20px;
      color: #bbb;;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
  }
  min-height: 400px;
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
