<template>
    <RouterLink :to="`/cards/${prop.to}`" class="card">
        <h3>{{ prop.name }}</h3>
        <p>{{ prop.age }}</p>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const prop = defineProps({
    to: Number,
    name: String,
    age: Number
})
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