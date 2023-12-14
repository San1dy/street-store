<template lang="pug">
footer.footer
  .container
    .footer-section
      h3.section-title О нас
      ul.section-links
        li
          router-link(to="/home") О компании
        li
          router-link(to="/contact") Контакты
        li
          a(href="https://www.avito.ru/user/44e47fa5016ee18631ac7c90bdce2e10/profile/all/odezhda_obuv_aksessuary?id=3547881447&iid=3547881447&src=messenger&page_from=from_item_messenger&sellerId=44e47fa5016ee18631ac7c90bdce2e10") Отзывы
    .footer-section
      h3.section-title Каталог
      ul.section-links
        li
          router-link(to="/catalog") Мужские
        li
          router-link(to="/catalog") Женские
    .footer-section
      h3.section-title Помощь
      ul.section-links
        li
          a(href="https://support.avito.ru/partitions/293") Доставка
        li
          a(href="https://support.avito.ru/partitions/63") Оплата
        li
          a(href="https://support.avito.ru/partitions/344") Возврат
    .footer-section
      h3.section-title Подписка
      ul.section-links
        li
          a(href="https://www.avito.ru/user/44e47fa5016ee18631ac7c90bdce2e10/profile/all/odezhda_obuv_aksessuary?id=3547881447&iid=3547881447&src=messenger&page_from=from_item_messenger&sellerId=44e47fa5016ee18631ac7c90bdce2e10") Подписаться на нас

  .container
    h3.section-title Наши страницы: 
      ul.footer-social
          li
            a(href="https://vk.com")
            img(src="src/", alt="Вконтакте")
          li
            a(href="https://web.telegram.org")
              img(src="https://www.example.com/path/to/your-telegram-logo.png", alt="Телеграм")
          li
            a(href="https://www.instagram.com")
              img(src="https://www.example.com/path/to/your-instagram-logo.png", alt="Инстаграм")
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
