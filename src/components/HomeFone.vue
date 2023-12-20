<template lang="pug">
section.content#id
  .container-fluid
    h1.title(:class="{'active': active}")
      strong {{ title }}
    p.text {{ description }}
</template>

<script>
export default {
  name: "HomeFone",
  data() {
    return {
      title: "STREET STORE",
      description: "Лучший выбор кроссовок для всех любителей спорта и стиля",
      active: true,
      link: "/products",
    };
  },
};
</script>
  
<style scoped>
@font-face {
  font-family: 'MyCustomFont';
  src: url('../../fonts/groplet/Gropled-Bold.otf') format('truetype');
}

.content {
  
  z-index: 1;
  background-size: cover;
  background-position: center center;
  height: 900px; /* Устанавливаем начальную высоту */
}

.container-fluid {
  position: relative;
  width: 90%;
  height: 100%; /* Используем всю высоту content */
  background-image: url(../assets/images/1667675290_9-sportishka-com-p-dinamovskie-krossovki-oboi-10.jpg);
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; /* Центрируем текст */
}

.title {
  position: absolute;
  font-family: 'MyCustomFont', sans-serif;
  font-size: 5rem; /* Начальный размер шрифта для заголовка */
  color: #C6A153;
  margin: 0;
  left: 40px;
  top:0;
}

.text {
  position: absolute;
  left: 0px;
  top:100px;
  font-family: 'MyCustomFont', sans-serif;
  font-size: 1.5rem; /* Начальный размер шрифта для текста */
  color: #fff;
  max-width: 50%; /* Максимальная ширина текста */
}

/* Адаптивность */
@media (max-width: 1240px) {
  .title {
    font-size: 3rem; /* Уменьшенный размер шрифта для заголовка на мобильных */
  }

  .text {
    font-size: 1.2rem; /* Уменьшенный размер шрифта для текста на мобильных */
    max-width: 70%; /* Увеличенная максимальная ширина текста для мобильных */
  }

  .content {
  height: 700px; /* Устанавливаем начальную высоту */
}
}
@media (max-width: 800px) {
  .title {
    font-size: 2rem; /* Уменьшенный размер шрифта для заголовка на мобильных */
  }

  .text {
    font-size: 1rem; /* Уменьшенный размер шрифта для текста на мобильных */
    max-width: 70%; /* Увеличенная максимальная ширина текста для мобильных */
  }

  .content {
  height: 500px; /* Устанавливаем начальную высоту */
}
}

@media (max-width: 480px) {
  .content {
  height: 250px; /* Устанавливаем начальную высоту */
}

  .container-fluid {
    max-width: 100%; /* Используем всю ширину экрана */
  }

  .title {
    font-size: 1rem; /* Еще меньше для очень маленьких экранов */
  }

  .text {
    font-size: 0.5rem; /* Меньше для очень маленьких экранов */
    max-width: 90%; /* Еще больше текста на экране */
  }
}

@media (max-width: 320px) {
  .content {
  height: 150px; /* Устанавливаем начальную высоту */
}
}
</style>
