<script setup></script>

<template>
  <form class="catalog__form" action="/">
    <fieldset class="catalog__fieldset">
      <legend class="catalog__legend">Сортировка:</legend>
      <select class="catalog__select">
        <option value="popular">по популярности</option>
      </select>
    </fieldset>
    <fieldset class="catalog__fieldset catalog__fieldset--price">
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
              checked
            />шоколадные</label
          >
        </p>
        <p>
          <label
            ><input class="catalog__checkbox" type="checkbox" checked />сахарные
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
    <button class="catalog__button" type="submit">Применить</button>
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

  &--price div{
    height: 36px;
    border-radius: 20px;
    background-color: rgba(252, 252, 252, 0.3);
  }

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
    margin-right: 18px;

    p {
      margin: 0;
    }

    label {
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 20px;
    }
  }
}

.catalog__legend {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: $basic-extra-dark;
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
    background-color: $basic-extra-light;
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
  border: 2px solid $basic-extra-dark;
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
    background-color: $basic-extra-dark;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
}

.catalog__checkboxs {
  display: flex;
  padding: 10px 24px;
  justify-content: space-between;
  width: 604px;
  box-sizing: border-box;
  background-color: rgba(252, 252, 252, 0.3);
  border-radius: 18px;
}

.catalog__checkbox {
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid $basic-extra-dark;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  margin-right: 8px;
  position: relative;

  &:checked {
    border: none;
  }

  &:checked::before {
    appearance: none;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    background-image: url("/images/check-on.svg");
    z-index: 1;
  }
}

.catalog__button {
  width: 185px;
  height: 36px;
  border: none;
  border-radius: 20px;
  background-color: rgba(252, 252, 252, 0.3);
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  margin-top: 46px;
  box-shadow: 0 0 0 2px rgba(252, 252, 252, 0.3);
}
</style>
