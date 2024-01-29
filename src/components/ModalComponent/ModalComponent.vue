<template lang="pug">
.modal(v-if="isVisible", @click.self="closeModal")
  .modal-content
    .image-section
      img.main-image(:src="product.image")
      .image-selection-container
        img.image-selection(v-for="(image, index) in product.images", :key="index", :src="image", @click="changeMainImage(image)", :class="{ active: product.image === image }")
    .product-details
      h1.product-name {{ product.name }}
      p.brand Бренд: {{ product.brand }}
      p.floor Пол: {{ product.floor }}
      p.color Цвет: {{ product.color }}
      p.size Размеры: {{ product.size.join(', ') }}
      p.product-description Описание: {{ product.description }}
      .price-container
        span.new-price Цена: {{ product.price }} ₽
      .action-buttons
        button.buy-button(@click="openExternalLink(product.buy)") Купить
        button.favorite-button(@click="addToCart(product)", v-if="showAddToCartButton") Добавить в корзину
    p.item-added-text(v-if="product.itemAddedToCart && showAddToCartButton") Товар добавлен в корзину
    img.close-button(@click="closeModal", :src="require('@/assets/images/Close.svg')")
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  product: Object,
  isVisible: Boolean,
  showAddToCartButton: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['change-image', 'close', 'add-to-cart']);

const changeMainImage = (image) => {
  emit('change-image', image);
};

const closeModal = () => {
  emit('close');
};

const addToCart = (product) => {
  emit('add-to-cart', product);
};

const openExternalLink = (url) => {
  window.open(url, '_blank');
};
</script>


<style scoped>

:root {
  --main-bg-color: #EFF2F9; /* светло-серый фон */
  --accent-color: #4E84D9; /* синий акцент для кнопок и ссылок */
  --text-color: #333; /* темно-серый для основного текста */
  --detail-text-color: #666; /* светло-серый для дополнительного текста */
  --card-bg-color: #ffffff; /* белый фон для карточек */
  --button-hover-color: rgba(78, 132, 217, 0.8); /* прозрачный синий для наведения */
}


.modal {
  display: flex;
  justify-content:center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #ffffff;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  width: 80%;
  max-width: 700px;
  margin: 1rem;
  transition: width 0.3s ease;
  box-shadow: 7px 7px 14px #babecc,
              -7px -7px 14px #ffffff;
}

.row {
  display: flex;
  flex-direction: row;
}

.image-selection-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
}

.image-selection {
  width: 60px;
  height: 75px;
  margin-bottom: 10px;
  cursor: pointer;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: inset 1px 1px 2px #babecc,
              inset -1px -1px 2px #ffffff;
}

.image-selection.active {
  border: 2px solid var(--accent-color);
}

.main-image {
  margin: 0;
  width: 100%;
  height: 330px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 4px 4px 6px #babecc,
              -4px -4px 6px #ffffff;
}
.item-added-text {
  position: fixed; 
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%); 
  background-color: rgba(0, 0, 0, 0.8); 
  color: #fff; 
  padding: 1rem 2rem; 
  border-radius: 10px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); 
  z-index: 2000; 
  transition: all 0.3s ease; 
}
.product-details {
  display: flex;
  flex-direction: column;
  color: var(--text-color);
}

.product-name {
  color: #000000;
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.brand,
.floor,
.color,
.size,
.product-description {
  margin-bottom: 10px;
  color: var(--text-color); 
}

.price-container {
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;
}

.new-price {
  font-size: 24px;
  font-weight: bold;
  color: var(--accent-color);
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.buy-button,.favorite-button {
  border: none;
  background: var(--main-bg-color); 
  color: var(--text-color); 
  padding: 1rem; 
  border-radius: 15px; 
  box-shadow: 4px 4px 8px #babecc,
              -4px -4px 8px #ffffff; 
  font-family: 'Lato', sans-serif; 
  font-weight: 500; 
  font-size: 1rem;
  transition: all 0.3s ease;
}

.buy-button,.favorite-button:hover {
  cursor: pointer;
  background: var(--accent-color); 
  color: rgb(10, 10, 10); 
  box-shadow: inset 1px 1px 2px #babecc,
              inset -1px -1px 2px #ffffff; 
}

.buy-button,.favorite-button:active {
  box-shadow: 4px 4px 6px 0 rgba(255,255,255,.3),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
              inset -4px -4px 6px 0 rgba(255,255,255,.2),
              inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
}

.close-button {
  position: absolute;
  top: -25px;
  right: -25px;
  cursor: pointer;
  width: 24px;
  height: 24px;
}

@media (max-width: 1980px) {
  .modal-content, .image-selection-container {
    flex-direction: row;
  }
  .row {
    flex-direction: column-reverse;
  }
  .image-selection-container {
    flex-wrap: wrap;
    max-width: 400px;
    margin-bottom: 20px;
  }
  .image-selection {
    width: 20%;
    margin-right: 2%;
  }
  .main-image {
    width: 300px;
    height: 250px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .modal-content {
    padding: 15px;
  }
}

@media (max-width: 900px) {
  .modal-content {
    padding: 20px; 
  }

  .image-selection {
    width: 50px; 
    height: 63px;
  }

  .main-image {
    height: 250px; 
  }

  .product-name, .brand, .floor, .color, .size, .product-description {
    font-size: 0.9rem; 
  }

  .new-price {
    font-size: 20px; 
  }
  .image-selection-container {
    max-width: 400px;
    margin-bottom: 0px;
  }
  .buy-button, .favorite-button {
    font-size: 0.9rem;
  }
}

@media (max-width: 800px) {
  .modal-content {
    padding: 15px;
    width: 70%;
  }

  .main-image {
    height: 180px;
    width: 300px;
  }

  .product-name, .brand, .floor, .color, .size, .product-description {
    font-size: 0.6rem; 
  }

  .new-price {
    font-size: 0.6rem;
  }

  .buy-button, .favorite-button {
    font-size: 0.6rem;
    padding: 0.5rem;; 
  }
}

@media (max-width: 720px) {
  .modal-content {
    padding: 15px;
    width: 50%;
    flex-direction: column;
  }
  .image-section {
    width: 100%;
  }
  .product-details {
    width: 100%;
  }
  .main-image {
    height: 180px;
    width: 100%;
  }

  .product-name, .brand, .floor, .color, .size, .product-description {
    font-size: 0.6rem; 
    margin-top: 7px;
    margin-bottom: 0px;
  }

  .new-price {
    font-size: 0.6rem;
    margin-top: 20px;
  }

  .buy-button, .favorite-button {
    font-size: 0.6rem;
    padding: 0.5rem;; 
  }

  .close-button {
  top: -15px;
  right: -15px;
  width: 15px;
  height: 15px;
}

.image-selection {
  width: 40px;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 10px;
}
}


@media (max-width: 480px) {
  .modal-content {
    padding: 15px;
    width: 50%;
    flex-direction: column;
  }
  .image-section {
    width: 100%;
  }
  .product-details {
    width: 100%;
  }
  .main-image {
    height: 100px;
    width: 100%;
  }

  .product-name, .brand, .floor, .color, .size, .product-description {
    font-size: 0.4rem; 
    margin-top: 7px;
    margin-bottom: 0px;
  }

  .new-price {
    font-size: 0.6rem;
    margin-top: 20px;
  }

  .buy-button, .favorite-button {
    font-size: 0.5rem;
    padding: 0.5rem;; 
  }

  .close-button {
  top: -15px;
  right: -15px;
  width: 15px;
  height: 15px;
}

.image-selection {
  width: 30px;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 10px;
}
}
</style>
