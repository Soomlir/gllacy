<script setup></script>

<template>
  <form class="catalog__form" action="/">
    <fieldset class="catalog__fieldset">
      <legend class="catalog__legend">Сортировка:</legend>
      <select class="catalog__select">
        <option value="popular">по популярности</option>
      </select>
    </fieldset>
    <fieldset class="catalog__fieldset">
      <legend class="catalog__legend">Цена: 100 ₽ – 500 ₽</legend>
      <div></div>
    </fieldset>
    <fieldset class="catalog__fieldset catalog__fieldset--fat">
      <legend class="catalog__legend">Жирность:</legend>
      <div class="catalog__radios">
        <p>
          <label
            ><input
              class="catalog__radio"
              type="radio"
              name="procent"
            />0%</label
          >
        </p>
        <p>
          <label
            ><input
              class="catalog__radio"
              type="radio"
              name="procent"
              checked
            />до 10%</label
          >
        </p>
        <p>
          <label
            ><input class="catalog__radio" type="radio" name="procent" />до
            30%</label
          >
        </p>
        <p>
          <label
            ><input class="catalog__radio" type="radio" name="procent" />выше
            30%</label
          >
        </p>
      </div>
    </fieldset>
    <fieldset class="catalog__fieldset catalog__fieldset--filters">
      <legend class="catalog__legend">Наполнители:</legend>
      <div class="catalog__checkboxs">
        <p>
          <label
            ><input
              class="catalog__checkbox"
              type="checkbox"
            />шоколадные</label
          >
        </p>
        <p>
          <label
            ><input class="catalog__checkbox" type="checkbox" />сахарные
            посыпки</label
          >
        </p>
        <p>
          <label
            ><input class="catalog__checkbox" type="checkbox" />фрукты</label
          >
        </p>
        <p>
          <label
            ><input class="catalog__checkbox" type="checkbox" />сиропы</label
          >
        </p>
        <p>
          <label
            ><input class="catalog__checkbox" type="checkbox" />джемы</label
          >
        </p>
      </div>
    </fieldset>
    <button type="submit">Применить</button>
  </form>
</template>

<style scoped lang="scss">
.catalog__form {
  display: flex;
  flex-wrap: wrap;
  width: 823px;
  box-sizing: border-box;
}

.catalog__fieldset {
  border: none;
  width: 196px;
  margin: 0;
  padding: 0;
  margin-right: 25px;

  &--fat {
    width: 380px;
    margin-right: 0;

    p {
      margin: 0;
    }
  }

  &--filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 604px;
    box-sizing: border-box;
    margin-top: 16px;

    p {
      margin: 0;
    }
  }
}

.catalog__legend {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #2d3440;
  margin-left: 14px;
  margin-bottom: 8px;
}

.catalog__select {
  width: 196px;
  height: 36px;
  box-sizing: border-box;
  border: none;
  border-radius: 20px;

  option {
    background-color: #fcfcfc;
  }
}

.catalog__radios {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 22px;
  background-color: rgba(252, 252, 252, 0.3);
  border-radius: 18px;

  label {
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
  }
}

.catalog__radio {
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #2d3440;
  border-radius: 50%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-right: 8px;
  display: flex;

  &:checked::before {
    content: "";
    inset: 0;
    margin: auto;
    background-color: #2d3440;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
}

.catalog__checkbox {
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #2d3440;
  box-sizing: border-box;
}
</style>
