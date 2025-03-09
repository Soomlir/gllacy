<script setup>
const items = [
  { id: 1, children: true, opened: false, title: "Каталог", url: "" },
  {
    id: 2,
    children: false,
    opened: false,
    title: "Доставка и оплата",
    url: "",
  },
  { id: 3, children: false, opened: false, title: "О компании", url: "" },
];
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
    <ul class="header__menu menu">
      <li class="menu__item" v-for="(item, i) in items" :key="i">
        <template v-if="item.children">
          <button
            class="menu__link"
            :class="{
              'menu__link--arrow': true,
              'menu__link--opened': item.opened,
            }"
            @click="item.opened = !item.opened"
          >
            {{ item.title }}
          </button>
          <submenu-component v-show="item.opened" :items="item.children" />
        </template>
        <router-link v-else class="menu__link" :to="item.url">
          {{ item.title }}
        </router-link>
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

.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 15px;
  margin-right: auto;
  height: 36px;
  align-items: center;
}

.menu__item {
  position: relative;
  display: block;
}

.menu__link {
  padding: 6px 14px;
  text-decoration: none;
  color: $basic-extra-dark;
  font-size: 16px;
  line-height: 20px;
  border: 2px solid transparent;
  background: transparent;

  &:hover {
    background-color: rgba(252, 252, 252, 0.5);
    border-radius: 30px;
  }

  &:active {
    background-color: $basic-extra-light;
  }

  &:focus {
    background-color: rgba(252, 252, 252, 0.5);
    border-color: $basic-extra-dark;
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
  color: $basic-extra-dark;
}

.header__search {
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: $basic-extra-light;
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
  background-color: $basic-extra-light;
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 20px;
  border-radius: 15px;
  color: $basic-extra-dark;
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
