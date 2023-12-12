<template lang="pug">
footer.footer
  .container
    .footer-section
      h3.section-title О нас
      ul.section-links
        li О компании
        li Наша команда
        li Контакты
        li Отзывы
        li Вакансии
    .footer-section
      h3.section-title Каталог
      ul.section-links
        li Мужские
        li Женские
        li Детские
        li Спортивные
        li Повседневные
    .footer-section
      h3.section-title Помощь
      ul.section-links
        li Доставка
        li Оплата
        li Возврат
        li Гарантии
        li FAQ
    .footer-section
      h3.section-title Подписка
      ul.section-links
        li Получать новости
        li Следить за акциями
        li Быть в курсе событий
        li Получать скидки
        li Участвовать в розыгрышах

  .container
    .footer-actions
      button.action-button Войти
      button.action-button.outline Регистрация
    .footer-social
      a(href="#") 
        i(class="fab fa-facebook-f") VK
      a(href="#") 
        i(class="fab fa-twitter") X
      a(href="#") 
        i(class="fab fa-instagram") VK
      a(href="#") 
        i(class="fab fa-linkedin-in") X
  .footer-bottom
      p © 2023 Кроссовки онлайн
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
.footer {
  background-color: #fff; 
  border-radius: 20px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  padding: 10px; 
  display: flex;
  flex-direction: column; 
  align-items: center; 
	width: 70%;
	margin: auto;
	margin-top: 50px;
	margin-bottom: 10px;
}
.container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 60%;
}

.footer-section {
  margin-bottom: 10px; 
}

.section-title {
  color: #333; 
  margin-bottom: 10px; 
}

.section-links {
  list-style: none; 
  padding: 0; 
}

.section-links li {
  color: #666; 
  margin-bottom: 5px; 
}

.footer-actions {
  display: flex;
  gap: 10px; 
}

.action-button {
  padding: 10px 20px; 
  border: none; 
  border-radius: 20px; 
  color: white;
  background-color: #e06c6c; 
  cursor: pointer;
}

a {
  text-decoration: none;
}

.action-button.outline {
  color: #e06c6c; 
  background-color: transparent; 
  border: 1px solid #e06c6c; 
}

.footer-social {
  display: flex;
  gap: 10px; 
}

.footer-social a {
  color: #e06c6c; 
  font-size: 1.5em; 
}

.footer-bottom {
  text-align: center; 
  color: #666; 
  width: 100%; 
  margin-top: 20px; 
}
</style>
