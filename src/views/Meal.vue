<template>
    <h1>{{ meal.strMeal }}</h1>
    <p>{{ meal.strInstructions }}</p>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;

const meal = ref({});

async function getMeal() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    meal.value = data.meals[0];
}

onMounted(() => {
    getMeal();
})
</script>