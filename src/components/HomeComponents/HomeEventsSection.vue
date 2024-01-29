<template lang="pug">
section.events
  .event(v-for="(event, index) in events" :key="index")
    img.event-image(:src="event.image" :alt="event.alt")
    h3.event-title {{ event.title }}
    p.event-date {{ event.date }}
    p.event-description {{ event.description }}
</template>

<script setup>
import { ref } from 'vue';

const events = ref([
  {
    image: require('@/assets/images/photo-1617695103171-8f9c25f014c6.jpeg'),
    alt: "Распродажа",
    title: "Распродажа",
    date: "01.12.2023",
    description: "Скидки до 50% на все кроссовки в нашем магазине.",
  },
  {
    image: require('@/assets/images/photo-1592860986140-d77ede8b7116.jpeg'),
    alt: "Новая коллекция",
    title: "Новая коллекция",
    date: "15.12.2023",
    description: "Представляем новую коллекцию кроссовок от лучших брендов.",
  },
  {
    image: require('@/assets/images/photo-1595341888016-a392ef81b7de.jpeg'),
    alt: "Бесплатная доставка",
    title: "Бесплатная доставка",
    date: "31.12.2023",
    description: "Бесплатная доставка при заказе от 5000₽.",
  },
  {
    image: require('@/assets/images/photo-1608231387042-66d1773070a5.jpeg'),
    alt: "Скидка для студентов",
    title: "Скидка для студентов",
    date: "31.12.2023",
    description: "Скидка 10% для всех студентов при предъявлении студенческого билета.",
  },
]);
</script>


<style scoped>
.events {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  margin-top: 50px;
  max-width: 1200px;
  margin: 50px auto;
}

.event {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 7px 7px 14px #babecc,
              -7px -7px 14px #ffffff; 
  background: var(--main-bg-color); 
  height: 350px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover .event-description {
    max-height: 100px;
    padding: 20px;
  }
}

.event-image {
  width: 100%;
  height: 200px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 20px;
}

.event-description {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  text-align: center;
  color: var(--text-color);
  padding: 0 20px; 
}

.event-title, .event-date {
  color: var(--text-color); 
  margin-bottom: 10px;
  font-weight: 500; 
}

@media (max-width: 1110px) {
  .events {
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 10px;

  max-width: 900px;
  margin: 20px auto;
}

.event {
  padding: 10px;
  border-radius: 20px;
  height: 270px;
  &:hover .event-description {
    max-height: 100px;
    padding: 20px;
  }
}

.event-image {
  width: 100%;
  height: 150px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 20px;
}

.event-description {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 0;
  padding: 0 20px; 
}

.event-title, .event-date {
  margin-bottom: 10px;
  font-weight: 500; 
  font-size: 1rem;
}
}

@media (max-width: 920px) {
  .events {
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding: 10px;

  max-width: 700px;
  margin: 20px auto;
}

.event {
  padding: 15px;
  border-radius: 20px;
  height: 330px;
  &:hover .event-description {
    max-height: 100px;
    padding: 20px;
  }
}

.event-image {
  width: 100%;
  height: 200px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 20px;
}

.event-description {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 0;
  padding: 0 20px; 
}

.event-title, .event-date {
  margin-bottom: 10px;
  font-weight: 500; 
  font-size: 1rem;
}
}

@media (max-width: 720px) {
  .events {
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding: 10px;

  max-width: 500px;
  margin: 20px auto;
}

.event {
  padding: 10px;
  border-radius: 20px;
  height: 270px;
  &:hover .event-description {
    max-height: 100px;
    padding: 20px;
  }
}

.event-image {
  width: 100%;
  height: 160px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 20px;
}

.event-description {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 0;
  padding: 0 20px; 
}

.event-title, .event-date {
  margin-bottom: 10px;
  font-weight: 500; 
  font-size: 1rem;
}
}

@media (max-width: 550px) {
  .events {
  gap: 20px;
  padding: 10px;

  max-width: 440px;
  margin: 20px auto;
}

.event {
  padding: 10px;
  border-radius: 20px;
  height: 250px;
  &:hover .event-description {
    max-height: 100px;
    padding: 20px;
  }
}

.event-image {
  width: 100%;
  height: 160px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 20px;
}

.event-description {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 0;
  padding: 0 20px; 
}

.event-title, .event-date {
  margin-bottom: 10px;
  font-weight: 500; 
  font-size: 0.8rem;
}
}

@media (max-width: 480px) {
  .events {
  gap: 15px;
  padding: 10px;

  max-width: 370px;
  margin: 20px auto;
}

.event {
  padding: 10px;
  border-radius: 20px;
  height: 200px;
  &:hover .event-description {
    max-height: 100px;
    padding: 20px;
  }
}

.event-image {
  width: 100%;
  height: 130px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 20px;
}

.event-description {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 0;
  padding: 0 20px; 
}

.event-title, .event-date, .event-description {
  margin-bottom: 10px;
  font-weight: 500; 
  font-size: 0.6rem;
}
}
@media (max-width: 320px) {
  .events {
  gap: 10px;
  padding: 10px;

  max-width: 300px;
  margin: 10px auto;
}

.event {
  padding: 10px;
  border-radius: 20px;
  height: 170px;
  &:hover .event-description {
    max-height: 100px;
    padding: 20px;
  }
}

.event-image {
  width: 100%;
  height: 90px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 20px;
}

.event-description {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 0;
  padding: 0 20px; 
}

.event-title, .event-date, .event-description {
  margin-bottom: 10px;
  font-weight: 500; 
  font-size: 0.5rem;
}
}
</style>



