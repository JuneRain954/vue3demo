import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router'
import { ROUTES } from './const';


const router = createRouter({
  history: createWebHistory(),
  routes: parseRoutes(ROUTES),
  scrollBehavior: () => ({ left: 0, top: 0 }), // 路由切换后的页面滚动行为
});

/**
 * 路由信息对象转数组
 * @param routes 路由信息对象
 * @returns 路由信息数组
 */
function parseRoutes<T extends object>(routes: T){
  let routeList: RouteRecordRaw[] = [];
  for(const key in routes){
    routeList.push(routes[key] as RouteRecordRaw);
  }
  return routeList;
}

export default router;