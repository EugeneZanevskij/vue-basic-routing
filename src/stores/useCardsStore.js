import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCardsStore = defineStore('cards', () => {
    const cards = ref([]);
    const selectedCard = ref({});
    const favourites = ref(getFavouritesImmediately());

    async function getCards() {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        cards.value = data.products;
        getFavourites();
    }

    async function getCard(id) {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        selectedCard.value = data;
    }

    function getFilteredCard(id) {
        if (cards.value.length) {
            const card = cards.value.find((card) => card.id == id);
            selectedCard.value = card;
        }
        else {
            getCard(id);
        }
    }

    function addToFavourite(id) {
        if (!favourites.value.includes(id)) {
            favourites.value.push(id);
        } else {
            favourites.value = favourites.value.filter((favourite) => favourite !== id);
        }

        saveFavourites();
    }

    function isFavourite(id) {
        return favourites.value.includes(id);
    }

    function saveFavourites() {
        localStorage.setItem('favourites', JSON.stringify(favourites.value));
    }

    function getFavourites() {
        const storage = localStorage.getItem('favourites');
        if (storage) {
            favourites.value = JSON.parse(storage)
        }
    }

    function getFavouritesImmediately() {
        return JSON.parse(localStorage.getItem('favourites')) || [];
    }

    return { 
        cards, 
        selectedCard, 
        favourites, 
        getCards, 
        getFilteredCard, 
        addToFavourite,
        isFavourite,
        getFavourites
    }
})