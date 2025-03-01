<script setup>
import BreadcrumbsComponent from "../components/BreadcrumbsComponent.vue";
import CatalogFormComponent from "../components/CatalogFormComponent.vue";
import CatalogNavigationComponent from "../components/CatalogNavigationComponent.vue";
import { IMAGE_DIR } from '@/lib/constants';

const variantsData = [
  {
    id: 1,
    heading: "Малинка",
    text: `Сливочное мороженое с малиновым джемом`,
    price: 310,
    imgSrc: "product-1.png",
  },
  {
    id: 2,
    heading: "Фисташка",
    text: `Фисташковый пломбир с кусочками шоколада`,
    price: 340,
    imgSrc: "product-2.png",
  },
  {
    id: 3,
    heading: "Черника",
    text: `Крем-брюле <br> с черничным джемом`,
    price: 330,
    imgSrc: "product-3.png",
  },
  {
    id: 4,
    heading: "Бабл-гам",
    text: `Ванильный пломбир <br> со сладкой посыпкой`,
    price: 320,
    imgSrc: "product-4.png",
  },
  {
    id: 5,
    heading: "Ежевика",
    text: `Сливочное мороженое <br> с ежевичным джемом`,
    price: 330,
    imgSrc: "product-5.png",
  },
  {
    id: 6,
    heading: "Банан",
    text: `Сливочный пломбир <br> с банановым вкусом`,
    price: 340,
    imgSrc: "product-6.png",
  },
  {
    id: 7,
    heading: "Шоколадка",
    text: `Классический <br> шоколадный пломбир`,
    price: 270,
    imgSrc: "product-7.png",
  },
  {
    id: 8,
    heading: "Клубничка",
    text: `Сливочный пломбир <br> с клубничным вкусом`,
    price: 300,
    imgSrc: "product-8.png",
  },
  {
    id: 9,
    heading: "Лимон",
    text: `Освежающий <br> лимонный сорбет`,
    price: 310,
    imgSrc: "product-9.png",
  },
  {
    id: 10,
    heading: "Ментол",
    text: `Сливочный пломбир <br> с ментоловым сиропом`,
    price: 320,
    imgSrc: "product-10.png",
  },
  {
    id: 11,
    heading: "Орешек",
    text: `Фисташковый пломбир <br> с шоколадным сиропом`,
    price: 360,
    imgSrc: "product-11.png",
  },
  {
    id: 12,
    heading: "Крем-брюле",
    text: `Классическое <br> крем-брюле `,
    price: 280,
    imgSrc: "product-12.png",
  },
];
</script>

<template>
  <main class="main">
    <section class="main__catalog catalog">
      <BreadcrumbsComponent />
      <h1 class="catalog__heading">Сливочное мороженое</h1>
      <CatalogFormComponent />
    </section>
    <section class="catalog__products">
      <h2 class="visually-hidden">Gllacy - наши товары</h2>
      <ul class="catalog__list">
      <li
        class="catalog__item"
        v-for="product in variantsData"
        :key="product.id"
      >
        <img
          class="catalog__image"
          :src="`${IMAGE_DIR}/${product.imgSrc}`"
          width="168"
          height="168"
          :alt="product.alt"
        />
        <h3 class="catalog__title">{{ product.heading }}</h3>
        <p class="catalog__text" v-html="product.text"></p>
        <div class="catalog__buy">
          <p class="catalog__price">{{ product.price }} ₽/кг</p>
          <a class="catalog__order" href="#!">
            <span class="visually-hidden">Заказать.</span>
          </a>
        </div>
      </li>
    </ul>
    <div class="catalog__navigation">
      <button class="catalog__show-more" type="button">Показать еще</button>
      <CatalogNavigationComponent />
    </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.catalog {
  margin-right: auto;
  margin-left: auto;
  max-width: 1170px;
}

.catalog__heading {
  font-size: 32px;
  line-height: 46px;
  font-weight: 900;
  margin: 0;
  margin-bottom: 39px;
  color: #2d3440;
}

.catalog__products {
  margin-right: auto;
  margin-left: auto;
  max-width: 1170px;
}

.catalog__form {
  margin-bottom: 95px;
}

.catalog__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.catalog__item {
  position: relative;
  width: 270px;
  height: 281px;
  background-color: #fcfcfc;
  border-radius: 8px;
  padding-top: 133px;
  box-sizing: border-box;
  margin-bottom: 62px;
}

.catalog__image {
  position: absolute;
  top: -51px;
  left: 51px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(45, 52, 64, 0.1);
}

.catalog__title {
  color: #2d3440;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin: 0;
  margin-bottom: 8px;
}

.catalog__text {
  margin: 0;
  color: #565c66;
  font-size: 16px;
  line-height: 22px;
  width: 190px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

.catalog__buy {
  display: flex;
  margin-top: 16px;
  margin-left: 40px;
  margin-bottom: 20px;
}

.catalog__price {
  color: #2d3440;
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  margin-top: 4px;
  width: 140px;
}

.catalog__order {
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
    inset: 0;
    margin: auto;
    background-image: url("/images/cart-list.svg");
  }
}

.catalog__show-more {
  width: 179px;
  height: 44px;
  box-sizing: border-box;
  border: none;
  background-color: #FCFCFC;
  border-radius: 26px;
  color: #2D3440;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
}
</style>
