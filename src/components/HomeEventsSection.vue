<template lang="pug">
section.events
  .event(v-for="(event, index) in events" :key="index")
    img(:src="event.image" :alt="event.alt")
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
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.event {
  flex-basis: calc(25% - 20px); 
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #fff; 
}

.event img {
  width: 100%; 
  height: 300px;
  border-radius: 10px; 
  margin-bottom: 20px;
  object-fit: cover;
}

.event h3 {
  margin-bottom: 10px;
  color: #333; 
}

.event .date {
  color: #666; 
}

.event .description {
  margin-bottom: 10px;
  color: #666; 
  height: 70px;
}

.event button {
  padding: 10px 20px;
  background-color: #e74c3c; 
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.event button:hover {
  background-color: #c0392b; 
}
</style>
