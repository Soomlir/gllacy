<script setup></script>

<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item" v-for="item in 5">
      <a class="pagination__item" href="#!">{{ item }}</a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  list-style: none;
  margin-left: auto;
  margin: 0;
  padding: 0;
}

.pagination__item {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: $basic-extra-light;
  text-align: center;
  text-decoration: none;
  color: $basic-extra-dark;
  font-size: 16px;
  line-height: 24px;
}
</style>
