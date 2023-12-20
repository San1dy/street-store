<template lang="pug">
div
  AppHeader
  GenderComponent(v-if="!selectedFloor", @floor-selected="handleFloorSelection")
  CatalogContainer(v-if="selectedFloor", :selected-floor="selectedFloor", :key="selectedFloor")
  FooterSection
</template>

<script>
import AppHeader from '@/views/AppHeader.vue';
import FooterSection from '@/views/AppFooterSection.vue';
import CatalogContainer from '@/components/CatalogContainer.vue';
import GenderComponent from '@/components/GenderComponent.vue';

export default {
  name: 'CatalogPage',
  components: {
    AppHeader,
    GenderComponent,
    CatalogContainer,
    FooterSection,
  },
  data() {
    return {
      selectedFloor: null
    };
  },
  methods: {
    handleFloorSelection(floor) {
      this.selectedFloor = floor;
    }
  }
}
</script>


<style scoped>
/* Стили для каталога */
</style>
