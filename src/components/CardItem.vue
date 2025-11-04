<template>
    <RouterLink :to="`/cards/${prop.id}`" class="card">
        <h3>{{ prop.title }}</h3>
        <p>{{ prop.price }}</p>
        <button @click.prevent="addToFavourite">Favourites</button>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const prop = defineProps({
    id: Number,
    title: String,
    price: Number,
    isFavourite: Boolean
})

const emits = defineEmits(['addToFavourite'])

function addToFavourite() {
    emits('addToFavourite', prop.id);
}
</script>

<style scoped>
.card {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>