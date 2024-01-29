<template lang="pug">
.gallery
  .gallery-item(v-for="item in galleryItems", :key="item.id", @click="selectFloor(item.floor)")
    img(:src="item.imgSrc")
    .caption
      h2 {{ item.label }}
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const galleryItems = ref([
  { id: 1, floor: 'Женское', label: 'Женское', imgSrc: 'https://www.sneakerstore.ru/upload/resize_cache/iblock/2c3/570_750_2/2c324233a8d7025e35bbb10823995fbf.jpg', link: '#' },
  { id: 2, floor: 'Мужское', label: 'Мужское', imgSrc: 'https://www.sneakerstore.ru/upload/resize_cache/iblock/bb4/570_750_2/bb425b9c7a7d7b7029cd10daec654601.jpg', link: '#' }
]);

const router = useRouter();

function selectFloor(floor) {
  router.push({ name: 'CatalogFloor', params: { floor } });
}
</script>

<style scoped>

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 50px auto;
  gap: 20px;
  max-width: 85%;
}

.gallery-item {
  max-width: 500px;
  max-height: 700px;
  font-family: 'MyCustomFont';
  flex: 1 1 30%;
  position: relative;
  cursor: pointer;
  transition: transform 0.5s ease;
  border-radius: 15px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  padding: 20px; 
}
.gallery-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9); 
  box-shadow: 10зч 10px 10px 10px rgba(255, 255, 255, 0.74);
  opacity: 0; 
  transition: opacity 0.5s ease;
}
.gallery-item:hover::before {
  opacity: 1;
}
.gallery-item:hover {
  transform: scale(1.03);
}

.gallery-item:active {
  transform: scale(0.95);
}
.gallery-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.5s ease;
  border-radius: 10px; 
}

.caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  text-align: center;
  transition: opacity 0.5s ease;
  opacity: 0; 
}

.gallery-item:hover .caption {
  opacity: 1; 
}

.caption h2 {
  color: #fff;
  background-color: transparent;
  padding: 10px;
  margin: 0;
  border-radius: 10px;
}

.gallery-item:hover .caption {
  display: block; 
}

@media (max-width: 1080px) {
  .gallery-item {
    flex: 1 1 45%;
  }
}

@media (max-width: 720px) {
  .gallery-item {
    flex: 1 1 60%;
  }
}

@media (max-width: 480px) {
  .gallery {
    display: grid;
    grid-template-columns: 1fr;
  }
  .gallery-item {
    flex: none;
  }
}

@media (max-width: 320px) {
  .caption h2 {
    font-size: 1.2em;
  }
}
</style>
