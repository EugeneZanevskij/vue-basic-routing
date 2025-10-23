<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="header">
        <RouterLink class="header__logo" to="/">
            <img alt="Vue logo" class="header__logo-img" src="@/assets/logo.svg" width="125" height="125" />
        </RouterLink>

        <nav class="header__navigation">
            <RouterLink class="header__navigation-link" to="/">Home</RouterLink>
            <RouterLink class="header__navigation-link" to="/about">About</RouterLink>
        </nav>
    </header>
</template>

<style scoped>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
    }

    .header__logo{
        width: 3rem;
    }

    .header__logo-img{
        max-width: 3rem;
        width: 100%;
        height: 100%;
    }

    .header__navigation{
        display: flex;
        gap: 2rem;
    }

    .header__navigation-link{
        text-decoration: none;
        color: #000;
    }

    .header__navigation-link.router-link-active{
        color: #0000ff;
    }

    .header__navigation-link:hover{
        color: rgb(81, 81, 169);
    }
</style>