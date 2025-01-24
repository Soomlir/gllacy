<script setup></script>

<template>
  <header class="header">
    <a href="#!">
      <img
        src="/images/gllacy-logo.svg"
        width="137"
        height="56"
        alt="Логотип Gllacy."
      />
    </a>
    <ul class="header__list">
      <li class="header__item">
        <a href="#!" class="header__link header__link--arrow">Каталог</a>
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

  &:first-child::after {
    content: "";
    position: absolute;
    right: 16px;
    bottom: 3px;
    width: 16px;
    height: 16px;
    background-image: url("../images/arrow-down.svg");
  }
}

.header__link {
  padding: 16px;
  text-decoration: none;
  color: #2d3440;
  font-size: 16px;
  line-height: 20px;

  &--arrow {
    padding-right: 40px;
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
    background-image: url("../images/search.svg");
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
    background-image: url("../images/login.svg");
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
    background-image: url("../images/cart.svg");
  }
}
</style>
