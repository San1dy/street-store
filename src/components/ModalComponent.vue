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
        span.new-price Цена: {{ product.price | currency }} ₽
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
  justify-content: center;
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
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  width: 50%;
  max-width: 700px;
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
  height: 75px; /* Высота устанавливается так, чтобы суммарно было равно высоте основного изображения */
  margin-bottom: 10px;
  cursor: pointer;
  object-fit: cover;
}

.image-selection.active {
  border: 2px solid #3498db;
}

.main-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.product-details {
  display: flex;
  flex-direction: column;
}

.product-name,
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
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.buy-button,
.favorite-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.buy-button {
  background-color: #27ae60;
  color: #fff;
}

.favorite-button {
  background-color: #2980b9;
  color: #fff;
}

.buy-button:hover,
.favorite-button:hover {
  opacity: 0.8;
}

.buy-button:active,
.favorite-button:active {
  opacity: 0.6;
}

.item-added-text {
  color: #2ecc71;
  font-size: 16px;
  margin-top: 10px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  width: 24px;
  height: 24px;
}
</style>