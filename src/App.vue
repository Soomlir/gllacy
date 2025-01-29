<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <HeaderComponent />
  <main class="main">
    <router-view />
  </main>
  <FooterComponent />
</template>
