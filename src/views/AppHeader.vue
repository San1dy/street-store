<template lang="pug">
nav.navigation-bar
  router-link(to="/home")
    .logo STREET-STORE
  ul.navigation-links
    li
      router-link(to="/home") Главная 
    li
      router-link(to="/catalog") Каталог
    li
      router-link(to="/contact") Контакты

    li
      router-link(to="/corzina") Корзина
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>

.router-link-active, .router-link-exact-active, .router-link-active:hover, .router-link-exact-active:hover {
  text-decoration: none;
}
.navigation-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px 50px; 
  text-decoration: none;
}

.to-home,.to-catalog {
  text-decoration: none; /* Убирает подчеркивание */
}
.logo {
  font-size: 30px; 
  font-weight: bold; 
  color:#e06c6c;
  list-style: none; 
  text-decoration: none;
}

.navigation-links {
  list-style: none; 
  display: flex;
  gap: 20px; 
  margin:0;
  padding: 0;
}

.navigation-links li a {
  text-decoration: none; 
  color: #e06c6c; 
  font-size: 30px; 
}

.navigation-links li a:hover {
  color: #555; 
}

.sign-up-button a {
  background-color: #e06c6c; 
  color: #fff; 
  padding: 10px 20px; 
  border-radius: 5px; 
  text-decoration: none; 
  margin-right: 20px;
}

.sign-up-button a:hover {
  background-color: #444; 
}
.navigation-bar a {
  text-decoration: none; /* Убирает подчеркивание для всех ссылок внутри .navigation-bar */
}
</style>

