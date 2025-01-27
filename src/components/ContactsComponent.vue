<script setup></script>

<template>
    <section class="contacts">
        <h2 class="visually-hidden">Наши контакты - Gllacy</h2>
        <div class="contacts__info info">
            <p class="info__address">Адрес главного офиса<br> и офлайн-магазина:</p>
            <p class="info__address-strong">наб. реки Карповки,<br> 5 лит П, Санкт-Петербург</p>
            <p class="info__phone-title">Для заказов по телефону:</p>
            <p class="info__phone">+7 (812) 812-12-12</p>
            <p class="info__time">(с 10 до 20 ежедневно)</p>
            <a class="contacts__button" href="#!">Форма обратной связи</a>
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

.contacts {
    max-width: 1170px;
    margin-right: auto;
    margin-left: auto;
    background-image: url("../images/contacts-bg.jpg");
    padding: 64px 763px 62px 64px;
    box-sizing: border-box;
    border-radius: 16px;
}

.contacts__info {
    background-color: #FCFCFC;
    border-radius: 8px;
    padding: 40px;
    width: 343px;
    box-sizing: border-box;
    box-shadow: 0 8px 16px rgba(45, 52, 64, 0.12);
}

.info__address,
.info__phone-title {
    color: #565C66;
    font-size: 16px;
    line-height: 22px;
    margin: 0;
    margin-bottom: 12px;
}

.info__address-strong,
.info__phone {
    color: #2D3440;
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
    color: #565C66;
    font-size: 14px;
    line-height: 20px;
    margin: 0;
    margin-bottom: 30px;
}

.contacts__button {
    text-decoration: none;
    color: #FCFCFC;
    font-size: 16px;
    line-height: 20px;
    display: block;
    width: 245px;
    height: 50px;
    background-color: #FF2F64;
    border-radius: 26px;
    text-align: center;
    box-sizing: border-box;
    padding: 12px 32px;
}
</style>
