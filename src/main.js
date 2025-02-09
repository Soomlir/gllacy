import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import './style.css'
import App from './App.vue'
import IndexPage from '@/pages/IndexPage.vue';
import CatalogPage from '@/pages/CatalogPage.vue';


const router = createRouter({
  routes: [{
    path: '/',
    component: IndexPage
  },
  {
    path: '/catalog',
    component: CatalogPage
  }],
  history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
