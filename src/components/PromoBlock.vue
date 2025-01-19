<script setup>
const sliderData = [
  {
    id: 1,
    heading: "Нежный пломбир с клубничным джемом",
    text: `Натуральное мороженое из свежих сливок и молока
     с вкуснейшим клубничным джемом – это идеальный десерт для всей семьи.`,
  },
  {
    id: 2,
    heading: "Сливочное мороженое со вкусом банана",
    text: `Сливочное мороженое с ярким банановым вкусом подарит 
    вам свежесть и наслаждение даже в самый жаркий летний день.`,
  },
  {
    id: 3,
    heading: "Карамельный пломбир с маршмеллоу",
    text: `Необычный сладкий десерт с карамельным топпингом
     и кусочками зефира завоюет сердца сладкоежек всех возрастов.`,
  },
];
</script>

<template>
  <section class="promo">
    <h2>Gllacy промо.</h2>
    <ul class="promo__slider">
      <li
        class="slider__item"
        v-for="{ id, heading, text } in sliderData"
        :key="id"
      >
        <h3 class="promo__heading">{{ heading }}</h3>
        <p class="promo__text">{{ text }}</p>
        <a class="promo__button" href="#!">Заказать</a>
      </li>
    </ul>
    <div class="promo__controls">
      <input type="radio" />
      <input type="radio" />
      <input type="radio" />
    </div>
    <div class="promo__social">
      <a href="#!">
        <span class="visually-hidden">Telegram</span>
      </a>
      <a href="#!">
        <span class="visually-hidden">Vk</span>
      </a>
      <a href="#!">
        <span class="visually-hidden">YouTube</span>
      </a>
    </div>
  </section>
</template>
