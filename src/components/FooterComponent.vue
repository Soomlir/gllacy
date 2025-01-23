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
        <div class="footer__social">
            <ul>
                <li v-for="item in socialData" :key="item.id">
                    <a :href="item.src">{{ item.text }}</a>
                </li>
            </ul>
        </div>
        <ul class="footer__list">
            <li class="footer__item" v-for="item in footerData" :key="item.id">
                <a :href="item.src" class="footer__link">{{ item.text }}</a>
            </li>
        </ul>
        <div class="footer__copy">
            <a href="#!">
                <img src="/images/footer-logo.svg" alt="">
            </a>
            <p>Сделано в <a href="#!">.html academy</a> © 2021</p>
        </div>
   </footer>
</template>

<style scoped>
</style>
