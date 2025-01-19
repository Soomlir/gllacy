<script setup>
const proposalData = [
  {
    id: 1,
    heading: 'Малинка даром!',
    text: `При покупке 2 кг любого фруктового мороженого
     добавим в ваш заказ банку малинового варенья бесплатно.`,
  },
  {
    id: 2,
    heading: 'Маршмеллоу даром!',
    text: `При покупке 2 кг пломбира добавим в ваш заказ
     упаковку нежных зефирок совершенно бесплатно.`,
  }
]
</script>

<template>
  <section class="proposal">
    <h2 class="proposal__heading">Заказывайте мороженое и получайте подарки!</h2>
    <ul class="proposal__list">
      <li class="proposal__item" v-for="{id, heading, text} in proposalData" :key="id">
        <h3>{{ heading }}</h3>
        <p>{{ text }}</p>
        <a href="#!">Хочу подарок</a>
      </li>
    </ul>
  </section>
</template>