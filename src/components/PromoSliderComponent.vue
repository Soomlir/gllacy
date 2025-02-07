<script setup>
const sliderData = [
  // {
  //     id: 1,
  //     heading: `Нежный пломбир с клубничным джемом`,
  //     text: `Натуральное мороженое из свежих сливок
  //                 и молока с вкуснейшим клубничным джемом – это идеальный десерт для всей семьи. `,
  //     img: {
  //         src: '/images/promo-slide-1.png',
  //         width: '328px',
  //         height: '507px',
  //         alt: 'Нежный пломбир с клубничным джемом.',
  //     }
  // },
  // {
  //     id: 2,
  //     heading: `Сливочное мороженое со вкусом банана`,
  //     text: `Сливочное мороженое с ярким банановым вкусом подарит вам свежесть и наслаждение даже в самый жаркий летний день.`,
  //     img: {
  //         src: '/images/promo-slide-2.png',
  //         width: '312px',
  //         height: '507px',
  //         alt: 'Сливочное мороженое со вкусом банана.',
  //     }
  // },
  {
    id: 3,
    heading: `Карамельный пломбир с маршмеллоу`,
    text: `Необычный сладкий десерт с карамельным топпингом и кусочками зефира завоюет сердца сладкоежек всех возрастов. `,
    img: {
      src: "/images/promo-slide-3.png",
      width: "350px",
      height: "507px ",
      alt: "Карамельный пломбир с маршмеллоу. ",
    },
  },
];

const socialData = [
  { id: 1, src: "", text: "Telegram" },
  { id: 2, src: "", text: "Vk" },
  { id: 3, src: "", text: "YouTube" },
];
</script>

<template>
  <section class="promo">
    <h2 class="visually-hidden">Промо слайдер - Gllacy</h2>
    <ul class="promo__slider">
      <li
        class="promo__item"
        v-for="{ id, heading, text, img } in sliderData"
        :key="id"
      >
        <div class="promo__info">
          <h3 class="promo__heading">{{ heading }}</h3>
          <p class="promo__text">{{ text }}</p>
          <a class="promo__button" href="#!">Заказать</a>
        </div>
        <picture class="promo__picture">
          <img
            :src="img.src"
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
        <input class="promo__radio" type="radio" />
        <input class="promo__radio" type="radio" />
        <input class="promo__radio promo__radio--current" type="radio" />
      </div>
      <div class="promo__social social">
        <ul class="social__list">
          <li
            class="social__item"
            v-for="element in socialData"
            :key="element.id"
          >
            <a class="social__link" :href="element.src">
              <span class="visually-hidden">{{ element.text }}</span>
            </a>
          </li>
        </ul>
      </div>
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
  padding-bottom: 76px;
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
  color: #2d3440;
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
  color: #2d3440;
  font-size: 18px;
  line-height: 24px;
  width: 400px;
  margin-bottom: 48px;
}

.promo__button {
  text-decoration: none;
  color: #2d3440;
  background-color: #fcfcfc;
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
  border: 2px solid #fcfcfc;
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
    background-image: url("../images/arrow-left.svg");
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
    background-image: url("../images/arrow-left.svg");
    transform: scaleX(-1);
  }
}

.promo__bottom {
  display: flex;
}

.promo__controls {
  width: 68px;
  margin-top: 8px;
  margin-right: auto;
}

.promo__radio {
  width: 12px;
  height: 12px;
  appearance: none;
  border-radius: 50%;
  background-color: #fcfcfc;
  margin: 0;
  padding: 0;
  margin-right: 8px;
  opacity: 0.3;
  cursor: pointer;

  &--current {
    opacity: 1;
  }
}

.social__list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.social__link {
  display: block;
  width: 24px;
  height: 24px;
  background-color: #fcfcfc;
  border-radius: 50%;
  margin-left: 16px;
  box-shadow: 0 0 0 2px hsla(0, 0%, 99%, 0.3);
}
</style>
