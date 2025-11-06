<template>
    <h1>Card {{ id }}</h1>
    <p>{{ age }}</p>
    <h2>Title {{ cardsStore.selectedCard.title }}</h2>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCardsStore } from '@/stores/useCardsStore';

const cardsStore = useCardsStore();

const age = ref<number>(0);

const route = useRoute();
const id = route.params.id

onMounted(() => {
    cardsStore.getFilteredCard(id);
})
</script>