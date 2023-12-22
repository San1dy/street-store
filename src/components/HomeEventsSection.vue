<template lang="pug">
section.events
  .event(v-for="(event, index) in events", :key="index", :class="{ 'expanded': event.showDescription }")
    img.event-image(:src="event.image", :alt="event.alt")
    h3.event-title {{ event.title }}
    p.event-date {{ event.date }}
    p.event-description(v-if="event.showDescription") {{ event.description }}
    button.toggle-button(@click="toggleDescription(index)") {{ event.showDescription ? 'Скрыть' : 'Узнать' }}
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
    toggleDescription(selectedIndex) {
      this.events.forEach((event, index) => {
        event.showDescription = index === selectedIndex ? !event.showDescription : false;
      });
    },
  },
};
</script>

<style scoped>
button:active {
  transform: scale(0.95);
}
.events {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  margin-top: 50px;
  max-width: 1200px; 
  margin: 50px auto 0; 
}

.event {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(8, 8, 8, 0.74);
  background: rgba(255, 255, 255, 0.623);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative; 
  height: 350px; 
}

.event-image {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 20px;
}
.event-description {
  position: absolute; 
  left: 0;
  right: 0;
  bottom: 50px;
  background-color: rgba(255, 255, 255, 0.9); 
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.event-title, .event-date {
  color: #000;
  margin-bottom: 10px;
}
.event.expanded .event-description {
  max-height: 100px;
  padding: 20px; 
}

.toggle-button {
  padding: 8px 16px;
  background-color: #BA1519;
  border: none;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 70%;
  margin-top: auto;
}

.toggle-button:hover {
  background-color: #f80509;
}

@media (max-width: 1024px) {
  .events {
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media (max-width: 768px) {
  .events {
    grid-template-columns: 1fr; 
  }
}
</style>



