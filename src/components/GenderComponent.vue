<template lang="pug">
.gallery
  .gallery-item(v-for="item in galleryItems" :key="item.id", @click="selectFloor(item.floor)")
    img(:src="item.imgSrc")
    .caption
      h2 {{ item.label }}
</template>

<script>
export default {
  name: 'GenderComponent',
  data() {
    return {
      galleryItems: [
        { id: 1, floor: 'Женское', label: 'Женское', imgSrc: 'https://www.sneakerstore.ru/upload/resize_cache/iblock/2c3/570_750_2/2c324233a8d7025e35bbb10823995fbf.jpg', link: '#' },
        { id: 2, floor: 'Мужское', label: 'Мужское', imgSrc: 'https://www.sneakerstore.ru/upload/resize_cache/iblock/bb4/570_750_2/bb425b9c7a7d7b7029cd10daec654601.jpg', link: '#' }
      ]
    };
  },
  methods: {
    selectFloor(floor) {
      this.$emit('floor-selected', floor);
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'MyCustomFont';
  src: url('../../fonts/groplet/Gropled-Bold.otf') format('truetype'),

}
.gallery {
  display: flex;
  justify-content: space-between;
	width: 70%;
	margin: auto;
	margin-top: 50px;

}

.gallery-item {
	font-family: 'MyCustomFont';
  width: 40%; /* Изначально было 48%, теперь уменьшаем в два раза */
  position: relative;
  cursor: pointer; /* Изменяем курсор, чтобы показать интерактивность элемента */
  overflow: hidden; /* Чтобы анимация оставалась внутри блока */
  transition: transform 0.5s ease; /* Добавляем плавный переход для анимации */

	background: rgba(255, 255, 255, 0.1); /* Прозрачный белый фон */
  backdrop-filter: blur(10px); /* Размытие фона за элементом */
  border-radius: 20px; /* Скругление углов */
  padding: 0.5rem 2rem; /* Внутренние отступы */
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5); /* Тень для эффекта воздушности */
}

.gallery-item:hover {
  transform: scale(1.05); /* Увеличиваем масштаб при наведении */
}

.gallery-item img {
  width: 100%;
	height: 600px;
  display: block;
	object-fit: cover;
  transition: transform 0.5s ease; /* Добавляем плавный переход для анимации */
	border-radius: 20px; 
}

img {
	height: 600px;
	margin-top: 20px;
	object-fit: cover;
  width: 100%;
	border-radius: 20px; 
}


.caption h2 {
  font-size: 2em; 
	text-align: center;
}

</style>
