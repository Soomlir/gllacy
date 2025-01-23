<script setup>
const giftsData = [
    {
        id: 1,
        heading: 'Малинка даром!',
        text: `При покупке 2 кг любого фруктового мороженого добавим в ваш заказ банку малинового варенья бесплатно.`,
        src: '/images/gift-1.png',
        alt: 'Малинка даром!',
    },
    {
        id: 2,
        heading: 'Маршмеллоу даром!',
        text: `При покупке 2 кг пломбира добавим в ваш заказ упаковку нежных зефирок совершенно бесплатно.`,
        src: '/images/gift-2.png',
        alt: 'Маршмеллоу даром!',
    },
];
</script>

<template>
    <section class="gifts">
        <h2 class="gifts__heading">Заказывайте мороженое и получайте подарки!</h2>
        <article v-for="item in giftsData" :key="item.id">
            <h3>{{ item.heading }}</h3>
            <p>{{ item.text }}</p>
            <button>Хочу подарок</button>
            <img :src="item.src" :alt="item.alt">
        </article>
    </section>
</template>

<style></style>