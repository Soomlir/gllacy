<script setup>
import BreadcrumbsComponent from "../components/BreadcrumbsComponent.vue";
import CatalogFormComponent from "../components/CatalogFormComponent.vue";
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
      <ul class="catalog__product-list product-list">
        <li class="product-list__item"></li>
      </ul>
      <div class="catalog__navigation">
        <button type="button">Показать еще</button>
        <ul class="catalog__pagination pagination">
          <li class="pagination__item">1</li>
        </ul>
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

</style>
