<script setup>
import SocialComponent from './SocialComponent.vue';

const footerData = [
  { id: 1, src: "", text: "Для поставщиков", current: true },
  { id: 2, src: "", text: "О производстве", current: false },
  { id: 3, src: "", text: "Наши документы", current: false },
  { id: 4, src: "", text: "Экологические стандарты", current: false },
];
</script>

<template>
  <footer class="footer">
    <SocialComponent class="footer__social"/>
    <ul class="footer__list">
      <li
        class="footer__item"
        v-for="{ id, text, src, current } in footerData"
        :key="id"
      >
        <a
          :href="src"
          class="footer__link"
          :class="{ 'footer__link--current': current }"
          >{{ text }}</a
        >
      </li>
    </ul>
    <div class="footer__copy copy">
      <a class="copy__link" href="#!">
        <img src="/images/footer-logo.svg" alt="" />
      </a>
      <p class="copy__text">Сделано в <a href="#!">.html academy</a> © 2021</p>
    </div>
  </footer>
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

.footer {
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  padding: 47px 0;
}

.footer__list {
  margin: 0;
  margin-right: auto;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 356px;
  height: 48px;
  margin-left: 267px;
  row-gap: 7px;
}

.footer__link {
  width: 170px;
  height: 24px;
  color: #2d3440;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  margin-bottom: 4px;

  &--current {
    font-weight: 700;
    position: relative;
  }

  &--current::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 1px;
    left: -24px;
    background-image: url("/images/heart.svg");
  }
}

.footer__copy {
  width: 194px;
  margin-top: 1px;
}

.copy__text {
  color: #2d3440;
  font-size: 12px;
  line-height: 16px;

  a {
    color: #2d3440;
    text-decoration-color: #2d3440;
  }
}
</style>
