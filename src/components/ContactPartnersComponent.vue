<template lang="pug">
section.partners
  h1 Наши партнеры
  .partners-logos
    img(v-for="logo in logos" :src="logo.src" :alt="logo.alt" :key="logo.alt")
</template>

<script>
export default {
  name: 'PartnersComponent',
  data() {
    return {
      logos: [
        { src: require('@/assets/images/short5.png'), alt: 'Minty' },
        { src: require('@/assets/images/short2.png'), alt: 'Border' },
        { src: require('@/assets/images/short1.png'), alt: 'Recharge' },
        { src: require('@/assets/images/short3.png'), alt: 'Snowflake' },
        { src: require('@/assets/images/short4.png'), alt: 'Sitemark' },
        { src: require('@/assets/images/short6.png'), alt: 'Inspire' }
      ]
    };
  }
};
</script>

<style scoped>
.partners {
  text-align: center;
  margin: 50px 0;
}

.partners-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.partners-logos img {
  max-height: 50px; 
  margin: 0 15px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.partners-logos img:hover {
  opacity: 1;
}
</style>
