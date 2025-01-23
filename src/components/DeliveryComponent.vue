<script setup></script>

<template>
    <section class="delivery">
        <div class="delivery__info">
            <h2 class="delivery__heading">Доставка любимого мороженого на дом</h2>
            <p class="delivery__text">Хочется полакомиться любимым десертом, но нет времени съездить в магазин?
                 Закажите доставку мороженого на дом, и курьер привезёт вам ваш заказ в течение часа!</p>
        </div>
        <div class="delivery__order">
            <p>Укажите адрес и дату доставки, и мы свяжемся с вами, чтобы подтвердить заказ.</p>
            <form action="/" method="post">
                <label for="date">Дата</label>
                <input type="date" name="date" placeholder="01.04.2020">
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
</style>
