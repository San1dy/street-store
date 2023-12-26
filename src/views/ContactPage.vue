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
import AppHeader from '@/views/AppHeader.vue';
import FooterSection from '@/views/AppFooterSection.vue'
import TeamComponent from '@/components/ContactTeamComponent.vue'
import FaqComponent from '@/components/ContactFaqComponent.vue'
import ContactUsForm from '@/components/ContactUsForm.vue'
import ContactInfo from '@/components/ContactInfo.vue'

export default {
  name: 'ContactPage',
  components: {
    AppHeader,
    TeamComponent,
    FaqComponent,
    ContactUsForm,
    ContactInfo,
    FooterSection,
  }
}
</script>

<style scoped>

</style>
  