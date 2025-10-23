<script setup>
import { RouterView } from 'vue-router'
import AppLayout from './layouts/AppLayout.vue';
</script>

<template>
  <main class="container">
    <AppLayout>
      <RouterView />
    </AppLayout>
    <!-- 
    <AppHeader />
    <RouterView />
    <AppFooter />
    -->
    <Button>
      Click
      <img src="@/assets/logo.svg" alt="" />
    </Button>
  </main>
</template>

<style scoped>
.container {
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
}
</style>
