<script setup>
const subMenu = [
  { id: 1, text: "Новинки" },
  { id: 2, text: "Сливочное" },
  { id: 3, text: "Щербеты" },
  { id: 4, text: "Фруктовый лед" },
  { id: 5, text: "Мелорин" },
];
</script>

<template>
  <ul class="menu__submenu">
    <li class="menu__submenu" v-for="item in subMenu">
      <a class="submenu__link" href="">{{ item.text }}</a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.menu__submenu {
  display: none;
  width: 140px;
  flex-wrap: wrap;
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: $basic-extra-light;
  z-index: 1;
  border-radius: 4px;
  padding: 8px 16px;
  box-sizing: border-box;
}

.submenu__item {
  padding: 8px 0;
  width: 106px;

  &:first-child {
    border-bottom: 1px solid #000000;
  }

  &:first-child a {
    font-weight: 700;
  }
}

.submenu__link {
  text-decoration: none;
  color: $basic-extra-dark;
  font-size: 14px;
  line-height: 20px;
  display: block;
}

.arrow-up::after {
  margin-top: 4px;
  transform: rotate(180deg);
}
</style>
