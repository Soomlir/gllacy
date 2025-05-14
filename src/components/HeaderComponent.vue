<script setup>
import LogoComponent from "./LogoComponent.vue";
import MainNavComponent from "./MainNavComponent.vue";
import UserPanelComponent from "./UserPanelComponent.vue";
</script>

<template>
  <header class="header">
    <LogoComponent class="header__logo" />
    <MainNavComponent class="header__main-nav" />
    <a class="header__phone" href="tel:78005558628">+7 800 555-86-28</a>
    <input class="header__search" type="search">
    <UserPanelComponent class="header__user-panel" />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  max-width: 1170px;
  margin: 0 auto;
}
</style>