<template lang="pug">
section.contacts
  h1 Контакты
  .contact-info
    .contact-item(v-for="contact in contacts" :key="contact.id")
      h2 {{ contact.title }}
      p {{ contact.value }}
</template>

<script setup>
import { ref } from 'vue';

const contacts = ref([
  { id: 1, title: 'Телефон', value: '+7 953 011-10-35' },
  { id: 2, title: 'Email', value: 'obivan266@gmail.com' },
  { id: 3, title: 'Адрес', value: 'Чебоксары' },
  { id: 4, title: 'Режим работы', value: 'Пн-Пт: 10:00-18:00' }
]);
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
  grid-template-columns: repeat(4, 1fr); 
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
  font-size: 2.5rem; 
  margin-bottom: 1rem; 
  margin-top: 0rem;
}


.contact-item:hover {
  transform: translateY(-10px);
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.15),
              -6px -6px 12px rgba(255, 255, 255, 0.8);
}

.contact-item h2 {
  font-size: 1.25rem; 
  color: #333;
  margin-bottom: 0.5rem; 
}

.contact-item p {
  font-size: 1rem; 
  color: #6b7280; 
}



@media (max-width: 1200px) {
  .contact-info {
    gap: 1rem; 
  }

  h1 {
  font-size: 2rem; 
  margin-bottom: 0.8rem; 
}

.contact-item h2 {
  font-size: 1rem; 
  margin-bottom: 0.3rem; 
}

.contact-item p {
  font-size: 0.7rem; 
}

.contact-item {
  border-radius: 20px;
  padding: 1rem;
}
}

@media (max-width: 890px) {
  .contact-info {
    gap: 0.5rem; 
  }

  h1 {
  font-size: 1.7rem; 
  margin-bottom: 0.4rem; 
}

.contact-item h2 {
  font-size: 0.7rem; 
  margin-bottom: 0.2rem; 
}

.contact-item p {
  font-size: 0.5rem; 
}

.contact-item {
  border-radius: 20px;
  padding: 0.5rem;
}
}

@media (max-width: 600px) {
  .contact-info {
    gap: 0.3rem; 
  }

  h1 {
  font-size: 1.3rem; 
  margin-bottom: 0.2rem; 
}

.contact-item h2 {
  font-size: 0.5rem; 
  margin-bottom: 0.1rem; 
}

.contact-item p {
  font-size: 0.3rem; 
}

.contact-item {
  border-radius: 20px;
  padding: 0.3rem;
}
}

@media (max-width: 600px) {
  .contact-info {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.3rem; 
  }

  h1 {
  font-size: 1.3rem; 
  margin-bottom: 0.5rem; 
}

.contact-item h2 {
  font-size: 0.5rem; 
  margin-bottom: 0.1rem; 
}

.contact-item p {
  font-size: 0.3rem; 
}

.contact-item {
  border-radius: 20px;
  padding: 0.3rem;
}
}

</style>
