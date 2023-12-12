<template lang="pug">
section.contacts
  h1 Контакты
  .contact-info
    .contact-item
      h2 Телефон
      p +7 123 456-78-90
    .contact-item
      h2 Email
      p info@crosses.ru
    .contact-item
      h2 Адрес
      p Чебоксары
    .contact-item
      h2 Режим работы
      p Пн-Пт: 9:00-18:00
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
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.contact-item {
  background: #FFF;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-item h2 {
  font-size: 18px;
  color: #333;
}

.contact-item p {
  font-size: 16px;
  color: #666;
}
</style>
