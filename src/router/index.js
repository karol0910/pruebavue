import { createRouter, createWebHistory } from 'vue-router';
import PostsList from '@/components/PostsList.vue';
import UserDetails from '@/components/UserDetails.vue';

const routes = [
    { path: '/', component: PostsList },
    { path: '/UserDetails/:id', component: UserDetails, props: true },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  export default router;
