<template>
  <div class="registration">
    <header class="title">
      <span class="name">{{ registrationData?.hospital?.hosname }}</span>
      <span class="icon">
        <el-icon><Medal /></el-icon>
        {{ registrationData?.hospital.param.hostypeString }}
      </span>
    </header>
    <section class="hospital-info">
      <div class="logo">
        <img :src="logoImgUrl" alt="logo">
      </div>
      <div class="rules">
        <section class="registration-rules">
          <h5 class="rule-title">挂号规则</h5>
          <div class="info">
            <span class="desc">预约周期：<span class="txt">{{ registrationData?.bookingRule.cycle }}天</span></span>
            <span class="desc">放号时间：<span class="txt">{{ registrationData?.bookingRule.releaseTime }}</span></span>
            <span class="desc">停诊时间：<span class="txt">{{ registrationData?.bookingRule.stopTime }}</span></span>
          </div>
          <div class="info">
            <span class="desc">退号时间：<span class="txt">就诊前一工作日{{ registrationData?.bookingRule.quitTime }}前取消</span></span>
          </div>
        </section>
        <section class="appointment-rules">
          <h5 class="rule-title">医院预约规则</h5>
          <div class="rule" v-for="(rule, idx) in registrationData?.bookingRule.rule" :key="rule">{{ `${idx+1}. ${rule}` }}</div>
        </section>
      </div>
    </section>
    <section class="department-info">
      <h2 class="dept-title">选择科室</h2>
      <section class="info-list">
        <aside class="menu-department-list">
          <ul class="menu-list" @click="onSwitchDept">
            <li
              :class="['menu', {'active': menu.depcode == curDeptCode }]"
              v-for="(menu) in departmentList"
              :data-code="menu.depcode"
              :key="menu.depcode">
              {{ menu.depname }}
            </li>
          </ul>
        </aside>
        <aside class="department" ref="departmentContainer">
          <div
            :class="['department-item', {'active': dept.depcode === curDeptCode}]"
            v-for="(dept) in departmentList"
            :key="dept.depcode">
            <h5 class="dept-name" :id="`id-${dept.depcode}`">{{ dept.depname }}</h5>
            <ul class="department-list" @click="onSelectDept">
              <li
                class="item" v-for="(item) in dept.children || []"
                :data-code="item.depcode"
                :key="item.depcode">
                {{ item.depname }}
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </section>
  </div>
</template>

<script lang='ts' setup name="Registration">
import { ref, onMounted, computed, watch } from 'vue';
import { useHospitalDetailStore } from '@/store/hospitalDetail/useHospitalDetailStore';
import { useRoute } from 'vue-router';
import { HospitalApi } from '@/api/index';
import { Medal } from '@element-plus/icons-vue';
import type { HospitalRegistrationResponse, HospitalDepartmentResponse } from '@/api/type.ts';

interface WithDataset {
  dataset: {
    idx?: string | number;
    code?: string;
  };
}

const route = useRoute();
const hospitalDetailStore = useHospitalDetailStore();
const registrationData = ref<HospitalRegistrationResponse["data"]>();
const departmentList = ref<HospitalDepartmentResponse["data"]>();
const departmentContainer = ref<HTMLElement>();
const curDeptCode = ref<string>("");
const selectDeptCode = ref<string>("");
const logoImgUrl = computed(() => `data:image/jpeg;base64, ${registrationData.value?.hospital.logoData}`);

onMounted(() => {
  getHospitalDepartmentList();
  initRegistrationData(hospitalDetailStore.hospitalDetail as HospitalRegistrationResponse["data"]);
})

watch(() => hospitalDetailStore.hospitalDetail, (val) => {
  initRegistrationData(val as HospitalRegistrationResponse["data"]);
})


const getHospitalDepartmentList = async () => {
  try {
    const res: HospitalDepartmentResponse = await HospitalApi.hospitalDepartment({hoscode: `${route.params?.hospitalCode}`});
    if(res.code === 200){
      departmentList.value = res.data;
    }
  } catch (e) {
    console.error("[getHospitalDepartmentList] error: ", e);
  }
}

const initRegistrationData = (data:  HospitalRegistrationResponse["data"]) => {
  if(!registrationData.value) updateRegistrationData(data);
}

const updateRegistrationData = (data: HospitalRegistrationResponse["data"]) => {
  registrationData.value = data;
}

const onSwitchDept = (e: MouseEvent) => {
  const code: string = (e.target as unknown as WithDataset)?.dataset?.code ?? "";
  curDeptCode.value = code;
  scrollToTargetDept();
}

const onSelectDept = (e: MouseEvent) => {
  const code: string = (e.target as unknown as WithDataset).dataset.code ?? "";
  selectDeptCode.value = code;
}

const scrollToTargetDept = () => {
  document.documentElement?.scrollTo(0, 230);
  const targetElement: HTMLElement | null = document.querySelector(`#id-${curDeptCode.value}`);
  const targetLength: number = targetElement?.offsetTop as number;
  const parentLength: number = departmentContainer.value?.offsetTop as number;
  scrollTo(departmentContainer.value as HTMLElement, parentLength, targetLength);
}

const scrollTo = (element: HTMLElement, begin: number, end: number): void => {
  element.scrollTo({
    left: 0,
    top: end - begin,
    behavior: "smooth",
  })
}

</script>

<style lang='scss' scoped>
.registration{
  .title{
    padding: 20px 0 40px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    .name{
      font-size: 20px;
      font-weight: bold;
    }
    .icon{
      color: #bbb;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .hospital-info{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    .logo{
      margin-top: 8px;
      width: 80px;
      aspect-ratio: 1/1;
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 100%;
        aspect-ratio: 1/1;
      }
    }
    .rules{
      .info{
        margin-bottom: 10px;
      }
      .rule-title{
        padding: 10px 0;
        font-size: 18px;
      }
      .desc{
        font-size: 12px;
        color: #bbb;
        margin-right: 40px;
        .txt{
          color: #333;
        }
      }
      .rule{
        font-size: 12px;
        color: #bbb;
        margin-bottom: 10px;
      }
    }
  }
  .department-info{
    .dept-title{
      font-weight: bold;
      font-size: 16px;
      padding: 20px 0;
    }
    .info-list{
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 10px;
      .menu-department-list{
        width: 15%;
        .menu-list{
          background-color: #f4f9ff;
          height: 1000px;
          font-size: 14px;
          text-align: center;
          outline: 5px solid #f4f9ff;
          overflow-y: auto;
          .menu{
            &.active{
              font-weight: bold;
              font-size: 18px;
            }
            &:hover{
              color: #42a5f5;
              background: #fff;
            }
            cursor: pointer;
            padding: 20px;
          }
        }
      }
      .department{
        width: 80%;
        height: 1000px;
        overflow-y: auto;
        .department-item{
          padding-left: 10px;
          &.active{
            background-color: #f4f9ff;
            background-clip: border-box;
          }
          .dept-name{
            padding: 5px 20px;
            margin: 20px 0 5px 0;
            font-weight: bold;
            background: linear-gradient(90deg, #42a5f5 0, #42a5f5 5px, transparent 5px, transparent 100%);
          }
          .department-list{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
            font-size: 14px;
            .item{
              &:hover{
                color: #42a5f5;
              }
              width: 30%;
              color: #666;
              padding: 10px 0;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
