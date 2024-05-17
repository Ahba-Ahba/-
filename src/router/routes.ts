import { vue } from '@vitejs/plugin-vue';
import type { RouteRecordRaw } from "vue-router";
import A from "@/views/a.vue";
import B from "@/views/b.vue";
import Search from "@/views/search.vue";
import Rankinglist from "@/views/Rankinglist.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/Rankinglist" },
  { path: "/a", component: A },
  { path: "/b", component: B },
  { path: "/search", component: Search },
  { path: "/Rankinglist", component: Rankinglist },
];

export default routes;
