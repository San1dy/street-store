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
  margin: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Три колонки по умолчанию */
  grid-gap: 20px; /* Отступы между элементами сетки */
  padding: 20px;
  text-align: center;
}

.feature {
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.2); /* Прозрачный белый фон */
  backdrop-filter: blur(5px); /* Размытие фона за элементом */
}

.feature img {
  width: 100%; /* Ширина изображения подстраивается под размер колонки */
  height: auto; /* Высота изображения подстраивается пропорционально */
  border-radius: 10px;
  margin-bottom: 30px;
}

.feature h2 {
  color: #333;
  font-size: 1.5rem; /* Размер заголовка */
  margin-bottom: 10px;
}

.feature p {
  color: #666;
  font-size: 1rem; /* Размер текста */
}

/* Медиазапросы для адаптивности */
@media (max-width: 768px) {
  .features {
    grid-template-columns: 1fr; /* Одна колонка для устройств среднего и малого размера */
  }
}
</style>
