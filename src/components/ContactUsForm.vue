<template lang="pug">
section.contact-us
  h1 Свяжитесь с нами
  form#contact-form(@submit="redirectToAnotherSite")

    .input-group
      button(type="submit") Перейти в диалог
</template>

<script>
export default {
  methods: {
    redirectToAnotherSite(event) {
      // Отменяем стандартное действие отправки формы
      event.preventDefault();
      
      // Здесь вы можете указать URL другого сайта
      const redirectTo = "https://www.avito.ru/profile/messenger/channel/u2u-ezsL8fYdGRikG~Upo35vDQ"; // Замените на желаемый URL
      
      // Перенаправляем пользователя на другой сайт
      window.location.href = redirectTo;
    }
  }
}
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
  background-color: #e74c3c; 
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
