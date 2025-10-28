<template>
    <h1>Card {{ id }}</h1>
    <h2>Brand {{ cardInfo.brand }}</h2>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id
const cardInfo = ref({});

async function getData() {
    const result = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await result.json();
    cardInfo.value = data
}

onMounted(() => {
    getData();
})
</script>