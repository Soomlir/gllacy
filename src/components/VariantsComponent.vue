<script setup>
const variantsData = [
  {
    id: 1,
    heading: "Малинка",
    text: `Сливочное мороженое с малиновым джемом`,
    price: 310,
    imgSrc: "/images/product-1.png",
    alt: "Малинка",
  },
  {
    id: 2,
    heading: "Фисташка",
    text: `Фисташковый пломбир с кусочками шоколада`,
    price: 340,
    imgSrc: "/images/product-2.png",
    alt: "Фисташка",
  },
  {
    id: 3,
    heading: "Черника",
    text: `Крем-брюле <br> с черничным джемом`,
    price: 330,
    imgSrc: "/images/product-3.png",
    alt: "Черника",
  },
  {
    id: 4,
    heading: "Бабл-гам",
    text: `Ванильный пломбир <br> со сладкой посыпкой`,
    price: 320,
    imgSrc: "/images/product-4.png",
    alt: "Бабл-гам",
  },
];
</script>

<template>
  <section class="variants">
    <h2 class="variants__heading">
      Попробуйте самые популярные вкусы нашего мороженого
    </h2>
    <ul class="variants__list">
      <li
        class="variants__item"
        v-for="product in variantsData"
        :key="product.id"
      >
        <img
          class="variants__image"
          :src="product.imgSrc"
          width="168"
          height="168"
          :alt="product.alt"
        />
        <h3 class="variants__title">{{ product.heading }}</h3>
        <p class="variants__text" v-html="product.text"></p>
        <div class="variants__buy">
          <p class="variants__price">{{ product.price }} ₽/кг</p>
          <a class="variants__order" href="#!">
            <span class="visually-hidden">Заказать.</span>
          </a>
        </div>
      </li>
    </ul>
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

.variants {
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 80px;
}

.variants__heading {
  color: #2d3440;
  font-weight: 900;
  font-size: 32px;
  line-height: 46px;
  width: 527px;
  margin: 0;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 107px;
  text-align: center;
}

.variants__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 30px;
}

.variants__item {
  position: relative;
  width: 270px;
  height: 281px;
  background-color: #fcfcfc;
  border-radius: 8px;
  padding-top: 133px;
  box-sizing: border-box;
}

.variants__image {
  position: absolute;
  top: -51px;
  left: 51px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
}

.variants__title {
  color: #2d3440;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin: 0;
  margin-bottom: 8px;
}

.variants__text {
  margin: 0;
  color: #565c66;
  font-size: 16px;
  line-height: 22px;
  width: 190px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

.variants__buy {
  display: flex;
  margin-top: 16px;
  margin-left: 40px;
  margin-bottom: 20px;
}

.variants__price {
  color: #2d3440;
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  margin-top: 4px;
  width: 140px;
}

.variants__order {
  display: flex;
  width: 32px;
  height: 32px;
  background-color: #ff2f64;
  border-radius: 50%;
  margin-left: 18px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    margin: auto;
    background-image: url("../images/cart-list.svg");
  }
}
</style>
