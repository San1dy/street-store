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
import AppHeader from '@/components/MainComponents/AppHeader.vue';
import FooterSection from '@/components/MainComponents/AppFooterSection.vue';
import HomeFone from '@/components/HomeComponents/HomeFone.vue';
import HomeMeInfo from '@/components/HomeComponents/HomeMeInfo.vue';
import HomeCallToActionSection from '@/components/HomeComponents/HomeCallToActionSection.vue';
import StatisticsSection from '@/components/HomeComponents/HomeStatisticsSection.vue';
import FeatureSection from '@/components/HomeComponents/HomeFeaturesection.vue';
import EventsSection from '@/components/HomeComponents/HomeEventsSection.vue';
import ImageGallery from '@/components/HomeComponents/HomeImageGallery.vue';

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
  },
  setup() {

  }
};
</script>

<style>

</style>


