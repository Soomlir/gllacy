<script setup>
import BreadcrumbsComponent from "../components/BreadcrumbsComponent.vue";
import CatalogFormComponent from "../components/CatalogFormComponent.vue";
import CatalogNavigationComponent from "../components/CatalogNavigationComponent.vue";
import { IMAGE_DIR } from "@/lib/constants";
import { ref, onMounted } from "vue";

const catalogData = ref({});

onMounted(async () => {
  const response = await fetch("api/catalog.json");
  const data = await response.json();
  catalogData.value = data;
});

console.log(catalogData);
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
          v-for="product in catalogData.variantsData"
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
  margin-bottom: 81px;
}

.catalog__form {
  margin-bottom: 95px;
}

.catalog__list {
  margin: 0;
  margin-bottom: 55px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 92px 30px;
}

.catalog__item {
  position: relative;
  width: 270px;
  height: 281px;
  background-color: #fcfcfc;
  border-radius: 8px;
  padding-top: 133px;
  box-sizing: border-box;
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

.catalog__navigation {
  display: flex;
}

.catalog__show-more {
  width: 179px;
  height: 44px;
  box-sizing: border-box;
  border: none;
  background-color: #fcfcfc;
  border-radius: 26px;
  color: #2d3440;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  margin-left: 489px;
  box-shadow: 0 0 0 4px hsla(0, 0%, 99%, 0.4), 0 4px 12px rgba(45, 52, 64, 0.1);
  cursor: pointer;
}
</style>
