<template lang="pug">
div
  AppHeader
  HomeFone
  HomeMeInfo
  StatisticsSection
  FeatureSection
  HomeCallToActionSection
  EventsSection
  ImageGallery
  FooterSection
</template>

<script>
import AppHeader from '@/views/AppHeader.vue';
import FooterSection from '@/views/AppFooterSection.vue'
import HomeFone from '@/components/HomeFone.vue';
import HomeMeInfo from '@/components/HomeMeInfo.vue';
import HomeCallToActionSection from '@/components/HomeCallToActionSection.vue';
import StatisticsSection from '@/components/HomeStatisticsSection.vue';
import FeatureSection from '@/components/HomeFeaturesection.vue'
import EventsSection from '@/components/HomeEventsSection.vue'
import ImageGallery from '@/components/HomeImageGallery.vue'

export default {
  name: 'HomePage',
  components: {
    AppHeader,
    HomeFone,
    HomeMeInfo,
    HomeCallToActionSection,
    StatisticsSection,
    FeatureSection,
    EventsSection,
    ImageGallery,
    FooterSection,
  }
};
</script>

<style>
</style>

