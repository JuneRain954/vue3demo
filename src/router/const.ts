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
    redirect: () => {
      // 默认显示第一个子路由对应的组件
      return {name: "registration"};
    },
    children: [
      {
        name: "registration",
        path: "registration",
        meta: { menuName: "预约挂号" },
        component: () => import("@/pages/hospital/components/registration/index.vue"),
      },
      {
        name: "detail",
        path: "detail",
        meta: { menuName: "医院详情" },
        component: () => import("@/pages/hospital/components/detail/index.vue"),
      },
      {
        name: "notice",
        path: "notice",
        meta: { menuName: "预约须知" },
        component: () => import("@/pages/hospital/components/notice/index.vue"),
      },
      {
        name: "serviceSuspend",
        path: "serviceSuspend",
        meta: { menuName: "停诊信息" },
        component: () => import("@/pages/hospital/components/serviceSuspend/index.vue"),
      },
    ],
  },
  REDIRECT: {
    path: "/",
    redirect: "/home",
  },
}