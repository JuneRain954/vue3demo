<template>
  <div class='hospital-list'>
    <div class="item" v-for="item in hospitalData.list" :key="item.id">
      <Card :info="item" @click="onClickHospital(item)"/>
    </div>
  </div>
  <el-empty v-if="isEmpty" description="暂无数据" />
  <blockquote v-if="isShowPagination">
    <el-pagination
      :total="hospitalData.total"
      v-model:current-page="hospitalData.curPage"
      v-model:page-size="hospitalData.pageSize"
      :page-sizes="hospitalData.pageSizeList"
      :layout="hospitalData.layout"
      :disabled="isEmpty"
      @size-change="onPageSize"
      @current-change="onCurPage"/>
  </blockquote>
</template>

<script lang='ts' setup name="HospitalList">
import Card from '@/components/card/index.vue';
import { reactive, computed, onMounted, onUnmounted, watch, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
import { HospitalApi } from '@/api/index';
import { ROUTES } from '@/router/const';
import type { HospitalListResponse, HospitalInfo } from '@/api/type'
import type { Message } from 'element-plus'

export interface HospitalData {
  list: HospitalInfo[];
  total: number;
  curPage: number;
  pageSize: number;
  districtCode: string;
  hosType: string;
  hospitalName: string;
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
  },
  hospitalName: {
    type: String,
    default: "",
  },
});

const router = useRouter();

const hospitalData = reactive<HospitalData>({
  total: 0,
  curPage: 1,
  pageSize: 20,
  layout: "prev, pager, next, total, sizes, jumper",
  districtCode: "",
  hosType: "",
  hospitalName: "",
  list: [],
});

const isEmpty = computed(() => !hospitalData.total);
const isShowPagination = computed(() => hospitalData.total);
let inst = getCurrentInstance();

onMounted(() => {
  getHospitalList();
})

onUnmounted(() => {
  inst = null;
})

watch(() => props.districtCode, (val) => {
  updateHospitalData({districtCode: val});
  getHospitalList();
})

watch(() => props.hostype, (val) => {
  updateHospitalData({hosType: val});
  getHospitalList();
})

watch(() => props.hospitalName, (val) => {
  updateHospitalData({hospitalName: val})
  getHospitalList();
})

const updateHospitalData = (data: Partial<HospitalData>) => {
  Object.assign(hospitalData, data);
}


// 获取医院列表
const getHospitalList = async () => {
  try {
    const {
      curPage: page,
      pageSize: limit,
      districtCode,
      hosType: hostype,
      hospitalName: hosname,
    } = hospitalData;
    const res: HospitalListResponse = await HospitalApi.hospitalList({page, limit, districtCode, hostype, hosname});
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

const onClickHospital = function(info: HospitalInfo): void{
  toDetail(info.hoscode);
}

const toDetail = (hospitalCode: string): void => {
  router.push({name: ROUTES.HOSPITAL_DETAIL.name, params: { hospitalCode }});
}


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
