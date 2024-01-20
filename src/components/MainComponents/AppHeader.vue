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
  .hamburger(:class="{ 'is-active': isMenuActive }", @click="toggleMenu")
    .hamburger__container
      .hamburger__inner
      .hamburger__hidden
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
        handleMouseLeave();
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

.hamburger {
  padding: 15px;
  cursor: pointer;
  display: none;
  overflow: hidden;
  background-color: transparent;
}
.hamburger__container {
  width: 36px;
  height: 24px;
  position: relative;
}
.hamburger:hover .hamburger__inner {
  transform: translate(-51px, 50%);
  opacity: 0;
}
.hamburger:hover .hamburger__inner::before, .hamburger:hover .hamburger__inner::after {
  transform: translate(102px, 0);
  opacity: 0;
}
.hamburger.is-active .hamburger__inner {
  display: none;
}
.hamburger__inner {
  width: 100%;
  height: 2px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  transition-property: transform, opacity;
  transition-timing-function: ease;
  transition-duration: 0.4s;
  top: 50%;
  transform: translate(5px, -50%);
  opacity: 1;
}
.hamburger__inner::before, .hamburger__inner::after {
  width: 100%;
  height: 2px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  transition-property: transform, opacity;
  transition-timing-function: ease;
  transition-duration: 0.4s;
  content: "";
  opacity: 1;
  transform: translate(-5px, 0);
}
.hamburger__inner::before {
  top: -13px;
}
.hamburger__inner::after {
  top: 13px;
}
.hamburger:hover .hamburger__hidden {
  opacity: 1;
  transform: translate(0, -50%);
}
.hamburger:hover .hamburger__hidden::before, .hamburger:hover .hamburger__hidden::after {
  opacity: 1;
  transform: translate(0, 0);
}
.hamburger.is-active .hamburger__hidden {
  opacity: 1;
  transform: rotate(45deg);
}
.hamburger.is-active .hamburger__hidden::before {
  transform: translate(0, 13px) rotate(90deg);
  transform-origin: center;
}
.hamburger.is-active .hamburger__hidden::after {
  transform-origin: center;
  transform: translate(0, -13px) rotate(0);
}
.hamburger__hidden {
  opacity: 0;
  width: 100%;
  height: 2px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  transition-property: transform, opacity;
  transition-timing-function: ease;
  transition-duration: 0.4s;
  background-color: red;
  top: 50%;
  transform: translate(51px, -50%);
}
.hamburger__hidden::before, .hamburger__hidden::after {
  width: 100%;
  height: 2px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  transition-property: transform, opacity;
  transition-timing-function: ease;
  transition-duration: 0.4s;
  background-color: red;
  content: "";
  transform: translate(102px, 0);
}
.hamburger__hidden::before {
  top: -13px;
}
.hamburger__hidden::after {
  top: 13px;
}
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
    width: 150px; /* Уменьшаем логотип */
  }

  .hamburger__container {
    width: 30px; /* Уменьшаем контейнер бургера */
    height: 20px; /* Уменьшаем высоту контейнера бургера */
  }
}

@media (max-width: 720px) {
  .logo {
    width: 120px; /* Дальнейшее уменьшение логотипа */
  }

  .hamburger {
    display: block; /* Показываем иконку бургера */
  }

  .hamburger__container {
    width: 25px; /* Ещё меньше для контейнера бургера */
    height: 18px; /* Ещё меньше для высоты контейнера бургера */
  }

  .navigation-links {
    /* ... */
  }
}

@media (max-width: 400px) {
  .logo {
    width: 100px; /* Ещё меньше для логотипа */
  }

  .hamburger__container {
    width: 20px; /* Ещё меньше для контейнера бургера */
    height: 16px; /* Ещё меньше для высоты контейнера бургера */
  }

  .burger-button {
    font-size: 1.5rem; /* Уменьшаем размер шрифта кнопки бургера */
  }
}

@media (max-width: 320px) {
  .burger-button {
    font-size: 1.2rem; /* Дальнейшее уменьшение размера шрифта кнопки бургера */
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

