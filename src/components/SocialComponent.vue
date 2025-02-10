<script setup>
const socialData = [
    { id: 1, src: "https://t.me/htmlacademy", text: "Telegram", className: 'social__link--tg' },
    { id: 2, src: "https://vk.com/htmlacademy", text: "Vk", className: 'social__link--vk' },
    { id: 3, src: "https://youtube.com/user/htmlacademyru", text: "YouTube", className: 'social__link--youtube' },
];
</script>

<template>
    <div class="promo__social social">
        <ul class="social__list">
            <li class="social__item" v-for="element in socialData" :key="element.id">
                <a class="social__link" :class="element.className" :href="element.src">
                    <span class="visually-hidden">{{ element.text }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.social__list {
    margin: 0;
    display: flex;
    padding: 0;
    list-style: none;
}

.social__link {
    position: relative;
    display: flex;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-left: 16px;

    &::before {
        content: "";
        position: absolute;
        width: 24px;
        height: 24px;
        inset: 0;
        margin: auto;
        border-radius: 50%;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    &--tg::before {
        background-image: url("/images/tg.svg");
    }

    &--vk::before {
        background-image: url("/images/vk.svg");
    }

    &--youtube::before {
        background-image: url("/images/youtube.svg");
    }
}
</style>