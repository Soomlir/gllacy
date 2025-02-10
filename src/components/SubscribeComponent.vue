<script setup></script>

<template>
  <section class="subscribe">
    <h2 class="visually-hidden">Подписка на рассылку - Gllacy</h2>
    <article class="subscribe__article">
      <p class="subscribe__text">Новое в нашем блоге</p>
      <h3 class="subscribe__heading">
        10 способов сервировки фруктовых щербетов <br />
        к столу
      </h3>
    </article>
    <div class="subscribe__form-wrap">
      <div class="subscribe__content content">
        <p class="content__text">
          Подпишитесь на нашу сладкую рассылку и будьте всегда <br />
          в курсе всего самого вкусного, что у нас происходит. Обещаем не
          спамить и не слать всякой ненужной ерунды. Честно =)
        </p>
        <form class="subscribe__form" action="/" method="post">
          <input
            class="subscribe__input"
            type="email"
            name="email"
            placeholder="email@example.com"
          />
          <button class="subscribe__button" type="submit">Отправить</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  display: block;
}

.visually-hidden {
  position: fixed;
  transform: scale(0);
}

.subscribe {
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 80px;
}

.subscribe {
  display: flex;
  gap: 30px;
}

.subscribe__article {
  border-radius: 16px;
  width: 577px;
  background-image: url("/images/article-bg.jpg");
  padding: 33px 235px 69px 32px;
  box-sizing: border-box;
}

.subscribe__text {
  margin: 0;
  color: #565c66;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 12px;
}

.subscribe__heading {
  margin: 0;
  color: #2d3440;
  font-size: 24px;
  line-height: 30px;
}

.subscribe__form-wrap {
  width: 570px;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 6px;
  background-image: url("/images/subscribe-bg.jpg");
}

.content {
  background-color: #ffffff;
  border-radius: 16px;
}

.content__text {
  color: #565c66;
  font-size: 16px;
  line-height: 22px;
  padding: 26px 26px 44px 26px;
  margin: 0;
}

.subscribe__form {
  padding: 0 26px 28px 26px;
}

.subscribe__input {
  width: 332px;
  height: 48px;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  border: 1px solid #b9b9b9;
  font-size: 17px;
  line-height: 20px;
  padding: 14px 16px;
  box-sizing: border-box;
  margin-right: 18px;
  color: #999999;
  font: inherit;
}

.subscribe__button {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FCFCFC;
  background-color: #ff2f64;
  border: none;
  border-radius: 26px;
  width: 152px;
  height: 44px;
  box-sizing: border-box;
  box-shadow: 0 0 0 4px rgba(255, 47, 100, 0.3),
    0 4px 12px rgba(45, 52, 64, 0.1);
}
</style>
