<script setup>
import { IMAGE_DIR } from '@/lib/constants';

const props = defineProps({
  giftsData: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <section class="gifts">
    <h2 class="gifts__heading">Заказывайте мороженое и получайте подарки!</h2>
    <div class="gifts__wrap">
      <article
        class="gifts__article article"
        v-for="item in giftsData"
        :key="item.id"
      >
        <div class="article__wrap">
          <h3 class="gifts__title">{{ item.heading }}</h3>
          <p class="gifts__text" v-html="item.text"></p>
          <a class="gifts__button" href="#!">Хочу подарок</a>
        </div>

        <img class="gifts__images" :src="`${IMAGE_DIR}/${item.src}`" :alt="item.alt" />
      </article>
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

.gifts {
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 81px;
}

.gifts__heading {
  margin: 0;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 55px;
  width: 434px;
  font-size: 32px;
  line-height: 46px;
  font-weight: 900;
  color: $basic-extra-dark;
  text-align: center;
}

.gifts__wrap {
  display: flex;
  gap: 30px;
}

.gifts__article {
  background-color: $special-neutral;
  display: flex;
  width: 570px;

  border-radius: 15px;
}

.article__wrap {
  padding: 36px 0 36px 36px;
}

.gifts__title {
  color: $basic-extra-dark;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin: 0;
  margin-bottom: 28px;
}

.gifts__text {
  color: $basic-extra-dark;
  font-size: 16px;
  line-height: 22px;
  margin: 0;
  margin-bottom: 28px;
}

.gifts__button {
  text-decoration: none;
  color: $basic-extra-dark;
  border-radius: 26px;
  width: 176px;
  height: 44px;
  background-color: $basic-extra-light;
  display: block;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  box-sizing: border-box;
  padding: 12px 24px;
  box-shadow: 0 0 0 4px hsla(0, 0%, 99%, 0.4), 0 4px 12px rgba(45, 52, 64, 0.1);
}
</style>
