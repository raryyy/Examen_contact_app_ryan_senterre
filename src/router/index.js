import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import AddContact from '@/views/AddContact.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/add-contact/:id?',
    name: 'AddContact',
    component: AddContact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
