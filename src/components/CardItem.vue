<template>
    <RouterLink :to="`/cards/${prop.id}`" class="card">
        <h3>{{ prop.title }}</h3>
        <p>{{ prop.price }}</p>
        <p>Двойная цена {{ getDoublePrice(prop.price) }}</p>
        <button :class="{ 'favourite': isFavourite }" @click.prevent="addToFavourite">Favourites</button>
    </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

// type Props = {
//     id: number,
//     title: string,
//     price: number,
//     isFavourite: boolean
// }

interface Props {
    id: number;
    title: string;
    price: number;
    isFavourite: boolean;
}

const prop = defineProps<Props>()

function getDoublePrice(price: number): number {
    return 2 * price;
}

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

.favourite {
    background-color: yellow;
}
</style>