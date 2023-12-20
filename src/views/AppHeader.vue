<template lang="pug">
nav.navigation-bar
  router-link.to-home(to="/home")
    .logo STREET STORE
  button.burger-button(@click="toggleMenu") ☰
  ul.navigation-links(:class="{ 'active': menuActive }")
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
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'MyCustomFont';
  src: url('../../fonts/groplet/Gropled-Bold.otf') format('truetype');
}

h1, h2, p, a, li {
  font-family: 'MyCustomFont', sans-serif;
  color: #fff;
}

.navigation-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 0.5rem 2rem;
  margin: 20px;
  position: relative; /* Позиционирование относительно */
  z-index: 25; 
}

a {
  text-decoration: none;
}

.logo {
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.logo:hover {
  color: #C6A153;
}

.navigation-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.navigation-links li a {
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  padding: 10px 15px;
  border-radius: 10px;
  transition: color 0.2s, background-color 0.2s;
}

.navigation-links li a:hover {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  color:#C6A153;
}

.burger-button {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  z-index: 20; /* Убедитесь, что кнопка находится над другими элементами */
}

@media (max-width: 850px) {
  .logo {
    font-size: 20px;
  }
}

@media (max-width: 720px) {
  .burger-button {
    display: block;
  }

  .navigation-links {
    display: none;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9); /* Полупрозрачный белый фон */
    border-radius: 20px;
    padding: 1rem;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    z-index: 15; /* Повысить z-index, чтобы меню было над другими элементами */
  }

  .navigation-links.active {
    display: flex;
    transform: translateY(0);
    top: 100%;
  }
}

@media (max-width: 400px) {
  .burger-button {
    font-size: 1.5rem;
  }
}

@media (max-width: 320px) {
  .burger-button {
    font-size: 1.2rem;
  }
}
</style>
