
import Home from '@/page/Home/index';
import Login from '@/page/Login/Login'
import Register from '@/page/Register/Register'
import Search from '@/page/Search/Search'

import { createRouter, createWebHashHistory } from 'vue-router';

const router = new createRouter({
    history: createWebHashHistory(),//哈希模式
    routes: [{
        path: '/home',
        // component: () => import('@/page/Home'),
        component: Home,
        meta: { isLogin: true },
    },
    {
        path: '/login',
        // component: () => import('@/page/Login'),
        component: Login,
        meta: { isLogin: false },
    },
    {
        path: '/register',
        // component: () => import('@/page/Register'),
        component: Register,
        meta: { isLogin: false },
    },
    {
        name: 'Search',
        path: '/search',
        // path: '/:$route.params.id',
        component: () => import('@/page/Search/Search'),
        // component: Search,
        meta: { isLogin: true },
    },
    {
        path: '/',
        redirect: '/Home',
    },
    ]
})
export default router;