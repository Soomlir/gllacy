<script setup>
import { IMAGE_DIR } from '@/lib/constants';
import SocialComponent from './SocialComponent.vue';

const props = defineProps({
  slides: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <section class="promo">
    <h2 class="visually-hidden">Промо слайдер - Gllacy</h2>
    <ul class="promo__slider">
      <li
        class="promo__item"
        v-for="{ id, heading, text, img } in slides.slice(2)"
        :key="id"
      >
        <div class="promo__info">
          <h3 class="promo__heading">{{ heading }}</h3>
          <p class="promo__text">{{ text }}</p>
          <a class="promo__button" href="#!">Заказать</a>
        </div>
        <picture class="promo__picture">
          <img
            :src="`${IMAGE_DIR}/${img.src}`"
            :width="img.width"
            :height="img.height"
            :alt="img.alt"
          />
        </picture>
        <button class="promo__prev">
          <span class="visually-hidden">Предыдущий слайд.</span>
        </button>
        <button class="promo__next">
          <span class="visually-hidden">Следующий слайд.</span>
        </button>
      </li>
    </ul>
    <div class="promo__bottom">
      <div class="promo__controls">
        <button class="promo__button-slider" type="radio"></button>
        <button class="promo__button-slider" type="radio"></button>
        <button class="promo__button-slider promo__button-slider--current" type="radio"></button>
      </div>
      <SocialComponent />
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

.promo {
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  background-image: url("/images/slider-bg-3.jpg");
  padding-bottom: 80px;
}

.promo__slider {
  margin: 0;
  padding: 0;
  list-style: none;
  padding: 23px 278px 0 70px;
  position: relative;
}

.promo__item {
  display: flex;
}

.promo__info {
  max-width: 470px;
  margin-right: 32px;
}

.promo__heading {
  color: $basic-extra-dark;
  font-size: 36px;
  line-height: 46px;
  width: 440px;
  margin: 0;
  margin-top: 113px;
  font-weight: 900;
  margin-bottom: 24px;
}

.promo__text {
  margin: 0;
  color: $basic-extra-dark;
  font-size: 18px;
  line-height: 24px;
  width: 400px;
  margin-bottom: 48px;
}

.promo__button {
  text-decoration: none;
  color: $basic-extra-dark;
  background-color: $basic-extra-light;
  width: 139px;
  height: 44px;
  box-sizing: border-box;
  display: block;
  text-align: center;
  padding: 12px 32px;
  border-radius: 22px;
  box-shadow: 0 4px 12px rgba(45, 52, 64, 0.1);
  font-family: inherit;
  box-shadow: 0 0 0 4px hsla(0, 0%, 99%, 0.4), 0 4px 12px rgba(45, 52, 64, 0.1);
  font-weight: 700;
}

.promo__picture {
  position: relative;
  z-index: 1;

  &::before {
    position: absolute;
    width: 312px;
    height: 312px;
    background-color: #fcdc92;
    content: "";
    z-index: -1;
    border-radius: 50%;
    top: 98px;
    left: 19px;
  }
}

.promo__prev,
.promo__next {
  position: absolute;
  display: flex;
  width: 38px;
  height: 38px;
  background-color: rgba(252, 252, 252, 0.3);
  border-radius: 50%;
  border: 2px solid $basic-extra-light;
  z-index: 2;
  cursor: pointer;
}

.promo__prev {
  right: 590px;
  top: 258px;

  &::before {
    position: absolute;
    content: "";
    width: 16px;
    height: 16px;
    inset: 0;
    margin: auto;
    background-image: url("/images/arrow-left.svg");
  }
}

.promo__next {
  right: 278px;
  top: 258px;

  &::before {
    position: absolute;
    content: "";
    width: 16px;
    height: 16px;
    inset: 0;
    margin: auto;
    background-image: url("/images/arrow-left.svg");
    transform: scaleX(-1);
  }
}

.promo__bottom {
  display: flex;
}

.promo__controls {
  width: 68px;
  margin-top: 1px;
  margin-right: auto;
}

.promo__button-slider {
  width: 12px;
  height: 12px;
  appearance: none;
  border-radius: 50%;
  background-color: $basic-extra-light;
  margin: 0;
  padding: 0;
  margin-right: 8px;
  opacity: 0.3;
  cursor: pointer;
  border: none;

  &--current {
    opacity: 1;
  }
}
</style>
