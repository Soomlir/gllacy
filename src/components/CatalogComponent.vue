<script setup>
</script>

<template>
  <section class="catalog">
    <div class="catalog__breadcrumbs">
      <ul>
        <li><a href="#!">Главная</a></li>
        <li><a href="#!">Каталог</a></li>
        <li><a href="#!">Сливочное мороженое</a></li>
      </ul>
    </div>
    <h1 class="catalog__heading">Сливочное мороженое</h1>
    <form class="catalog__form" action="/" method="get">
      <label>Сортировка:
        <select>
          <option>по популярности</option>
        </select>
      </label>
      <label>
        Цена: 100 ₽ – 500 ₽
        <input type="range">
      </label>
      <fieldset class="fat">
        <legend>Жирность:</legend>
        <label>
          0%
          <input type="radio">
        </label>
        <label>
          до 10%
          <input type="radio">
        </label>
        <label>
          до 30%
          <input type="radio">
        </label>
        <label>
          выше 30%
          <input type="radio">
        </label>
      </fieldset>
      <fieldset>
        <legend>Наполнители:</legend>
        <label>
          <input type="checkbox">
          шоколадные
        </label>
        <label>
          <input type="checkbox">
          сахарные посыпки
        </label>
        <label>
          <input type="checkbox">
          фрукты
        </label>
        <label>
          <input type="checkbox">
          сиропы
        </label>
        <label>
          <input type="checkbox">
          джемы
        </label>
      </fieldset>
      <button type="submit">Применить</button>
    </form>
    <div class="catalog__products">

    </div>
    <div class="catalog__navigation">
      <button type="button">Показать еще</button>
      <ul class="catalog__pagination">
        <li><a href="#!">1</a></li>
        <li><a href="#!">2</a></li>
        <li><a href="#!">3</a></li>
        <li><a href="#!">4</a></li>
        <li><a href="#!">5</a></li>
        <li><a href="#!">Arrow</a></li>
      </ul>
    </div>
</section>
</template>