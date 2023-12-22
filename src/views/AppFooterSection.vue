<template lang="pug">
footer.footer
  //.container
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
  .container
    .footer-bottom
        p © 2023 Онлайн магазин Street Store
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
.footer {
  border-radius: 20px; 
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
  color: #fff; 
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
  color: #605E61; 
  width: 100%; 
  margin-top: 20px; 
}


@media (max-width: 1080px) {
  .events {
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media (max-width: 480px) {
  .events {
    grid-template-columns: 1fr;
  }
}
</style>

