import { createWebHistory, createRouter } from 'vue-router';
import Beranda from '../components/MenuBeranda.vue';
import Maps from '../components/MenuMaps.vue'
import Bantuan from '../components/MenuBantuan.vue';
import Login from '../components/MenuLogin.vue';


const routes = [
    {
        path: '/Beranda',
        name: 'Beranda',
        component: Beranda,
    },
    {
        path: '/Maps',
        name: 'Maps',
        component: Maps
    },
    {
        path: '/Bantuan',
        name: 'Bantuan',
        component: Bantuan
    },
    {
        path: '/login',
        name: 'Log-In',
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;