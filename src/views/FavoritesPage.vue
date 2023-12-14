<template lang="pug">
div
  AppHeader
  AppFavorites
  FooterSection
</template>

<script>
import AppHeader from '@/views/AppHeader.vue';
import AppFavorites from '@/components/AppFavorites.vue'
import FooterSection from '@/views/AppFooterSection.vue';

export default {
  name: 'CatalogPage',
  components: {
    AppHeader,
    AppFavorites,
    FooterSection,
  }
}
</script>

<style scoped>
/* Стили для каталога */
</style>