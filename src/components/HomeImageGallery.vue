<template lang="pug">
section.home-image-gallery
  h2 Галерея
  p Посмотрите наши лучшие модели кроссовок в действии.
  div.slider
    div.slides-container(ref="slidesContainer")
      div.slide(v-for="image in images", :key="image.id")
        img(:src="image.src", :alt="image.alt")
    div.navigation-dots
      span.dot(
        v-for="index in images.length", 
        :key="index", 
        :class="{ 'active': currentSlideIndex === index - 1 }", 
        @click="moveToSlide(index - 1)"
      )
</template>

<script>
export default {
  name: 'HomeImageGallery',
  data() {
    return {
      images: [
        { id: 1, src: require('@/assets/images/photo-1623684225794-a8f1f5037f5c.jpeg'), alt: 'Описание 1' },
        { id: 2, src: require('@/assets/images/photo-1532561685579-890e8f61456a.jpeg'), alt: 'Описание 2' },
        { id: 3, src: require('@/assets/images/photo-1515955656352-a1fa3ffcd111.jpeg'), alt: 'Описание 3' },
        { id: 4, src: require('@/assets/images/photo-1596936273467-b3af0c82af7a.jpeg'), alt: 'Описание 4' },
        { id: 5, src: require('@/assets/images/photo-1552066344-2464c1135c32.jpeg'), alt: 'Описание 5' },
        { id: 6, src: require('@/assets/images/photo-1549298916-f52d724204b4.jpeg'), alt: 'Описание 6' },
        { id: 7, src: require('@/assets/images/photo-1524532787116-e70228437bbe.jpeg'), alt: 'Описание 7' },
        { id: 8, src: require('@/assets/images/photo-1600185365926-3a2ce3cdb9eb.jpeg'), alt: 'Описание 8' },
      ],
      currentSlideIndex: 0,
      slideInterval: null,
    };
  },
  mounted() {
    this.startAutoSlide();
    window.addEventListener('resize', this.updateSlider);
  },
  beforeUnmount() {
    clearInterval(this.slideInterval);
    window.removeEventListener('resize', this.updateSlider);
  },
  methods: {
    startAutoSlide() {
      this.slideInterval = setInterval(this.nextSlide, 3000);
    },
    nextSlide() {
      if (this.currentSlideIndex < this.images.length - 1) {
        this.currentSlideIndex++;
      } else {
        this.currentSlideIndex = 0;
      }
      this.updateSlider();
    },
    updateSlider() {
      const slideWidth = this.$refs.slidesContainer.offsetWidth;
      this.$refs.slidesContainer.style.transform = `translateX(-${this.currentSlideIndex * slideWidth}px)`;
    },
    moveToSlide(index) {
      clearInterval(this.slideInterval);
      this.currentSlideIndex = index;
      this.updateSlider();
      this.startAutoSlide();
    },
  },
};
</script>

<style scoped>
.home-image-gallery {
  text-align: center;
}

.slider {
  position: relative;
  overflow: hidden;
  width: 70%; /* Занимать всю доступную ширину */
  margin: auto;
  border-radius: 20px;
}

.slides-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%; /* Каждый слайд занимает всю ширину контейнера */
  box-sizing: border-box; /* Включаем padding и border в общую ширину */
}

.slide img {
  width: 100%;
  height: 100%; /* Высота картинки такая же, как и у слайда */
  object-fit: cover; /* Подгоняем изображение по размеру блока */
}

.navigation-dots {
  text-align: center;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
}

.dot {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: grey;
  margin: 0 5px;
  cursor: pointer;
}

h2 {
  font-size: 35px; /* Начальный размер текста */
  color:#C6A153;
}

/* Создаем медиазапрос для адаптивной верстки */
@media screen and (max-width: 768px) {
  h2 {
    font-size: 25px; /* Уменьшаем размер текста при ширине экрана менее 768px */
  }
}

@media screen and (max-width: 480px) {
  h2 {
    font-size: 15px; /* Еще меньший размер текста при ширине экрана менее 480px */
  }
}

p {
  font-size: 20px; /* Начальный размер текста */
  color:#fff;
}

/* Создаем медиазапрос для адаптивной верстки */
@media screen and (max-width: 768px) {
  p {
    font-size: 15px; /* Уменьшаем размер текста при ширине экрана менее 768px */
  }
}

@media screen and (max-width: 480px) {
  p {
    font-size: 10px; /* Еще меньший размер текста при ширине экрана менее 480px */
  }
}
@media screen and (max-width: 768px) {
  .dot {
    width: 10px;
  height: 10px;
  }
}

@media screen and (max-width: 480px) {
  .dot {
    width: 5px;
  height: 5px;
  }
}

.dot.active {
  background-color: white;
}
</style>