<template lang="pug">
section.content#id
  .container-fluid
    img.slider-image(:src="computedImageSrc", :alt="`Image ${activeImageIndex + 1}`")
    .navigation-panel
      span.navigation-dot(v-for="(image, index) in images" :key="index" :class="{ active: activeImageIndex === index }" @click="setActiveImage(index)")

</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import image1 from '@/assets/images/1.jpg';
import image2 from '@/assets/images/2.jpg';
import image3 from '@/assets/images/3.jpg';
import image4 from '@/assets/images/4.jpg';
import logoImg from '@/assets/images/5.svg';

export default {
  name: "HomeFone",
  setup() {
    const logo = ref(logoImg);
    const description = ref("Лучший выбор кроссовок для всех любителей спорта и стиля");
    const images = ref([image1, image2, image3, image4]);
    const activeImageIndex = ref(0);
    const slideInterval = ref(null);

    const computedImageSrc = computed(() => images.value[activeImageIndex.value]);

    const nextSlide = () => {
      activeImageIndex.value = (activeImageIndex.value + 1) % images.value.length;
    };

    const setActiveImage = (index) => {
      activeImageIndex.value = index;
    };

    const startSlideshow = () => {
      slideInterval.value = setInterval(nextSlide, 10000);
    };

    const stopSlideshow = () => {
      clearInterval(slideInterval.value);
    };

    onMounted(() => {
      startSlideshow();
    });

    onBeforeUnmount(() => {
      stopSlideshow();
    });

    return { 
      logo: logo.value,
      description: description.value,
      images: images.value,
      activeImageIndex: activeImageIndex.value,
      computedImageSrc,
      setActiveImage
    };
  }
};
</script>


  
<style scoped>
.slider-image {
  width: 100%;
  height: auto;
  border-radius: 20px;
  margin-bottom: 20px;
}

.navigation-panel {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.navigation-dot {
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.navigation-dot.active {
  background-color: #717171;
}



.content {
  z-index: 1;
  background-size: cover;
  background-position: center;
  height: 1000px; 
}

.container-fluid {
  position: relative;
  height: 100%; 
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  margin: -70px 0px 0 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.logo {
  position: absolute;
  font-family: 'MyCustomFont', sans-serif;
  font-size: 5rem; 
  color: #BA1519;
  margin: 0;
  left: 70px;
  top: 50px;
}

.text {
  position: absolute;
  left: 40px;
  top: 400px;
  font-family: 'MyCustomFont', sans-serif;
  font-size: 2rem; 
  color: #605E61;
  max-width: 40%; 
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
}
.just-do-it {
  position: absolute;
  z-index: 10; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 5rem; 
  color: #D3D3D3; 
  letter-spacing: -5px;
  text-transform: uppercase; 
  text-shadow: 3px 3px 0 #FFFFFF, 
                -1px -1px 0 #FFFFFF, 
                1px -1px 0 #FFFFFF,
                -1px 1px 0 #FFFFFF,
                1px 1px 0 #FFFFFF;
}

@media (max-width: 480px) {
  .just-do-it {
    font-size: 2rem; 
    letter-spacing: -2px; 
  }
}

@media (max-width: 1240px) {
  .title {
    font-size: 3rem; 
  }

  .text {
    font-size: 1.2rem; 
    left: 40px;
    top: 300px;
  }

  .content {
  height: 700px; 
}
}
@media (max-width: 800px) {
  .title {
    font-size: 2rem; 
    left: 40px;
    top: 230px;
    opacity: 0;
  }

  .text {
    font-size: 1rem; 
    left: 40px;
    top: 330px;
    opacity: 0;
  }

  .content {
  height: 500px; 
}
}

@media (max-width: 480px) {
  .content {
  height: 250px; 
}

  .container-fluid {
    max-width: 100%; 
  }

  .title {
    font-size: 1rem; 
  }

  .text {
    font-size: 0.5rem;
 

  }
}
@keyframes blurFadeIn {
  0% {
    filter: blur(12px);
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    filter: blur(8px);
    opacity: 0.5;
    transform: scale(1.05);
  }
  100% {
    filter: blur(0);
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.logo {
  animation: blurFadeIn 3s ease forwards, pulse 2s ease infinite 3s;
  will-change: filter, opacity, transform;
}

@media (max-width: 320px) {
  .content {
  height: 150px; 
}
}
</style>
