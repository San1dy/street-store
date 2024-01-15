<template lang="pug">
div
  AppHeader
  router-view
  FooterSection
</template>

<script>
import AppHeader from '@/components/MainComponents/AppHeader.vue';
import FooterSection from '@/components/MainComponents/AppFooterSection.vue';

export default {
  name: 'CatalogPage',
  components: {
    AppHeader,
    FooterSection,
  }
};
</script>

<style scoped>

</style>


