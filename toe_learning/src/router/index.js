import { createRouter, createWebHistory } from 'vue-router'
const CalculatorPage = () => import('../Components/Calculator.vue')
const HomePage = () => import('@/pages/HomePage.vue')
const FormPage = () => import('@/pages/FormPage.vue')
const AboutPage = () => import('@/pages/AboutPage.vue')
const ContactPage = () => import('@/pages/ContactPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/calculator',  name: 'calculator',    component: CalculatorPage },
    { path: '/',        name: 'home',    component: HomePage },
    { path: '/form',    name: 'form',    component: FormPage },
    { path: '/about',   name: 'about',   component: AboutPage },
    { path: '/contact', name: 'contact', component: ContactPage },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
