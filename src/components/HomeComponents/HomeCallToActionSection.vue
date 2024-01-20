<template lang="pug">
section.featured-section
  .container
    .content
      h2.title Не упустите шанс!
      p.description Приобретите свою идеальную пару кроссовок уже сегодня!
      router-link.btn-primary(to="/catalog") Посмотреть предложения
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeCallToActionSection',
  setup() {
  },
});
</script>

    
<style scoped>

.featured-section {
  padding: 40px 20px;
  margin: 20px auto; /* Центрировать секцию */
  background: var(--main-bg-color); /* Используем основной цвет фона */
  border-radius: 15px;
  box-shadow: 7px 7px 14px #babecc,
              -7px -7px 14px #ffffff; /* Мягкие тени для эффекта неоморфизма */
  color: var(--text-color); /* Цвет текста */
  text-align: center;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-size: 2.5rem; /* Увеличиваем размер для выделения */
    color: var(--text-color); /* Цвет текста */
    margin-bottom: 15px;
  }

  .description {
    font-size: 1.5rem; /* Увеличиваем размер для лучшей читаемости */
    margin-bottom: 20px;
    max-width: 600px;
    color: var(--detail-text-color); /* Цвет детального текста */
  }

  .btn-primary {
    width: 200px; /* Увеличиваем ширину для более заметной кнопки */
    height: 50px; /* Увеличиваем высоту для лучшего визуального восприятия */
    color: #fff;
    border-radius: 10px; /* Скругляем углы для мягкости */
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 18px; /* Увеличиваем шрифт */
    background: var(--accent-color); /* Используем акцентный цвет */
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 4px 4px 8px #babecc,
                -4px -4px 8px #ffffff; /* Тени для эффекта неоморфизма */
    text-decoration: none;
  }

  .btn-primary:hover {
    background: var(--button-hover-color); /* Светлый цвет при наведении */
    box-shadow: inset 1px 1px 2px #babecc,
                inset -1px -1px 2px #ffffff; /* Изменение тени для эффекта нажатия */
    opacity: 1; /* Убираем прозрачность при наведении */
  }

  .btn-primary:active {
    transform: translateY(2px); /* Перемещение при нажатии */
    box-shadow: inset 2px 2px 2px #babecc,
                inset -2px -2px 2px #ffffff; /* Внутренняя тень для эффекта вдавленной кнопки */
  }
}

@media (max-width: 768px) {
  .featured-section {
    .title {
      font-size: 1.8rem; /* Уменьшаем для адаптивности */
    }

    .description {
      font-size: 1.1rem; /* Уменьшаем для адаптивности */
    }

    .btn-primary {
      width: 150px; /* Уменьшаем для адаптивности */
      font-size: 16px; /* Уменьшаем для адаптивности */
    }
  }
}

</style>
