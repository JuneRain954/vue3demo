import { createRouter, createWebHistory } from 'vue-router';

// 路由
const routes = [
  {
    path: "/home",
    component: () => import("@/pages/home/index.vue"),
  },
  {
    path: "/hospital",
    component: () => import("@/pages/hospital/index.vue"),
  },
  {
    path: "/",
    redirect: "/home",
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }), // 路由切换后的页面滚动行为
});

export default router;