import { createWebHistory, createRouter } from "vue-router";
import Beranda from "../components/MenuBeranda.vue";
import Maps from "../components/MenuMaps.vue";
import Bantuan from "../components/MenuBantuan.vue";
import Login from "../components/MenuLogin.vue";
import Admin_Page from "../components/AdminPage.vue";
import TimeLineChart from "../components/TimeLineChart.vue";
// import { getAuth } from "firebase/auth";

const routes = [
  {
    path: "/Beranda",
    name: "Beranda",
    component: Beranda,
  },
  {
    path: "/Maps",
    name: "Maps",
    component: Maps,
  },
  {
    path: "/Bantuan",
    name: "Bantuan",
    component: Bantuan,
  },

  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/TimeLineChart",
    name: "TimeLineChart",
    component: TimeLineChart,
  },
  {
    path: "/Admin_Page",
    name: "Admin_Page",
    component: Admin_Page,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// const isAuthenticated = false;

router.beforeEach((to, from, next)=>{
  const isAuthenticated = JSON.parse(localStorage.getItem('authenticated'));
  setTimeout(() => {
    localStorage.removeItem('authenticated');
  }, 3600000);
  if(to.name == "Admin_Page" && !isAuthenticated) next({name: "Login"});
  else next();
})

export default router;
