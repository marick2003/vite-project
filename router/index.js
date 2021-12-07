import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Test2 from ""
const routes = [
  {
    path: "/",
    name: "Home",
    component: null,
  },
  {
    path: "/test",
    name: "Test",
    component: HelloWorld,
  },
  {
    path:"/test2",
    name:"Test2",
    component:Test2
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;