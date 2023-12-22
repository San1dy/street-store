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
export default {
  name: 'ContactInfo',
};
</script>

<style scoped>
.contacts {
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px;
}

.contact-item {
  transition: transform 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 0.5rem 2rem;
  box-shadow: 5px 5px 5px #605E61 ;
}

h1 {
  color: #000;
}

.contact-item:hover {
  transform: translateY(-10px);
}

.contact-item h2 {
  font-size: 18px;
  color: #000;
}

.contact-item p {
  font-size: 16px;
  color: #605E61;
}

@media (max-width: 1240px) {
  .contact-info {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1080px) {
  .contact-info {
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media (max-width: 720px) {
  .contact-info {
    grid-template-columns: repeat(1, 1fr); 
  }
}

@media (max-width: 480px) {
  .contact-info {
    grid-template-columns: repeat(1, 1fr); 
  }
}

@media (max-width: 320px) {
  .contact-info {
    grid-template-columns: repeat(1, 1fr); 
  }
}
</style>
