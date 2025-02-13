<script setup></script>

<template>
  <section class="contacts">
    <h2 class="visually-hidden">Наши контакты - Gllacy</h2>
    <div class="contacts__info info">
      <p class="info__address">
        Адрес главного офиса<br />
        и офлайн-магазина:
      </p>
      <p class="info__address-strong">
        наб. реки Карповки,<br />
        5 лит П, Санкт-Петербург
      </p>
      <p class="info__phone-title">Для заказов по телефону:</p>
      <p class="info__phone">+7 (812) 812-12-12</p>
      <p class="info__time">(с 10 до 20 ежедневно)</p>
      <a class="contacts__button" href="#!">Форма обратной связи</a>
    </div>
  </section>
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

.contacts {
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  background-image: url("/images/contacts-bg.jpg");
  padding: 64px 763px 64px 64px;
  box-sizing: border-box;
  border-radius: 16px;
}

.contacts__info {
  background-color: $basic-extra-light;
  border-radius: 8px;
  padding: 40px 40px 42px 40px;
  width: 343px;
  box-sizing: border-box;
  box-shadow: 0 8px 16px rgba(45, 52, 64, 0.12);
}

.info__address,
.info__phone-title {
  color: $basic-dark;
  margin: 0;
  margin-bottom: 12px;
}

.info__address-strong,
.info__phone {
  color: $basic-extra-dark;
  margin: 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 24px;
}

.info__phone {
  margin-bottom: 0;
}

.info__time {
  color: $basic-dark;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  margin-bottom: 32px;
}

.contacts__button {
  text-decoration: none;
  color: $basic-extra-light;
  line-height: 20px;
  display: block;
  width: 250px;
  height: 44px;
  background-color: $special-extra-bright;
  border-radius: 26px;
  text-align: center;
  box-sizing: border-box;
  padding: 12px 22px;
  font-weight: 700;
  box-shadow: 0 0 0 4px rgba(255, 47, 100, 0.3),
    0 4px 12px rgba(45, 52, 64, 0.1);
}
</style>
