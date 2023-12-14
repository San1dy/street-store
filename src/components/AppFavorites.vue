<template lang="pug">
div
  h1 Избранное
  .favorites
    .favorite-product(v-for="item in favorites", :key="item.id")
      img(:src="item.image")
      h2 {{ item.name }}
      p {{ item.description }}
      button(@click="removeFromFavorites(item)") Убрать из избранного
</template>

<script>
export default {
  data() {
    return {
      favorites: [], // Массив для хранения избранных товаров
    };
  },
  methods: {
    addToFavorites(product) {
      this.favorites.push(product);
    },
    removeFromFavorites(item) {
      const index = this.favorites.findIndex((f) => f.id === item.id);
      if (index !== -1) {
        this.favorites.splice(index, 1);
      }
    },
  }
};
</script>

<style scoped>
/* Стили для компонента "Избранное" */
</style>
