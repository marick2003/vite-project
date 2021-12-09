import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Test2 from "@/components/Test2.vue"
import Test from "@/components/Test.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: null,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
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