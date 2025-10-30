<template>
    <RouterLink :to="`/meals/${props.id}`" class="card">
        <img :src="props.imgSrc" :alt="props.name" class="card__image" />
        <h3 class="card__name">{{ props.name }}</h3>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    id: String,
    imgSrc: String,
    name: String
})
</script>

<style>
.card {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    padding: 0.5rem;
}
.card__image {
    width: 4rem;
}
</style>