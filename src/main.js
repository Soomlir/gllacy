"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var vue_router_1 = require("vue-router");
require("./assets/sass/main.scss");
var IndexPage_vue_1 = require("@/pages/IndexPage.vue");
var CatalogPage_vue_1 = require("@/pages/CatalogPage.vue");
var routes = [
    { path: '/', component: IndexPage_vue_1.default },
    { path: '/catalog', component: CatalogPage_vue_1.default },
];
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(),
    routes: routes,
});
(0, vue_1.createApp)(App_vue_1.default).use(router).mount('#app');
