import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import './assets/sass/main.scss';
import IndexPage from '@/pages/IndexPage.vue'
import CatalogPage from '@/pages/CatalogPage.vue'

const routes = [
  { path: '/', component: IndexPage },
  { path: '/catalog', component: CatalogPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
