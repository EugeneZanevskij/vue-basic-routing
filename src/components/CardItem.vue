<template>
    <RouterLink :to="`/cards/${prop.id}`" class="card">
        <h3>{{ prop.title }}</h3>
        <p>{{ prop.price }}</p>
        <p v-if="prop.price">Двойная цена {{ getDoublePrice(prop.price) }}</p>
        <p v-else>Двойная цена {{ getDoublePrice(prop.price || 0) }}</p>
        <button class="button fill-pasha lgbt:bg-anton text-black p-[3px] border-red-500! rounded-[10px] hover:bg-anton hover:text-white" :class="{ 'favourite': isFavourite }" @click.prevent="addToFavourite">Favourites</button>
    </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

interface Props {
    id: number;
    title: string;
    price?: number;
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
    background-color: var(--color-anton);
    border: none;
    color: var(--color-pasha);
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