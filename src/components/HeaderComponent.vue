<script setup>
import { ref } from "vue";

const flagSubmenu = ref(false);
const toggleShowSubMenu = () => {
  flagSubmenu.value = !flagSubmenu.value;
};
console.log(flagSubmenu.value);
</script>

<template>
  <header class="header">
    <a>
      <img
        src="/images/gllacy-logo.svg"
        width="137"
        height="56"
        alt="Логотип Gllacy."
      />
    </a>
    <ul class="header__list">
      <li class="header__item">
        <a
          href="#!"
          class="header__link header__link--arrow"
          :class="{ 'arrow-up': flagSubmenu }"
          @click="toggleShowSubMenu"
          >Каталог</a
        >
        <ul
          class="header__submenu submenu"
          :class="{ 'submenu-show': flagSubmenu }"
        >
          <li class="submenu__item">
            <a class="submenu__link" href="#!">Новинки</a>
          </li>
          <li class="submenu__item">
            <a class="submenu__link" href="#!">Сливочное</a>
          </li>
          <li class="submenu__item">
            <a class="submenu__link" href="#!">Щербеты</a>
          </li>
          <li class="submenu__item">
            <a class="submenu__link" href="#!">Фруктовый лед</a>
          </li>
          <li class="submenu__item">
            <a class="submenu__link" href="#!">Мелорин</a>
          </li>
        </ul>
      </li>
      <li class="header__item">
        <a href="#!" class="header__link">Доставка и оплата</a>
      </li>
      <li class="header__item">
        <a href="#!" class="header__link">О компании</a>
      </li>
    </ul>
    <nav class="header__nav">
      <a class="header__phone" href="tel:+78005558628">+7 800 555-86-28</a>
      <a class="header__search" href="#!">
        <span class="visually-hidden">Поиск по сайту.</span>
      </a>
      <a class="header__login" href="#!">Вход</a>
      <a class="header__cart" href="#!">2 товара</a>
    </nav>
  </header>
</template>

<style scoped lang="scss">
img {
  max-width: 100%;
  height: auto;
  display: block;
}

.visually-hidden {
  position: fixed;
  transform: scale(0);
}

.header {
  display: flex;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px 0;
  align-items: center;
}

.header__list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 15px;
  margin-right: auto;
  height: 36px;
  align-items: center;
}

.header__item {
  position: relative;
  display: block;
}

.header__link {
  padding: 6px 16px;
  text-decoration: none;
  color: #2d3440;
  font-size: 16px;
  line-height: 20px;

  &:hover {
    background-color: rgba(252, 252, 252, 0.5);
    border-radius: 30px;
  }

  &:active {
    background-color: #fcfcfc;
  }

  &:focus {
    background-color: rgba(252, 252, 252, 0.5);
    border: 2px solid #2d3440;
    outline: none;
    border-radius: 30px;
  }

  &--arrow {
    display: flex;
  }

  &--arrow::after {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    margin: 2px 0 0 7px;
    background-image: url("/images/arrow-down.svg");
  }
}

.header__submenu {
  display: none;
  width: 140px;
  flex-wrap: wrap;
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #fcfcfc;
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
  color: #2d3440;
  font-size: 14px;
  line-height: 20px;
  display: block;
}

.submenu-show {
  display: flex;
}

.arrow-up::after {
  margin-top: 4px;
  transform: rotate(180deg);
}

.header__nav {
  display: flex;
  align-items: center;
  padding: 12px 0;
}

.header__phone {
  text-decoration: none;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: #2d3440;
}

.header__search {
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #fcfcfc4d;
  margin-left: 16px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 7px;
    left: 8px;
    width: 16px;
    height: 16px;
    background-image: url("/images/search.svg");
  }
}

.header__login,
.header__cart {
  display: block;
  height: 32px;
  padding: 6px 16px 6px 38px;
  background-color: #fcfcfc4d;
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 20px;
  border-radius: 15px;
  color: #2d3440;
  margin-left: 16px;
  position: relative;
}

.header__login {
  width: 88px;

  &::before {
    content: "";
    position: absolute;
    top: 7px;
    left: 16px;
    width: 16px;
    height: 16px;
    background-image: url("/images/login.svg");
  }
}

.header__cart {
  width: 115px;

  &::before {
    content: "";
    position: absolute;
    top: 7px;
    left: 16px;
    width: 16px;
    height: 16px;
    background-image: url("/images/cart.svg");
  }
}
</style>
