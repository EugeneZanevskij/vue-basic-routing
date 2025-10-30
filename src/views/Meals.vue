<template>
    <h1>Meals</h1>

    <!-- Card with link to page -->
    <div class="meals">
        <MealCard
            v-for="meal in meals"
            :key="meal.idMeal"
            :id="meal.idMeal"
            :img-src="meal.strMealThumb"
            :name="meal.strMeal"
        />
    </div>

</template>

<script setup>
import MealCard from '@/components/MealCard.vue';
import { onMounted, ref } from 'vue';

const meals = ref([]);

async function getMeals(value) {
    //www.themealdb.com/api/json/v1/1/search.php?s=${value}
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
    const data = await response.json();
    meals.value = data.meals;
}

onMounted(() => {
    getMeals('P');
})
</script>

<style>
.meals {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}
</style>