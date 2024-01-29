<template lang="pug">
section.features
  .feature(v-for="feature in features" :key="feature.title")
    img(:src="feature.imgSrc" :alt="feature.title")
    h2 {{ feature.title }}
    p {{ feature.description }}
</template>

<script setup>
import { ref } from 'vue';
import FastDeliveryImage from '@/assets/images/photo-1591550936261-4f22e48d1f03.jpeg';
import QualityGuaranteedImage from '@/assets/images/photo-1587855049254-351f4e55fe2a.jpeg';
import EasyReturnImage from '@/assets/images/photo-1533681018184-68bd1d883b97.jpeg';

const features = ref([
  {
    title: 'Быстрая доставка',
    imgSrc: FastDeliveryImage,
    description: 'Получите свои кроссовки в кратчайшие сроки.'
  },
  {
    title: 'Качество гарантировано',
    imgSrc: QualityGuaranteedImage,
    description: 'Мы предлагаем только оригинальные и сертифицированные товары.'
  },
  {
    title: 'Простой возврат',
    imgSrc: EasyReturnImage,
    description: 'Если вам не понравится товар, мы вернем вам деньги.'
  }
]);
</script>

<style scoped>
.features {
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  padding: 30px;
  text-align: center;
  max-width: 1000px; 
}

.feature {
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 7px 7px 14px #babecc,
              -7px -7px 14px #ffffff; 
  background: var(--card-bg-color);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  height: 320px; 
}

.feature img {
  width: 100%; 
  max-height: 150px;
  height: auto; 
  object-fit: cover;
  border-radius: 10px;
}

.feature h2 {
  color: var(--text-color); 
  font-size: 1.5rem;
  margin-bottom: 10px;
  align-self: start; 
}

.feature p {
  color: var(--detail-text-color); 
  font-size: 1rem;
  align-self: start;
}

@media (max-width: 1080px) {
  .features {
  margin: 0px auto;
  gap: 30px;
  padding: 20px;
  max-width: 700px; 
}

.feature {
  grid-template-rows: auto 1fr 50px;
  gap: 15px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 7px 7px 14px #babecc,
              -7px -7px 14px #ffffff; 
  background: var(--card-bg-color);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  height: 220px; 
}

.feature img {
  width: 100%; 
  max-height: 110px;
  height: auto; 
  object-fit: cover;
  border-radius: 10px;
}

.feature h2 {
  font-size: 1rem;
  margin: 0;
  padding: 0;
}

.feature p {
  font-size: 0.5rem;
  margin: 0;
  padding: 0;
}
}

@media (max-width: 780px) {
  .features {
  margin: 0px auto;
  gap: 10px;
  padding: 5px;
  max-width: 400px; 
}

.feature {
  grid-template-rows: auto 1fr auto;
  gap: 10px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 7px 7px 14px #babecc,
              -7px -7px 14px #ffffff; 
  background: var(--card-bg-color);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  height: 130px; 
}

.feature img {
  width: 100%; 
  max-height: 60px;
  height: auto; 
  object-fit: cover;
  border-radius: 10px;
}

.feature h2 {
  font-size: 0.7rem;
  margin: 0;
  padding: 0;
}

.feature p {
  font-size: 0.4rem;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
}
}

@media (max-width: 420px) {
  .features {
  grid-template-columns: repeat(1, 1fr);
  margin: 0px auto;
  gap: 15px;
  padding: 2px;
  max-width: 220px; 
}

.feature {
  grid-template-rows: auto 1fr auto;
  gap: 15px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 7px 7px 14px #babecc,
              -7px -7px 14px #ffffff; 
  background: var(--card-bg-color);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  height: 210px; 
}

.feature img {
  width: 100%; 
  max-height: 120px;
  height: auto; 
  object-fit: cover;
  border-radius: 10px;
}

.feature h2 {
  font-size: 1rem;
  margin: 0;
  padding: 0;
}

.feature p {
  font-size: 0.7rem;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
}
}
</style>


