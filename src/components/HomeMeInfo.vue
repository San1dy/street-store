<template lang="pug">
.about-us-container
    .image-wrapper
      img.full-width-image(src="../assets/images/photo-1556637640-2c80d3201be8.jpeg", alt="")
    .content-column
      .text-wrapper
        h1.section-title
          strong О нас
        p.main-text Мы - ведущий интернет-магазин кроссовок, предлагающий широкий ассортимент моделей от лучших брендов.
        p.main-text Наша команда экспертов тщательно отбирает каждую пару, чтобы удовлетворить потребности и предпочтения наших клиентов.
        p.main-text Мы гордимся тем, что предлагаем только качественные и стильные кроссовки, которые помогут вам выделиться из толпы.
</template>

<script>
export default {
	name: 'HomeMeInfo',
}
</script>

<style scoped>

@font-face {
  font-family: 'MyCustomFont';
  src: url('../../fonts/groplet/Gropled-Bold.otf') format('truetype'),

}

.about-us-container {
  margin: 50px;
  background-color: #ffffff;
  border-radius: 20px;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1); /* Прозрачный белый фон */
  backdrop-filter: blur(5px); /* Размытие фона за элементом */
  padding: 15px; /* Внутренние отступы */
  display: flex;
  justify-content: space-between;
}

.image-wrapper {
  width: 50%;
	margin: auto;
}

.full-width-image {
  width: 100%;
  height: auto;
  border-radius: 20px;
}

.content-column {
  width: 50%;
}

.text-wrapper {
  padding: 20px;
}

.section-title {
  font-size: 25px;
  font-weight: bold;
  font-family: 'MyCustomFont', sans-serif;
}

.main-text {
  font-size: 18px;
  line-height: 1.5;
  font-family: 'MyCustomFont', sans-serif;
}


@media (max-width: 1080px) {
  .section-title {
    font-size: 20px;
  }

  .main-text {
    font-size: 14px;
  }
}

@media (max-width: 900px) {
  .section-title {
    font-size: 15px;
  }

  .main-text {
    font-size: 10px;
  }
}
@media (max-width: 900px) {
  .about-us-container {
    width: auto;
  flex-direction: column; /* Элементы теперь располагаются вертикально */
  align-items: center; /* Выравнивание элементов по центру по вертикали */
  justify-content: center; /* Выравнивание элементов по центру по горизонтали */

}
.image-wrapper {
  width: 100%;
	margin: auto;
}
.content-column {
  width: 100%;
}
}
</style>