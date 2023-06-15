import { createRouter, createWebHashHistory } from "vue-router";
import { useAuthStore } from "../store/authStore";

const loginRouter = createRouter({
  history: createWebHashHistory(),
  routes : [
{
  path : '/product',
  name : 'product',
  component : () => import('../views/Product.vue'),
  meta: {
    //requiresAuth: true,
    template: 'AdminTemplate'
  }
},
{
  path : '/',
  name : 'product',
  component : () => import('../views/Product.vue'),
  meta: {
    //requiresAuth: true,
    template: 'AdminTemplate'
  }
},
  ], 
})

export default loginRouter