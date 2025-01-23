<script setup>
const variantsData = [
    {
        id: 1,
        heading: 'Малинка',
        text: `Сливочное мороженое с малиновым джемом`,
        price: 310,
        imgSrc: '/images/product-1.png', 
        alt: 'Малинка',
    },
    {
        id: 2,
        heading: 'Фисташка',
        text: `Фисташковый пломбир с кусочками шоколада`,
        price: 340,
        imgSrc: '/images/product-2.png',
        alt: 'Фисташка',
    },
    {
        id: 3,
        heading: 'Черника',
        text: `Крем-брюле с черничным джемом`,
        price: 330,
        imgSrc: '/images/product-3.png',
        alt: 'Черника',
    },
    {
        id: 4,
        heading: 'Бабл-гам',
        text: `Ванильный пломбир со сладкой посыпкой`,
        price: 320,
        imgSrc: '/images/product-4.png',
        alt: 'Бабл-гам',
    }
]
</script>

<template>
    <section class="variants">
        <h2 class="variants__heading">Попробуйте самые популярные вкусы нашего мороженого</h2>
        <ul class="variants__list">
            <li class="variants__item" v-for="product in variantsData" :key="product.id">
                <img :src="product.imgSrc" width="168" height="168" :alt="product.alt">
                <h3 class="variants__title">{{ product.heading }}</h3>
                <p class="variants__text">{{ product.text }}</p>
                <p class="variants__price">{{ product.price }} ₽/кг</p>
                <a class="variants__order" href="#!">
                    <span class="visually-hidden">Заказать.</span>
                </a>
            </li>
        </ul>
    </section>
</template>

<style scoped></style>
