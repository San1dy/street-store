<template lang="pug">
section.contact-us
  h1 Свяжитесь с нами
  form#contact-form(@submit="submitForm")
    .input-group
      input(type="text" placeholder="Имя" required v-model="contact.name")
    .input-group
      input(type="email" placeholder="Email" required v-model="contact.email")
    .input-group
      textarea(placeholder="Сообщение" required v-model="contact.message")
    .input-group
      button(type="submit") Отправить
</template>

<script>
export default {
  name: 'ContactUsForm',
  data() {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Обработка данных формы
    }
  }
};
</script>

<style scoped>
.contact-us {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.input-group {
  margin-bottom: 20px;
	max-width: 700px;
	min-width: 500px;
}

input, textarea {
  width: 100%;
  padding: 15px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
}

button {
  background-color: #e74c3c; /* Цвет кнопки */
  color: white;
  border: none;
  padding: 15px 30px;
  text-transform: uppercase;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: darken(#e74c3c, 10%);
}
</style>
