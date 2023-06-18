import { RouteRecordRaw } from "vue-router";

import HomePage from "../pages/Home.vue";
import InternalErrorPage from "../pages/500.vue";
import NotFoundErrorPage from "../pages/404.vue";

export const ROUTE_NAMES: Record<string, RouteRecordRaw> = {
  HOME: {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  PAGE_NOT_FOUND: {
    path: "/404",
    name: "NotFound",
    component: NotFoundErrorPage,
  },
  INTERNAL_ERROR: {
    path: "/500",
    name: "InternalError",
    component: InternalErrorPage,
  },
  UNKNOWN_URL: {
    path: "/:pathMatch(.*)*",
    name: "UnknownPage",
    component: NotFoundErrorPage,
  },
};

export default [...Object.values(ROUTE_NAMES)];
