<template>
    <div v-if="!cardsStore.selectedCard">Нет карточки</div>
    <template v-else>
        <h1>Card {{ id }}</h1>
        <p>{{ age }}</p>
        <h2>Title {{ cardsStore.selectedCard.title }}</h2>
        <p>Price {{ cardsStore.selectedCard.price }}</p>
        <p>QRCode {{ cardsStore.selectedCard.meta.qrCode }}</p>
        <img :src="cardsStore.selectedCard.images[0]" alt="">
    </template>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCardsStore } from '../stores/useCardsStore';

const cardsStore = useCardsStore();

const age = ref<number>(0);

const route = useRoute();
const id = +route.params.id

onMounted(() => {
    cardsStore.getFilteredCard(id);
})
</script>