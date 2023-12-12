<template lang="pug">
section.events
  .event
    img(src="../assets/images/photo-1617695103171-8f9c25f014c6.jpeg" alt="Распродажа")
    h3 Распродажа
    p.date 01.12.2023
    p.description Скидки до 50% на все кроссовки в нашем магазине.
    button Узнать
  .event
    img(src="../assets/images/photo-1592860986140-d77ede8b7116.jpeg" alt="Новая коллекция")
    h3 Новая коллекция
    p.date 15.12.2023
    p.description Представляем новую коллекцию кроссовок от лучших брендов.
    button Узнать
  .event
    img(src="../assets/images/photo-1595341888016-a392ef81b7de.jpeg" alt="Бесплатная доставка")
    h3 Бесплатная доставка
    p.date 31.12.2023
    p.description Бесплатная доставка при заказе от 5000₽.
    button Узнать
  .event
    img(src="../assets/images/photo-1608231387042-66d1773070a5.jpeg" alt="Скидка для студентов")
    h3 Скидка для студентов
    p.date 31.12.2023
    p.description Скидка 10% для всех студентов при предъявлении студенческого билета.
    button Узнать
</template>

<script>
export default {
  name: 'EventsSection',
  // Здесь можно добавить свойства данных или методы, если они нужны
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
