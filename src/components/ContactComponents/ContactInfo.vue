<template lang="pug">
section.contacts
  h1 Контакты
  .contact-info
    .contact-item
      h2 Телефон
      p +7 953 011-10-35
    .contact-item
      h2 Email
      p obivan266@gmail.com
    .contact-item
      h2 Адрес
      p Чебоксары
    .contact-item
      h2 Режим работы
      p Пн-Пт: 10:00-18:00
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactInfo',
});
</script>

<style scoped>
.contacts {
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.1),
              -8px -8px 16px rgba(255, 255, 255, 0.6);
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); /* Автоматическая адаптация количества столбцов */
  gap: 2rem;
}

.contact-item {
  transition: transform 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1),
              -4px -4px 8px rgba(255, 255, 255, 0.7);
  cursor: pointer;
}

h1 {
  color: #4b5563;
  font-size: 2.5rem; /* Размер заголовка */
  margin-bottom: 1rem; /* Отступ после заголовка */
  margin-top: 0rem;
}

.contact-item:hover {
  transform: translateY(-10px);
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.15),
              -6px -6px 12px rgba(255, 255, 255, 0.8);
}

.contact-item h2 {
  font-size: 1.25rem; /* Увеличенный размер для подзаголовков */
  color: #333;
  margin-bottom: 0.5rem; /* Отступ после подзаголовка */
}

.contact-item p {
  font-size: 1rem; /* Размер текста */
  color: #6b7280; /* Цвет текста */
}

/* Удаляем дублирующиеся медиа-запросы, оставляем только нужные */

@media (max-width: 720px) {
  .contact-info {
    grid-template-columns: 1fr; /* Все элементы в один столбец */
    gap: 1rem; /* Уменьшенный отступ между элементами */
  }
}
</style>
