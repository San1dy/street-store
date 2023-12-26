<template lang="pug">
.modal(v-if="isVisible", @click.self="closeModal")
  .modal-content
    .row
      .image-selection-container
        img.image-selection(v-for="(image, index) in product.images", :key="index", :src="image", @click="changeMainImage(image)", :class="{ active: product.image === image }")
      img.main-image(:src="product.image")
    .product-details
      h1.product-name {{ product.name }}
      p.brand Бренд: {{ product.brand }}
      p.floor Пол: {{ product.floor }}
      p.color Цвет: {{ product.color }}
      p.size Размеры: {{ product.size.join(', ') }}
      p.product-description Описание:  {{ product.description }}
      .price-container
        span.new-price Цена: {{ product.price  }} ₽
      .action-buttons
        button.buy-button(@click="openExternalLink(product.buy)") Купить
    img.close-button(@click="closeModal", :src="require('@/assets/images/Close.svg')")
</template>

<script>
export default {
  props: {
    product: Object,
    isVisible: Boolean
  },
  methods: {
    changeMainImage(image) {
      this.$emit('change-image', image);
    },
    closeModal() {
      this.$emit('close');
    },
    openExternalLink(url) {
      window.open(url, '_blank');
    }
  }
};
</script>



<style scoped>
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
  padding: 20px;
  background-color: rgba(2, 2, 2, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  width: 80%;
  max-width: 700px;
  transition: width 0.3s ease;
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
}

.image-selection.active {
  border: 2px solid #BA1519;
}

.main-image {
  width: 100%;
  height: 330px;
  object-fit: cover;
  border-radius: 10px;
}

.product-details {
  display: flex;
  flex-direction: column;
  color: #ffffff;
}

.product-name {
  color: #e57b7b;
  margin-bottom: 10px;
}

.brand,
.floor,
.color,
.size,
.product-description {
  margin-bottom: 10px;
}

.price-container {
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;
}

.new-price {
  font-size: 24px;
  font-weight: bold;
  color: #e57b7b;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.buy-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: #BA1519;
  color: #fff;
}

.buy-button:hover {
  opacity: 0.8;
}

.buy-button:active {
  opacity: 0.6;
  transform: scale(0.95);
}

.close-button {
  position: absolute;
  top: -25px;
  right: -25px;
  cursor: pointer;
  width: 24px;
  height: 24px;
}

@media (max-width: 1080px) {
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

@media (max-width: 720px) {
  .main-image, .image-selection {
    width: 100%;
  }
  .modal-content {
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .product-details {
    font-size: 14px;
  }
  .action-buttons button {
    padding: 8px 15px;
  }
}

@media (max-width: 320px) {
  .modal-content {
    width: 95%;
    padding: 10px;
  }
  .close-button {
    width: 20px;
    height: 20px;
  }
}
</style>
