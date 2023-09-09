<template>
  <div class="hospital-page">
    <nav class="menu-container">
      <ul class="menu-list">
        <li
          @click="onSwitchRoute(menu)"
          :class="['menu', {'active': menu.name === curRouteName}]"
          v-for="(menu) in menuList"
          :key="menu.path">
          {{ menu.meta?.menuName }}
        </li>
      </ul>
    </nav>
    <section class="content">
      <RouterView />
    </section>
  </div>
</template>

<script lang='ts' setup name="Hospital">
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ROUTES } from '@/router/const';
import { useHospitalDetailStore } from '../../store/hospitalDetail/useHospitalDetailStore';
import { HospitalApi } from '@/api/index';
import type { RouteRecordRaw } from 'vue-router'
import type { HospitalRegistrationResponse } from "@/api/type.ts";

const route = useRoute();
const router = useRouter();

const hospitalDeatilStore = useHospitalDetailStore();

const menuList = ref<RouteRecordRaw[]>([]);
const curRouteName = computed(() => route.name);

onMounted(() => {
  initMenuList();
  initHospitalDetailStore();
})

const initMenuList = () => {
  menuList.value = ROUTES.HOSPITAL_DETAIL.children.reduce((list: RouteRecordRaw[], menu: RouteRecordRaw) => {
    list.push(menu);
    return list;
  }, []);
}

const initHospitalDetailStore = async () => {
  try {
    const res: HospitalRegistrationResponse = await HospitalApi.hospitalRegistration({hoscode: `${route.params?.hospitalCode}`});
    if(res.code === 200){
      hospitalDeatilStore.updateHospitalDetail(res.data);
    }
  } catch (e) {
    console.error("[initHospitalDetailStore] eror: ", e);
  }
}

const onSwitchRoute = (menu: RouteRecordRaw) => {
  router.replace({name: menu.name});
}

</script>

<style lang='scss' scoped>
.hospital-page{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  .menu-container{
    width: 20%;
    min-height: 100vh;
    box-sizing: border-box;
    .menu-list{
      .menu{
        &.active{
          color: #42a5f5;
          font-weight: bold;
          // background: linear-gradient(90deg, #42a5f5 0, #42a5f5 10px, #fff 10px, #fff 100%);
        }
        font-size: 18px;
        height: 80px;;
        line-height: 80px;
        text-align: center;
      }
    }
  }
  .content{
    width: 80%;
    box-sizing: border-box;
    padding: 0 0 0 20px;
  }
}
</style>

