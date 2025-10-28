<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';

</script>

<template>
    <main class="container">
        <AppHeader />
        <slot></slot>
        <AppFooter />
    </main>
</template>