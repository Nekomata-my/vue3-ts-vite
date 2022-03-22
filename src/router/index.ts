import { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routeModuleList: RouteRecordRaw[] = [];

const RootRoute: RouteRecordRaw = {
    path: '/',
    name: 'Root',
    redirect: '/login',
    meta: {
        title: 'Root',
    },
};

const LoginRoute: RouteRecordRaw = {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
        title: '登录',
    },
};

export const routes: Array<any> = [...routeModuleList];

const router = createRouter({
    history: createWebHashHistory(),
    routes: [LoginRoute, RootRoute, ...routeModuleList],
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
    app.use(router);
    // 创建路由守卫
}

export default router;
