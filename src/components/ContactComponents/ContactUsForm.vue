<template lang="pug">
section.contact-us
  h1 Свяжитесь с нами
  button(@click="redirectToAnotherSite") Перейти в диалог
</template>

<script>

export default {
  setup() {
    const redirectToAnotherSite = () => {
      const redirectTo = "https://www.avito.ru/profile/messenger/channel/u2u-ezsL8fYdGRikG~Upo35vDQ";
      window.location.href = redirectTo;
    };

    return {
      redirectToAnotherSite,
    };
  }
}
</script>



<style scoped>
.contact-us {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center; /* Изменим на center для центрирования кнопки в мобильной версии */
  flex-direction: column; /* По умолчанию делаем столбец, а в медиа-запросах переопределяем */
}

h1 {
  color: #4b5563; /* Светлый оттенок серого для лучшего сочетания */
  margin-bottom: 1rem; /* Отступ для отделения от кнопки */
  font-size: 2rem; /* Базовый размер шрифта */
  transition: color 0.3s, font-size 0.3s; /* Добавляем переход для цвета */
}

button {
  background: rgba(116, 112, 112, 0.85);
  backdrop-filter: blur(5px);
  color: white;
  border: none;
  padding: 1rem 2rem; /* Используем rem для лучшей адаптивности */
  text-transform: uppercase;
  font-size: 1rem; /* Размер шрифта в rem */
  border-radius: 10px; /* Увеличиваем скругление */
  cursor: pointer;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),
              -4px -4px 8px rgba(255, 255, 255, 0.7); /* Мягкие тени для неоморфизма */
  transition: all 0.3s ease; /* Плавные переходы для всех свойств */
}

button:hover {
  background: rgba(96, 94, 97, 0.85); /* Цвет при наведении */
  box-shadow: none; /* Убираем тени при наведении */
}

button:active {
  transform: scale(0.95); /* Меньше уменьшение, чтобы не было слишком резким */
}

/* Оптимизируем медиа-запросы */
@media (max-width: 1240px) {
  h1 {
    font-size: 1.8rem;
  }
  button {
    font-size: 0.875rem;
    padding: 0.75rem 1.5rem;
  }
}

@media (max-width: 1080px) {
  /* Нет необходимости менять flex-direction, так как он уже column */
}

@media (max-width: 720px) {
  h1 {
    font-size: 1.6rem;
  }
  button {
    font-size: 0.8rem;
    padding: 0.65rem 1.3rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.4rem;
  }
  button {
    font-size: 0.75rem;
    padding: 0.6rem 1.2rem;
  }
}

@media (max-width: 320px) {
  h1 {
    font-size: 1.2rem;
  }
  button {
    font-size: 0.7rem;
    padding: 0.5rem 1rem;
  }
}
</style>

