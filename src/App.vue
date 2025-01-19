<script setup>
import HeaderBlock from "./components/HeaderBlock.vue";
import PromoBlock from "./components/PromoBlock.vue";
import ProposalBlock from "./components/ProposalBlock.vue";
import AssortmentBlock from "./components/AssortmentBlock.vue";
import AboutBlock from "./components/AboutBlock.vue";
import OrderBlock from "./components/OrderBlock.vue";
import ContactsBlock from "./components/ContactsBlock.vue";
import FooterBlock from "./components/FooterBlock.vue";
</script>

<template>
  <HeaderBlock />
  <main class="main">
    <h1 class="visually-hidden">Gllacy Shop</h1>
    <PromoBlock />
    <ProposalBlock />
    <AssortmentBlock />
    <AboutBlock />
    <OrderBlock />
    <ContactsBlock />
  </main>
  <FooterBlock />
</template>

<style scoped></style>
