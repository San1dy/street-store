<template lang="pug">
nav.navigation-bar
  router-link.to-home(to="/")
    img.logo(
      :class="{ clicked: logoState.clicked }",
      :src="logoState.src", 
      alt="Логотип", 
      @mouseover="handleMouseOver", 
      @mouseleave="handleMouseLeave",
      @click="handleClick"
    )
  button.burger-button(@click="toggleMenu") ☰
  ul.navigation-links(:class="{ 'active': isMenuActive }")
    li(v-for="link in navLinks" :key="link.path")
      router-link(:to="link.path") {{ link.name }}
</template>

<script>
import { ref, reactive } from 'vue';
import logoDefault from '@/assets/images/5.svg';
import logoHover from '@/assets/images/4.svg';
import logoClickedImg from '@/assets/images/5.svg';

export default {
  name: 'AppHeader',
  setup() {
    const isMenuActive = ref(false);
    const navLinks = ref([
      { name: 'Главная', path: '/' },
      { name: 'Каталог', path: '/catalog' },
      { name: 'Контакты', path: '/contact' },
      { name: 'Корзина', path: '/corzina' }
    ]);
    
    const logoState = reactive({
      src: logoDefault,
      hovered: logoHover,
      clicked: logoClickedImg,
      isClicked: false
    });

    const toggleMenu = () => {
      isMenuActive.value = !isMenuActive.value;
    };

    const handleMouseOver = () => {
      logoState.src = logoState.hovered;
    };

    const handleMouseLeave = () => {
      logoState.src = logoState.isClicked ? logoState.clicked : logoDefault;
    };

    const handleClick = () => {
      logoState.isClicked = true;
      setTimeout(() => {
        logoState.isClicked = false;
      }, 300); 
    };

    return {
      isMenuActive,
      navLinks,
      logoState,
      toggleMenu,
      handleMouseOver,
      handleMouseLeave,
      handleClick
    };
  }
};
</script>






<style scoped>

h1, h2, p, a, li {
  font-family: 'MyCustomFont', sans-serif;
  color: #fff;
}

.navigation-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(252, 251, 251, 0.856);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 0.5rem 2rem;
  margin: 5px 10px 10px 10px;
  position: relative; 
  z-index: 25; 
}

a {
  text-decoration: none;
}

.logo {
  font-size: 30px;
  font-weight: bold;
  color: #BA1519;
  text-decoration: none;
  transition: transform 0.3s ease;
  width: 200px;
  height: 50px;
}

@keyframes clickAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}

.logo.clicked {
  animation: clickAnimation 0.5s ease;
}

.logo:active {
  transform: scale(0.9);
}
@media (max-width: 850px) {
  .logo {
    width: 150px; 
  }
}

@media (max-width: 720px) {
  .logo {
    width: 120px; 
  }
}

@media (max-width: 400px) {
  .logo {
    width: 100px; 
  }
}

.navigation-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.navigation-links li a {
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  padding: 10px 15px;
  border-radius: 10px;
  transition: color 0.2s, background-color 0.2s;
}

.navigation-links li a:hover {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  color:#fff;
}

.navigation-links li a:active {
  transform: scale(0.6);
}
.burger-button {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: #000000;
  cursor: pointer;
  z-index: 20; 
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
    background: rgba(168, 168, 168, 0.836); 
    border-radius: 20px;
    padding: 1rem;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    z-index: 15; 
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

