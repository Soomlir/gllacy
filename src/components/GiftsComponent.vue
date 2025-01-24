<script setup>
const giftsData = [
  {
    id: 1,
    heading: "Малинка даром!",
    text: `При покупке 2 кг любого фруктового мороженого добавим в ваш заказ банку малинового варенья бесплатно.`,
    src: "/images/gift-1.png",
    alt: "Малинка даром!",
  },
  {
    id: 2,
    heading: "Маршмеллоу даром!",
    text: `При покупке 2 кг пломбира добавим в ваш заказ упаковку нежных зефирок совершенно бесплатно.`,
    src: "/images/gift-2.png",
    alt: "Маршмеллоу даром!",
  },
];
</script>

<template>
  <section class="gifts">
    <h2 class="gifts__heading">Заказывайте мороженое и получайте подарки!</h2>
    <div class="gifts__wrap">
      <article class="gifts__article" v-for="item in giftsData" :key="item.id">
        <h3 class="gifts__title">{{ item.heading }}</h3>
        <p class="gifts__text">{{ item.text }}</p>
        <button class="gifts__button">Хочу подарок</button>
        <img class="gifts__images" :src="item.src" :alt="item.alt" />
      </article>
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

.gifts {
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
}

.gifts__heading {
  margin: 0;
  margin-right: auto;
  margin-left: auto;
  width: 434px;
  font-size: 32px;
  line-height: 46px;
  font-weight: 900;
  color: #2d3440;
  text-align: center;
}

.gifts__wrap {
    display: flex;
}
</style>
