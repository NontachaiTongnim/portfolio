import { createRouter, createWebHistory } from 'vue-router';



import Cv from '../views/Cv.vue';



const routes = [
    
   
    {
        path: '/Cv',
        name: 'Cv',
        component: Cv
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

