import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { init as initializeMiddeware } from '@/providers/middleware';
import AppLayout from '../layouts/App.vue';
import Home from '../views/Home.vue';
import LibrarySongs from '../views/library/Songs.vue';
import Login from '../views/Login.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          middlewares: ['auth'],
        },
      },
      {
        path: '/library/songs',
        name: 'LibrarySongs',
        component: LibrarySongs,
        meta: {
          middlewares: ['auth'],
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

initializeMiddeware(router);

export default router;
