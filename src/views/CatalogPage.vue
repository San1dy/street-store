<template lang="pug">
div
  AppHeader
  CatalogContainer
  FooterSection
</template>

<script>
import AppHeader from '@/views/AppHeader.vue';
import FooterSection from '@/views/AppFooterSection.vue'
import CatalogContainer from '@/components/CatalogContainer.vue'

export default {
  name: 'CatalogPage',
  components: {
    AppHeader,
    CatalogContainer,
    FooterSection,
  }
}
</script>

<style scoped>
/* Стили для каталога */
</style>
