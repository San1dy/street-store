<template lang="pug">
section.features
  .feature
    img(src="../assets/images/photo-1591550936261-4f22e48d1f03.jpeg" alt="Fast Delivery")
    h2 Быстрая доставка
    p Получите свои кроссовки в кратчайшие сроки.
  .feature
    img(src="../assets/images/photo-1587855049254-351f4e55fe2a.jpeg" alt="Quality Guaranteed")
    h2 Качество гарантировано
    p Мы предлагаем только оригинальные и сертифицированные товары.
  .feature
    img(src="../assets/images/photo-1533681018184-68bd1d883b97.jpeg" alt="Easy Return")
    h2 Простой возврат
    p Если вам не понравится товар, мы вернем вам деньги.
</template>

<script>
export default {
  name: 'FeatureSection',

};
</script>

<style scoped>
.features {
  margin:auto;
  width: 75%;
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.feature {
  width: 25%;
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #f5f5f5; 
}

.feature img {
  width: 100%;
  height: 200px; 
  object-fit: cover;
  margin-bottom: 30px;
  border-radius: 10px;
}

.feature h2 {
  margin-bottom: 10px;
  color: #333; 
}

.feature p {
  color: #666; 
}
</style>
