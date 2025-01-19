<script setup></script>

<template>
  <section class="order">
    <h2 class="visually-hidden">Наша доставка - Gllacy</h2>
    <div class="order__content">
      <p class="order__title">Доставка любимого мороженого на дом</p>
      <p class="order__text">
        Хочется полакомиться любимым десертом, но нет времени съездить в
        магазин? Закажите доставку мороженого на дом, и курьер привезёт вам ваш
        заказ в течение часа!
      </p>
    </div>
    <div class="order__new form-block">
      <p class="form-block__text">
        Укажите адрес и дату доставки, и мы свяжемся с вами, чтобы подтвердить
        заказ.
      </p>
      <form class="form-block__form" action="/" method="post">
        <label>
          Дата
          <input type="text" placeholder="01.04.2020">
        </label>
        <label>
          Телефон
          <input type="phone" placeholder="+7 800 999-00-00">
        </label>
        <label>
          Адрес
          <input type="text" placeholder="ул. Большая Конюшенная, 19/8">
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </section>
</template>
