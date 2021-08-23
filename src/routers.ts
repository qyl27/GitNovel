import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import Main from "./components/Main.vue";

const routes: RouteRecordRaw[] = [
    { path: '', component: Main }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;
