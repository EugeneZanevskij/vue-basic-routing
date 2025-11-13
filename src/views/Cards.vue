<template>
    <CardItem 
        v-for="card in cardsStore.cards" 
        :key="card.id" 
        :id="card.id" 
        :title="card.title"
        :is-favourite="cardsStore.favourites.includes(card.id)"
        @addToFavourite="cardsStore.addToFavourite"
    />
</template>

<script setup lang="ts">
import CardItem from '../components/CardItem.vue';
import { onMounted, ref } from 'vue';
import { useCardsStore } from '../stores/useCardsStore';

const cardsStore = useCardsStore()

onMounted(() => {
    if (cardsStore.cards.length) return;
    cardsStore.getCards();
    cardsStore.getFavourites();
})
</script>