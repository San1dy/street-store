<template lang="pug">
.main-container
  AppHeader
  AppCorzina
  FooterSection
</template>

<script setup>
import AppHeader from '@/components/MainComponents/AppHeader.vue';
import FooterSection from '@/components/MainComponents/AppFooterSection.vue';
import AppCorzina from '@/components/CorzinaComponents/AppCorzina.vue';
</script>


<style scoped>
  .main-container {
    min-height: 100vh; 
  }
  
</style>
