import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import AboutView from "@/views/AboutView.vue"
import ProductView from "@/views/ProductView.vue"
import MentionsLegales from "@/views/MentionsLegales.vue"
import SecretView from "@/views/SecretView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/a-propos",
      component: AboutView,
    },
    {
      path: "/product/:id",
      component: ProductView,
    },
    {
      path: "/mentions-legales",
      component: MentionsLegales,
    },
    {
      path: "/page-secrete",
      component: SecretView,
    },
  ],
})

export default router
