<script setup>
const socialData = [
    {id: 1, src: '', text: 'Telegram'},
    {id: 2, src: '', text: 'Vk'},
    {id: 3, src: '', text: 'YouTube'},
];

const footerData = [
    {id: 1, src: '', text: 'Для поставщиков',},
    {id: 2, src: '', text: 'О производстве',},
    {id: 3, src: '', text: 'Наши документы',},
    {id: 4, src: '', text: 'Экологические стандарты',},
];
</script>

<template>
    <footer class="footer">
        <div class="footer__social social">
            <ul class="social__list">
                <li class="social__item" v-for="item in socialData" :key="item.id">
                    <a class="social__link" :href="item.src"><span class="visually-hidden">{{ item.text }}</span></a>
                </li>
            </ul>
        </div>
        <ul class="footer__list">
            <li class="footer__item" v-for="item in footerData" :key="item.id">
                <a :href="item.src" class="footer__link">{{ item.text }}</a>
            </li>
        </ul>
        <div class="footer__copy copy">
            <a class="copy__link" href="#!">
                <img src="/images/footer-logo.svg" alt="">
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
    padding: 48px 0;
}

.social__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
}

.social__link {
    width: 24px;
    height: 24px;
    background-color: #ffffff;
    border-radius: 50%;
    display: block;
    margin-right: 16px;
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
    gap: 6px;
}

.footer__link {
    width: 170px;
    height: 24px;
    color: #2D3440;
    font-size: 14px;
    line-height: 20px;
    text-decoration: none;
    margin-bottom: 4px;
}

.footer__copy {
    width: 194px;
}

.copy__text {
    color: #2D3440;
    font-size: 12px;
    line-height: 16px;

    a {
        color: #2D3440;
        text-decoration-color: #2D3440;
    }
}
</style>
