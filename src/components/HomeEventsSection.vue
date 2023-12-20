<template lang="pug">
section.events
  .event(v-for="(event, index) in events", :key="index", :class="{ 'expanded': event.showDescription }")
    img(:src="event.image", :alt="event.alt")
    h3 {{ event.title }}
    p.date {{ event.date }}
    p.description(v-if="event.showDescription") {{ event.description }}
    button(@click="toggleDescription(index)") {{ event.showDescription ? 'Скрыть' : 'Узнать' }}
</template>

<script>
export default {
  name: 'EventsSection',
  data() {
    return {
      events: [
        {
          image: require('@/assets/images/photo-1617695103171-8f9c25f014c6.jpeg'),
          alt: "Распродажа",
          title: "Распродажа",
          date: "01.12.2023",
          description: "Скидки до 50% на все кроссовки в нашем магазине.",
          showDescription: false,
        },
        {
          image: require('@/assets/images/photo-1592860986140-d77ede8b7116.jpeg'),
          alt: "Новая коллекция",
          title: "Новая коллекция",
          date: "15.12.2023",
          description: "Представляем новую коллекцию кроссовок от лучших брендов.",
          showDescription: false,
        },
        {
          image: require('@/assets/images/photo-1595341888016-a392ef81b7de.jpeg'),
          alt: "Бесплатная доставка",
          title: "Бесплатная доставка",
          date: "31.12.2023",
          description: "Бесплатная доставка при заказе от 5000₽.",
          showDescription: false,
        },
        {
          image: require('@/assets/images/photo-1608231387042-66d1773070a5.jpeg'),
          alt: "Скидка для студентов",
          title: "Скидка для студентов",
          date: "31.12.2023",
          description: "Скидка 10% для всех студентов при предъявлении студенческого билета.",
          showDescription: false,
        },
      ],
    };
  },
  methods: {
    toggleDescription(index) {
      // Инвертируем значение showDescription только для выбранной карточки
      this.events[index].showDescription = !this.events[index].showDescription;
    },
  },
};
</script>

<style scoped>
.events {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Четыре колонки по умолчанию */
  grid-gap: 20px; /* Отступы между элементами сетки */
  padding: 20px; /* Внутренние отступы сетки для создания пространства по краям */
  margin-top: 50px; /* Отступ сверху для всей секции событий */
}

.event {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  color: #000;
  transition: transform 0.3s ease;
  max-width: 300px; /* Максимальная ширина карточки */
  margin: 0 auto; /* Центрирование карточки в колонке */
  min-width: 250px; /* Минимальная ширина карточки */
  max-width: 300px; /* Максимальная ширина карточки */
  height: auto;
}

.event img {
  width: 100%; /* Процентное значение для поддержания пропорций */
  height: 200px; /* Фиксированная высота для одинакового размера всех изображений */
  border-radius: 10px;
  object-fit: cover; /* Гарантирует, что изображения будут покрывать весь элемент img */
  margin-bottom: 20px;
}

.event h3, .event .date {
  color: #000;
  margin-bottom: 10px;
}

.event .description {
  color: #000;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.event button {
  padding: 8px 16px;
  background-color: #e74c3c;
  border: none;
  border-radius: 20px; /* Увеличенный радиус для закругления кнопки */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 70%; /* Уменьшенная ширина кнопки до 70% от ширины карточки */
  margin-top: auto; /* Выравнивание кнопки внизу карточки */
}

.event button:hover {
  background-color: #c0392b;
}

/* Медиазапросы для адаптивности */
@media (max-width: 1080px) {
  .events {
    grid-template-columns: repeat(2, 1fr); /* Две колонки для экранов среднего размера */
  }
}

@media (max-width: 480px) {
  .events {
    grid-template-columns: 1fr; /* Одна колонка для маленьких экранов */
  }
}
</style>


