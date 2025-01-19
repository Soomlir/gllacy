<script setup>
const assortmentData = [
  {
    id: 1, 
    heading: 'Малинка',
    text: `Сливочное мороженое с малиновым джемом`,
    price: `310 ₽/кг`,
  },
  {
    id: 2,
    heading: 'Фисташка',
    text: `Фисташковый пломбир с кусочками шоколада`,
    price: `340 ₽/кг`,
  },
  {
    id: 3,
    heading: 'Черника',
    text: `Крем-брюле с черничным джемом`,
    price: `330 ₽/кг`,
  },
  {
    id: 4,
    heading: 'Бабл-гам',
    text: `Ванильный пломбир со сладкой посыпкой`,
    price: `320 ₽/кг`,
  }
];
</script>

<template>
  <section class="assortment">
    <h2 class="assortment__heading">Попробуйте самые популярные вкусы нашего мороженого</h2>
    <ul class="assortment__list">
      <li class="assortment__item" v-for="{id, heading, text, price} in assortmentData" :key="id">
        <h3>{{ heading }}</h3>
        <p>{{ text }}</p>
        <p>{{ price }}</p>
        <a href="#!">
          <span class="visually-hidden">Добавить в корзину.</span>
        </a>
      </li>
    </ul>
  </section>
</template>