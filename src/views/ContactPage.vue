<template lang="pug">
div
  AppHeader
  TeamComponent
  ContactInfo
  ContactUsForm
  FaqComponent
  FooterSection
</template>
  
<script>
import AppHeader from '@/components/MainComponents/AppHeader.vue';
import FooterSection from '@/components/MainComponents/AppFooterSection.vue';
import TeamComponent from '@/components/ContactComponents/ContactTeamComponent.vue'
import FaqComponent from '@/components/ContactComponents/ContactFaqComponent.vue'
import ContactUsForm from '@/components/ContactComponents/ContactUsForm.vue'
import ContactInfo from '@/components/ContactComponents/ContactInfo.vue'

export default {
  name: 'ContactPage',
  components: {
    AppHeader,
    TeamComponent,
    ContactInfo,
    ContactUsForm,
    FaqComponent,
    FooterSection,
  },
  setup() {
    
  }
}
</script>

<style scoped>

</style>

  