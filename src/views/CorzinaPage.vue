<template lang="pug">
div
  AppHeader
  AppCorzina
  FooterSection
</template>
  
  <script>
  import AppHeader from '@/views/AppHeader.vue';
  import AppCorzina from '@/components/AppCorzina.vue'
  import FooterSection from '@/views/AppFooterSection.vue';
  
  export default {
    name: 'CatalogPage',
    components: {
      AppHeader,
      AppCorzina,
      FooterSection,
    }
  }
  </script>
  
  <style scoped>

  </style>