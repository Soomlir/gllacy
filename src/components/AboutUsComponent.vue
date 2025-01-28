<script setup>
const aboutData = [
  {
    id: 1,
    text: `Всё наше мороженое изготавливается на собственном производстве
         с использованием современного оборудования и проверенных временем технологий.`,
    image: `about__text--icecream`,
  },
  {
    id: 2,

    text: `Закупка ингредиентов производится только <br> у проверенных фермерских хозяйств, с которыми <br>
         нас связывает долговременное сотрудничество.`,
    image: `about__text--cow`,
  },
  {
    id: 3,
    text: `Для приготовления мороженого используются сливки и молоко высочайшего качества. Все ингредиенты
         <br> и добавки произведены из натурального сырья.`,
    image: `about__text--list`,
  },
  {
    id: 4,
    text: `Доставка нашего мороженого осуществляется в специальном термопаке, 
         который не даёт мороженому растаять и позволяет сохранить превосходный вкус.`,
    image: `about__text--term`,
  },
];
</script>

<template>
  <section class="about">
    <div class="about__wrap">
      <h2 class="visually-hidden">О нашем бизнесе - Gllacy</h2>
      <p class="about__title">
        Магазин Глейси – это онлайн и офлайн-магазин по продаже мороженого
        собственного производства на развес
      </p>
      <ul class="about__list">
        <li
          class="about__item"
          v-for="{ id, text, image } in aboutData"
          :key="id"
        >
          <p class="about__text" :class="image" v-html="text"></p>
        </li>
      </ul>
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

.about {
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 16px;
  margin-bottom: 80px;
  box-sizing: border-box;
  padding: 24px;
  background-image: url("../images/about-bg.jpg");
}

.about__wrap {
  border-radius: 16px;
  background-color: #ffffff;
  padding: 56px 39px 56px 40px;
}

.about__title {
  margin: 0;
  color: #2d3440;
  font-weight: 900;
  font-size: 32px;
  line-height: 46px;
  text-align: center;
  margin-bottom: 56px;
}

.about__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 32px;
}

.about__item {
  box-sizing: border-box;
  width: 505px;
}

.about__text {
  margin: 0;
  padding-left: 64px;
  color: #565c66;
  font-size: 16px;
  line-height: 22px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 48px;
    height: 48px;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
  }

  &--icecream::before {
    background-image: url("../images/about-icecream.svg");
  }

  &--cow::before {
    background-image: url("../images/about-cow.svg");
  }

  &--list::before {
    background-image: url("../images/about-list.svg");
  }

  &--term::before {
    background-image: url("../images/about-term.svg");
  }
}
</style>
