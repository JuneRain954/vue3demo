/**
 * 路由信息
 */

export const ROUTES = {
  HOME: {
    name: "home",
    path: "/home",
    component: () => import("@/pages/home/index.vue"),
  },
  HOSPITAL_DETAIL: {
    name: "hospitalDetail",
    path: "/hospital/:hospitalCode",
    component: () => import("@/pages/hospital/index.vue"),
  },
  REDIRECT: {
    path: "/",
    redirect: "/home",
  },
}