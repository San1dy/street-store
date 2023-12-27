<template lang="pug">
.main-container
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
    .main-container {
      min-height: 100vh; 
    }
  </style>