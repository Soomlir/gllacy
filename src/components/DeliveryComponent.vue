<script setup></script>

<template>
    <section class="delivery">
        <div class="delivery__info">
            <h2 class="delivery__heading">Доставка любимого мороженого на дом</h2>
            <p class="delivery__text">Хочется полакомиться любимым десертом, <br>но нет времени съездить в магазин?
                 Закажите доставку мороженого на дом, и курьер привезёт вам ваш заказ в течение часа!</p>
        </div>
        <div class="delivery__order order">
            <p class="order__text">Укажите адрес и дату доставки, и мы свяжемся<br> с вами, чтобы подтвердить заказ.</p>
            <form action="/" method="post">
                <label for="date">Дата</label>
                <input type="text" name="date" placeholder="01.04.2020">
                <label for="phone">Телефон</label>
                <input type="phone" name="phone" placeholder="+7 800 999-00-00">
                <label for="address">Адрес</label>
                <input type="text" name="address" placeholder="ул. Большая Конюшенная, 19/8">
                <button type="submit">Отправить</button>
            </form>
        </div>
    </section>
</template>

<style scoped>
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
  background-image: url("../images/delivery-bg.jpg");
  display: flex;
  gap: 27px;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 80px;
}

.delivery__info {
    width: 379px;
    padding: 168px 100px 162px 100px;
}

.delivery__heading {
    margin: 0;
    color: #2D3440;
    font-size: 32px;
    line-height: 46px;
    font-weight: 900;
    margin-bottom: 24px;
}

.delivery__text {
    margin: 0;
    color: #565C66;
    font-size: 16px;
    line-height: 22px;
}

.delivery__order {
    box-shadow: 0 15px 40px rgba(45, 52, 64, 0.12);
    width: 500px;
    height: 406px;
    background-color: #FCFCFC;
    border-radius: 8px;
    padding: 40px 40px 42px 40px;
    box-sizing: border-box;
}

.order__text {
    color: #565C66;
    font-size: 16px;
    line-height: 22px;
    margin: 0;
}
</style>
