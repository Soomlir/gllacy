<script setup>
import PromoSliderComponent from "../components/PromoSliderComponent.vue";
import GiftsComponent from "../components/GiftsComponent.vue";
import VariantsComponent from "../components/VariantsComponent.vue";
import AboutUsComponent from "../components/AboutUsComponent.vue";
import SubscribeComponent from "../components/SubscribeComponent.vue";
import DeliveryComponent from "../components/DeliveryComponent.vue";
import ContactsComponent from "../components/ContactsComponent.vue";
import { ref, onMounted } from "vue";

const indexData = ref({});

onMounted(async () => {
  const response = await fetch("api/index.json");
  const data = await response.json();
  indexData.value = data;
});
</script>

<template>
  <main class="nain">
    <template v-if="indexData.promoGoods">
      <PromoSliderComponent :slides="indexData.promoGoods" />
      <GiftsComponent :giftsData="indexData.giftsData" />
      <VariantsComponent :variantsData="indexData.variantsData"/>
      <AboutUsComponent :aboutData="indexData.aboutData" />
      <SubscribeComponent />
      <DeliveryComponent />
      <ContactsComponent />
    </template>
  </main>
</template>
