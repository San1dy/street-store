<template lang="pug">
div
  AppHeader
  FooterSection
</template>

<script>
import AppHeader from '@/views/AppHeader.vue';
import FooterSection from '@/views/AppFooterSection.vue'

export default {
  name: 'CatalogPage',
  components: {
    AppHeader,
    FooterSection,
  }
}
</script>

<style scoped>
/* Стили для каталога */
</style>