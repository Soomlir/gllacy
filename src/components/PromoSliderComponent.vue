<script setup>
const sliderData = [
    {
        id: 1,
        heading: `Нежный пломбир с клубничным джемом`,
        text: `Натуральное мороженое из свежих сливок
                    и молока с вкуснейшим клубничным джемом – это идеальный десерт для всей семьи. `,
        img: {
            src: '/images/promo-slide-1.png',
            width: '328px',
            height: '507px',
            alt: 'Нежный пломбир с клубничным джемом.',
        }
    },
    {
        id: 2,
        heading: `Сливочное мороженое со вкусом банана`,
        text: `Сливочное мороженое с ярким банановым вкусом подарит вам свежесть и наслаждение даже в самый жаркий летний день.`,
        img: {
            src: '/images/promo-slide-2.png',
            width: '312px',
            height: '507px',
            alt: 'Сливочное мороженое со вкусом банана.',
        }
    },
    { 
        id: 3,
        heading: `Карамельный пломбир с маршмеллоу`,
        text: `Необычный сладкий десерт с карамельным топпингом и кусочками зефира завоюет сердца сладкоежек всех возрастов. `,
        img: {
            src: '/images/promo-slide-3.png',
            width: '350px',
            height: '507px ',
            alt: 'Карамельный пломбир с маршмеллоу. ',
        }
    },
];

const socialData = [
    {id: 1, src: '', text: 'Telegram'},
    {id: 2, src: '', text: 'Vk'},
    {id: 3, src: '', text: 'YouTube'},
];
</script>

<template>
    <section class="promo">
        <h2 class="visually-hidden">Промо слайдер - Gllacy</h2>
        <ul class="promo__slider">
            <li class="promo__item" v-for="{id, heading, text, img} in sliderData" :key="id">
                <h3 class="promo__heading">{{ heading }}</h3>
                <p class="promo__text">{{ text }}</p>
                <a class="promo__button" href="#!">Заказать</a>
                <img :src="img.src" :width="img.width" :height="img.height" :alt="img.alt">
                <button class="promo__prev">
                    <span class="visually-hidden">Предыдущий слайд.</span>
                </button>
                <button class="promo__next"> 
                    <span class="visually-hidden">Следующий слайд.</span>
                </button>
            </li>
        </ul>
        <div class="promo__controls">
            <input type="radio">
            <input type="radio">
            <input type="radio">
        </div>
        <div class="promo__social">
            <ul>
                <li v-for="element in socialData" :key="element.id">
                    <a :href="element.src">
                        <span class="visually-hidden">{{ element.text }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped></style>
