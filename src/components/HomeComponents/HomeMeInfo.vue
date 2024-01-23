<template lang="pug">
.about-us-container
    .image-wrapper
      img.full-width-image(:src="imageSrc", alt="О нас")
    .content-column
      .text-wrapper
        h1.section-title
          strong {{ title }}
        p.main-text(v-for="paragraph in paragraphs" :key="paragraph") {{ paragraph }}
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'HomeMeInfo',
  setup() {
    const title = ref('О нас');
    const paragraphs = ref([
      'Мы - ведущий интернет-магазин кроссовок, предлагающий широкий ассортимент моделей от лучших брендов.',
      'Наша команда экспертов тщательно отбирает каждую пару, чтобы удовлетворить потребности и предпочтения наших клиентов.',
      'Мы гордимся тем, что предлагаем только качественные и стильные кроссовки, которые помогут вам выделиться из толпы.'
    ]);
    const imageSrc = ref(require('../../assets/images/photo-1556637640-2c80d3201be8.jpeg'));

    return { title, paragraphs, imageSrc };
  }
}
</script>


<style scoped>

.about-us-container {
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: space-between;
  margin: 50px auto; 
  padding: 15px;
  border-radius: 20px;
  background: var(--main-bg-color); 
  box-shadow: 7px 7px 14px #babecc,
              -7px -7px 14px #ffffff; 
  color: var(--text-color); 
}

.image-wrapper {
  flex: 1; 
  padding: 20px; 
}

.full-width-image {
  width: 100%;
  height: auto;
  border-radius: 20px;
  object-fit: cover; 
}

.content-column {
  flex: 1; 
  padding: 20px; 
}

.section-title {
  font-size: 2rem; 
  font-weight: bold;
  margin-bottom: 1rem; 
}

.main-text {
  font-size: 1rem; 
  line-height: 1.6; 
  margin-bottom: 1rem;
}

@media (max-width: 1080px) {
  .about-us-container {
    flex-direction: column; 
  }

  .image-wrapper, .content-column {
    width: 100%; 
  }
}

@media (max-width: 900px) {
  .section-title {
    font-size: 1.5rem; 
  }

  .main-text {
    font-size: 0.9rem; 
  }
}

</style>