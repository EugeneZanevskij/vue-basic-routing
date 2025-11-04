<template>
    <h1>Card {{ id }}</h1>
    <h2>Title {{ cardsStore.selectedCard.title }}</h2>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCardsStore } from '@/stores/useCardsStore';

const cardsStore = useCardsStore();

const route = useRoute();
const id = route.params.id

onMounted(() => {
    cardsStore.getFilteredCard(id);
})
</script>