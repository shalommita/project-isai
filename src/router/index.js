import { createWebHistory, createRouter } from 'vue-router';
import Beranda from '../components/MenuBeranda.vue';
import Maps from '../components/MenuMaps.vue'
import Bantuan from '../components/MenuBantuan.vue';
import Home from '../components/LeftSide.vue';
import Dashboard from '../components/MenuDashboard.vue';
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
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;