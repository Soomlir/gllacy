<script setup></script>

<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__item">
        <a class="breadcrumbs__link" href="#!">Главная</a>
      </li>
      <li class="breadcrumbs__item">
        <a class="breadcrumbs__link" href="#!">Каталог</a>
      </li>
      <li class="breadcrumbs__item">
        <a class="breadcrumbs__link breadcrumbs__link--current" href="#!">Сливочное мороженое</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.breadcrumbs {
  margin-top: 31px;
  margin-bottom: 17px;
}

.breadcrumbs__list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.breadcrumbs__link {
  margin-right: 28px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #2D3440;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 6px;
    right: -18px;
    width: 7px;
    height: 6px;
    background-image: url("/images/union.svg");
  }

  &--current {
    padding-bottom: 1px;
    border-bottom: 1px solid #2D3440;

    &::after {
      background: none;
    }
  }
}
</style>