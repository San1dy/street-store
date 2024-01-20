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
  flex-direction: row; /* Горизонтальное направление по умолчанию */
  align-items: center;
  justify-content: space-between;
  margin: 50px auto; /* Автоматические отступы для центрирования */
  padding: 15px;
  border-radius: 20px;
  background: var(--main-bg-color); /* Используем переменную для цвета фона */
  box-shadow: 7px 7px 14px #babecc,
              -7px -7px 14px #ffffff; /* Тени для эффекта неоморфизма */
  color: var(--text-color); /* Цвет текста из переменных */
}

.image-wrapper {
  flex: 1; /* Автоматическая регулировка размера */
  padding: 20px; /* Отступы внутри контейнера изображения */
}

.full-width-image {
  width: 100%;
  height: auto;
  border-radius: 20px;
  object-fit: cover; /* Обрезать изображение по контейнеру */
}

.content-column {
  flex: 1; /* Автоматическая регулировка размера */
  padding: 20px; /* Отступы внутри контейнера текста */
}

.section-title {
  font-size: 2rem; /* Увеличиваем размер заголовка */
  font-weight: bold;
  margin-bottom: 1rem; /* Отступ снизу заголовка */
}

.main-text {
  font-size: 1rem; /* Размер текста абзаца */
  line-height: 1.6; /* Высота строки для улучшения читаемости */
  margin-bottom: 1rem; /* Отступы между абзацами */
}

@media (max-width: 1080px) {
  .about-us-container {
    flex-direction: column; /* Столбцовое расположение для узких экранов */
  }

  .image-wrapper, .content-column {
    width: 100%; /* Полная ширина для узких экранов */
  }
}

@media (max-width: 900px) {
  .section-title {
    font-size: 1.5rem; /* Уменьшаем размер заголовка */
  }

  .main-text {
    font-size: 0.9rem; /* Уменьшаем размер текста абзаца */
  }
}

</style>