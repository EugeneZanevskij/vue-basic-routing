<template>
    <CardItem 
        v-for="card in cardsStore.cards" 
        :key="card.id" 
        :id="card.id" 
        :title="card.title" 
        :price="card.price"
        :is-favourite="cardsStore.isFavourite(card.id)"
        @addToFavourite="cardsStore.addToFavourite"
    />
</template>

<script setup>
import CardItem from '@/components/CardItem.vue';
import { onMounted, ref } from 'vue';
import { useCardsStore } from '@/stores/useCardsStore';

const cardsStore = useCardsStore()

onMounted(() => {
    if (cardsStore.cards.length) return;
    cardsStore.getCards();
})
</script>