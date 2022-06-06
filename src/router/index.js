import { createRouter, createWebHistory } from 'vue-router'




const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/Projects",
    name: "Projects",
    component: () => import("../views/Projects/ProjectList.vue"),
  },
  {
    path: "/:id",
    name: "Projects_id",
    component: () => import("../views/Projects/_id.vue"),
  },

]

const router = createRouter({
//mode:history,
history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
});



export default router
