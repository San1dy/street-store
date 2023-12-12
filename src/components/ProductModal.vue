<template lang="pug">
.modal(v-if="isVisible", @click.self="closeModal")
  .modal-content
    img.main-image(:src="product.image")
    .image-selection
      img.selection-image(v-for="image in product.images", :src="image", @click="changeMainImage(image)", :class="{ active: product.image === image }")
    .product-details
      h1.product-name {{ product.name }}
      p.product-description {{ product.description }}
      .price-container
        span.new-price {{ product.price | currency }}₽
        span.old-price(strike) {{ product.oldPrice | currency }}₽
      .action-buttons
        button.buy-button Купить
        button.favorite-button Добавить в избранное
    button.close-button(@click="closeModal")
      img.close-icon(:src="require('@/assets/images/Close.svg')")
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    isVisible: {
      type: Boolean,
      default: false
    }
  },
	methods: {
  closeModal() {
    this.$emit('close');
  },
  changeMainImage(image) {
    // Генерация события с новым изображением, родительский компонент должен обработать это
    this.$emit('change-image', image);
  }
}
}
</script>


<style scoped>
.modal {
  /* Общие стили фона модального окна */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  /* Стили контейнера содержимого */
  background: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 80%;
  max-width: 500px;
}

.main-image {
  /* Стили главного изображения */
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 10px;
}

.image-selection {
  /* Стили выбора изображения */
  display: flex;
  overflow-x: auto;
  margin-bottom: 10px;
}

.selection-image {
  /* Стили для миниатюрных изображений */
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 10px;
  border: 1px solid transparent;
  cursor: pointer;
}

.selection-image.active {
  /* Стили для активного изображения */
  border-color: blue;
}

.product-details {
  /* Стили для деталей продукта */
  text-align: left;
}

.product-name {
  /* Стили для названия продукта */
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 0.5em;
}

.product-description {
  /* Стили для описания продукта */
  margin-bottom: 1em;
  color: #666;
}

.price-container {
  /* Стили для контейнера цены */
  display: flex;
  align-items: baseline;
  margin-bottom: 1em;
}

.new-price {
  /* Стили для новой цены */
  font-size: 1.5em;
  font-weight: bold;
  color: #4CAF50;
  margin-right: 10px;
}

.old-price {
  /* Стили для старой цены */
  font-size: 1em;
  color: #999;
  text-decoration: line-through;
}

.action-buttons {
  /* Стили для кнопок действий */
  display: flex;
  gap: 10px;
}

.buy-button, .favorite-button {
  /* Общие стили для кнопок */
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1em;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.buy-button {
  /* Стили для кнопки купить */
  background-color: #2196F3;
  color: white;
}

.buy-button:hover {
  background-color: darken(#2196F3, 10%);
}

.favorite-button {
  /* Стили для кнопки добавить в избранное */
  background-color: #E91E63;
  color: white;
}

.favorite-button:hover {
  background-color: darken(#E91E63, 10%);
}

.close-icon {
  /* Стили для изображения крестика */
  width: 24px; /* Укажите размер, который вам нужен */
  height: 24px;
  position: absolute;
  top: -30px;
  right: -30px;
  cursor: pointer;
}


</style>