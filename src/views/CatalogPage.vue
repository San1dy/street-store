<template lang="pug">
div
  AppHeader
  GenderComponent(v-if="!selectedFloor", @floor-selected="handleFloorSelection")
  CatalogContainer(v-if="selectedFloor", :selected-floor="selectedFloor", :key="selectedFloor")
  FooterSection
</template>

<script>
import { ref } from 'vue';
import AppHeader from '@/components/MainComponents/AppHeader.vue';
import FooterSection from '@/components/MainComponents/AppFooterSection.vue';
import CatalogContainer from '@/components/CatalogComponents/CatalogContainer.vue';
import GenderComponent from '@/components/CatalogComponents/GenderComponent.vue';

export default {
  name: 'CatalogPage',
  components: {
    AppHeader,
    GenderComponent,
    CatalogContainer,
    FooterSection,
  },
  setup() {
    const selectedFloor = ref(null);

    const handleFloorSelection = (floor) => {
      selectedFloor.value = floor;
    };

    return {
      selectedFloor,
      handleFloorSelection,
    };
  },
};
</script>

<style scoped>

</style>


<style scoped>

</style>

