<template lang="pug">
section.features
  .feature
    img(src="../../assets/images/photo-1591550936261-4f22e48d1f03.jpeg" alt="Fast Delivery")
    h2 Быстрая доставка
    p Получите свои кроссовки в кратчайшие сроки.
  .feature
    img(src="../../assets/images/photo-1587855049254-351f4e55fe2a.jpeg" alt="Quality Guaranteed")
    h2 Качество гарантировано
    p Мы предлагаем только оригинальные и сертифицированные товары.
  .feature
    img(src="../../assets/images/photo-1533681018184-68bd1d883b97.jpeg" alt="Easy Return")
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
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Адаптивные колонки */
  gap: 50px;
  padding: 30px;
  text-align: center;
  max-width: 1200px; 
}

.feature {
  padding: 15px;
  margin-bottom: 20px; 
  border-radius: 10px;
  box-shadow: 7px 7px 14px #babecc,
              -7px -7px 14px #ffffff; /* Мягкие тени для эффекта неоморфизма */
  background: var(--card-bg-color); /* Используем переменную для цвета фона */
  backdrop-filter: blur(10px);
  border-radius: 20px;
  height: auto; 
}

.feature img {
  width: 100%; 
  height: auto; /* Убрано фиксированное значение высоты для адаптивности */
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
}

.feature h2 {
  color: var(--text-color); /* Цвет текста из переменных */
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.feature p {
  color: var(--detail-text-color); /* Цвет детального текста из переменных */
  font-size: 1rem;
}

@media (max-width: 1240px) {
  .features {
    grid-template-columns: repeat(2, 1fr); /* Две колонки для средних экранов */
  }
}

@media (max-width: 720px) {
  .features {
    grid-template-columns: 1fr; /* Одна колонка для маленьких экранов */
  }
}

@media (max-width: 480px) {
  .features {
    padding: 15px; /* Уменьшенные отступы для узких экранов */
  }

  .feature {
    margin-bottom: 20px;
  }
}

@media (max-width: 320px) {
  /* Стили для самых маленьких экранов, если требуется */
}

</style>


