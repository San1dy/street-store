<template lang="pug">
section.home-image-gallery
  h2 Галерея
  p Посмотрите наши лучшие модели кроссовок в действии.
  .slider
    .slides-container(ref="slidesContainer")
      .slide(v-for="image in images", :key="image.id")
        img(:src="image.src", :alt="image.alt")
    .navigation-dots
      span.dot(
        v-for="index in images.length", 
        :key="index", 
        :class="{ 'active': currentSlideIndex === index - 1 }", 
        @click="moveToSlide(index - 1)"
      )
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'HomeImageGallery',
  setup() {
    const images = ref([
      { id: 1, src: require('@/assets/images/photo-1623684225794-a8f1f5037f5c.jpeg'), alt: 'Описание 1' },
      { id: 2, src: require('@/assets/images/photo-1532561685579-890e8f61456a.jpeg'), alt: 'Описание 2' },
      { id: 3, src: require('@/assets/images/photo-1515955656352-a1fa3ffcd111.jpeg'), alt: 'Описание 3' },
      { id: 4, src: require('@/assets/images/photo-1596936273467-b3af0c82af7a.jpeg'), alt: 'Описание 4' },
      { id: 5, src: require('@/assets/images/photo-1552066344-2464c1135c32.jpeg'), alt: 'Описание 5' },
      { id: 6, src: require('@/assets/images/photo-1549298916-f52d724204b4.jpeg'), alt: 'Описание 6' },
      { id: 7, src: require('@/assets/images/photo-1524532787116-e70228437bbe.jpeg'), alt: 'Описание 7' },
      { id: 8, src: require('@/assets/images/photo-1600185365926-3a2ce3cdb9eb.jpeg'), alt: 'Описание 8' },
    ]);
    const currentSlideIndex = ref(0);
    const slideInterval = ref(null);
    const slidesContainer = ref(null);

    const startAutoSlide = () => {
      slideInterval.value = setInterval(nextSlide, 3000);
    };

    const nextSlide = () => {
      if (currentSlideIndex.value < images.value.length - 1) {
        currentSlideIndex.value++;
      } else {
        currentSlideIndex.value = 0;
      }
      updateSlider();
    };

    const updateSlider = () => {
      const slideWidth = slidesContainer.value.offsetWidth;
      slidesContainer.value.style.transform = `translateX(-${currentSlideIndex.value * slideWidth}px)`;
    };

    const moveToSlide = (index) => {
      clearInterval(slideInterval.value);
      currentSlideIndex.value = index;
      updateSlider();
      startAutoSlide();
    };

    onMounted(() => {
      startAutoSlide();
      window.addEventListener('resize', updateSlider);
    });

    onBeforeUnmount(() => {
      clearInterval(slideInterval.value);
      window.removeEventListener('resize', updateSlider);
    });

    return {
      images,
      currentSlideIndex,
      slidesContainer,
      moveToSlide
    };
  }
};
</script>

<style scoped>
.home-image-gallery {
  text-align: center;
  max-width: 1240px;
  margin: auto;
}

.slider {
  position: relative;
  overflow: hidden;
  width: 90%;
  height: 50vw; 
  max-height: 600px; 
  margin: 20px auto;
  border-radius: 20px;
}

.slides-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%; 
}

.slide img {
  width: 100%;
  height: auto;
  object-fit: cover; 
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
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: grey;
  margin: 0 5px;
  cursor: pointer;
}

.dot.active {
  background-color: #BA1519;
}

h2, p {
  color: #605E61;
  margin: 20px 0;
}


@media (max-width: 1240px) {
  h2, p {
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1240 - 320)));
  }
}

@media (max-width: 1080px) {
  .slider {
    height: 45vw;
    max-height: 500px;
  }
}

@media (max-width: 720px) {
  .slider {
    height: 40vw;
    max-height: 400px;
  }
}

@media (max-width: 480px) {
  .slider {
    height: 35vw;
    max-height: 300px;
  }

  .dot {
    width: 10px;
    height: 10px;
  }
}

@media (max-width: 320px) {
  .slider {
    height: 30vw;
    max-height: 250px;
  }

  .dot {
    width: 8px;
    height: 8px;
  }
}
</style>
