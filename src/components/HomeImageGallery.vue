<template lang="pug">
section.home-image-gallery
  h2 Галерея
  p Посмотрите наши лучшие модели кроссовок в действии.
  carousel(:itemsToShow="3", :autoplay="true", :autoplayTimeout="5000", :loop="true")
    slide(v-for="image in images", :key="image.id")
      img(:src="image.src", :alt="image.alt")
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'HomeImageGallery',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      // Изображения для слайдера
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
      // Настройки для слайдера
    };
  },
};
</script>

<style scoped>
.home-image-gallery {
  text-align: center;
}

img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
}
</style>
