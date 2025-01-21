import { createRouter, createWebHistory } from "vue-router";


const routes = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../pages/home.vue')
        }]
})

export default routes;