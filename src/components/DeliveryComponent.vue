<script setup></script>

<template>
  <section class="delivery">
    <div class="delivery__info">
      <h2 class="delivery__heading">Доставка любимого мороженого на дом</h2>
      <p class="delivery__text">
        Хочется полакомиться любимым десертом, <br />но нет времени съездить в
        магазин? Закажите доставку мороженого на дом, и курьер привезёт вам ваш
        заказ в течение часа!
      </p>
    </div>
    <div class="delivery__order order">
      <p class="order__text">
        Укажите адрес и дату доставки, и мы свяжемся<br />
        с вами, чтобы подтвердить заказ.
      </p>
      <form class="order__form" action="/" method="post">
        <label class="order__label"
          ><span class="order__icon order__icon--date">Дата</span>
          <input
            class="order__input"
            type="text"
            name="date"
            placeholder="01.04.2020"
          />
        </label>
        <label class="order__label"
          ><span>Телефон</span>
          <input
            class="order__input"
            type="phone"
            name="phone"
            placeholder="+7 800 999-00-00"
          />
        </label>
        <label class="order__label order__label--address" for="address"
          ><span class="order__icon order__icon--address">Адрес</span>
          <input
            class="order__input"
            type="text"
            name="address"
            placeholder="ул. Большая Конюшенная, 19/8"
          />
        </label>
        <button class="order__button" type="submit">Отправить</button>
      </form>
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

.delivery {
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  background-image: url("/images/delivery-bg.jpg");
  display: flex;
  gap: 27px;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 80px;
}

.delivery__info {
  width: 379px;
  padding: 167px 100px 163px 100px;
}

.delivery__heading {
  margin: 0;
  color: $basic-extra-dark;
  font-size: 32px;
  line-height: 46px;
  font-weight: 900;
  margin-bottom: 24px;
}

.delivery__text {
  margin: 0;
  color: $basic-dark;
}

.delivery__order {
  box-shadow: 0 15px 40px rgba(45, 52, 64, 0.12);
  width: 500px;
  height: 406px;
  background-color: $basic-extra-light;
  border-radius: 8px;
  padding: 40px 40px 42px 40px;
  box-sizing: border-box;
}

.order__text {
  color: $basic-dark;
  margin: 0;
  margin-bottom: 31px;
}

.order__form {
  display: grid;
  grid-template-columns: 117px 287px;
  grid-template-rows: 76px 76px 76px;
  gap: 20px 16px;
}

.order__label {
  color: $basic-extra-dark;
  font-weight: 700;
  position: relative;

  span {
    margin-bottom: 7px;
    display: block;
  }

  &--address {
    grid-column: span 2;
  }
}

.order__icon {
  display: block;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("/images/info.svg");
    width: 14px;
    height: 14px;
  }

  &--date::after {
    top: 3px;
    left: 44px;
  }

  &--address::after {
    top: 3px; 
    left: 56px;
  }
}

.order__input {
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border: 1px solid $basic-neutral;
  color: #999999;
  line-height: 20px;
  font: inherit;
  padding: 14px 16px;
  font-weight: 400;
}

.order__button {
  width: 152px;
  height: 44px;
  background-color: $special-extra-bright;
  border: none;
  cursor: pointer;
  border-radius: 26px;
  grid-column: span 2;
  margin-right: auto;
  margin-left: auto;
  margin-top: 13px;
  box-shadow: 0 0 0 4px rgba(255, 47, 100, 0.3),
    0 4px 12px rgba(45, 52, 64, 0.1);
  color: $basic-extra-light;
  font-size: 16px;
  line-height: 20px;
  font-weight: 900;
}
</style>
