<template>
    <CardItem v-for="card in cards" :key="card.id" :to="card.id" :name="card.name" :age="card.age" />
</template>

<script setup>
import CardItem from '@/components/CardItem.vue';
import { ref } from 'vue';

const cards = ref([
    {
        id: 1,
        name: 'John Doe',
        age: 30
    },
    {
        id: 2,
        name: 'Jane Doe',
        age: 25
    },
    {
        id: 3,
        name: 'Bob Smith',
        age: 35
    }
]);
</script>