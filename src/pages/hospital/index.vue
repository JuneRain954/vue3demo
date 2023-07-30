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

<script lang='ts' setup name="hospital">
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ROUTES } from '@/router/const';
import type { RouteRecordRaw } from 'vue-router'

const route = useRoute();
const router = useRouter();

const menuList = ref<RouteRecordRaw[]>([]);
const curRouteName = computed(() => route.name);

onMounted(() => {
  initMenuList();
})

const initMenuList = () => {
  menuList.value = ROUTES.HOSPITAL_DETAIL.children.reduce((list: RouteRecordRaw[], menu: RouteRecordRaw) => {
    list.push(menu);
    return list;
  }, []);
}

const onSwitchRoute = (menu: RouteRecordRaw) => {
  router.replace({name: menu.name});
}

</script>

<style lang='scss' scoped>
.hospital-page{
  display: flex;
  align-items: center;
  justify-content: center;
  .menu-container{
    width: 20%;
    box-sizing: border-box;
    border-right: 1px solid red;
    .menu-list{
      .menu{
        &.active{
          color: #42a5f5;
          background: linear-gradient(90deg, #42a5f5 0, #42a5f5 10px, #fff 10px, #fff 100%);
        }
        font-size: 18px;
        height: 40px;;
        line-height: 40px;
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

