<template lang="pug">
.modal(v-if="isVisible", @click.self="closeModal")
  .modal-content
    img.main-image(:src="product.image")
    .image-selection
      img.selection-image(v-for="image in product.images", :src="image", @click="changeMainImage(image)", :class="{ active: product.image === image }")
    .product-details
      h1.product-name {{ product.name }}
      p.brand Бренд: {{ product.brand }}
      p.floor Пол: {{ product.floor }}
      p.color Цвет: {{ product.color }}
      p.material Материал: {{ product.material }}
      p.season Сезон:  {{ product.season }}
      p.size  Размер: {{ product.size }}
      p.country Страна:  {{ product.country }}
      p.product-description Описание:  {{ product.description }}
      .price-container
        span.new-price Цена: {{ product.price | currency }} ₽
      .action-buttons
        button.buy-button(@click="openExternalLink(product.buy)") Купить
        button.favorite-button(@click="addToCard(product)") Добавить в корзину
    p.item-added-text(v-if="product.itemAddedToCart") Товар добавлен в корзину
    button.close-button(@click="closeModal")
      img.close-icon(:src="require('@/assets/images/Close.svg')")
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
    addToCard(product) {
      product.itemAddedToCart = true; // Устанавливаем флаг для конкретного товара
      this.$emit('add-to-cart', product);
    },
    openExternalLink(url) {
      window.open(url, '_blank');
    }
  }
};
</script>


<style scoped>
.modal {
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
  background: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 80%;
  max-width: 500px;
}

.main-image {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 10px;
}

.image-selection {
  display: flex;
  overflow-x: auto;
  margin-bottom: 10px;
}

.selection-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 10px;
  border: 1px solid transparent;
  cursor: pointer;
}

.selection-image.active {
  border-color: blue;
}

.product-details {
  text-align: left;
}

.product-name {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 0.5em;
}

.product-description {
  margin-bottom: 1em;
  color: #666;
}

.price-container {
  display: flex;
  align-items: baseline;
  margin-bottom: 1em;
}

.new-price {
  font-size: 1.5em;
  font-weight: bold;
  color: #4CAF50;
  margin-right: 10px;
}

.old-price {
  font-size: 1em;
  color: #999;
  text-decoration: line-through;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.buy-button, .favorite-button {
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1em;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.buy-button {
  background-color: #2196F3;
  color: white;
}

.buy-button:hover {
  background-color: darken(#2196F3, 10%);
}

.favorite-button {
  background-color: #E91E63;
  color: white;
}

.favorite-button:hover {
  background-color: darken(#E91E63, 10%);
}

.buy-button:hover, .favorite-button:hover {
  background-color: #1976D2; 
}

.buy-button:active, .favorite-button:active {
  background-color: #0D47A1;
}
.close-icon {
  width: 24px; 
  height: 24px;
  position: absolute;
  top: -30px;
  right: -30px;
  cursor: pointer;
}

img.main-image {
  width: 250px;
  height: 300px;
  object-fit: cover; 
  margin:auto;
  border-radius: 20px;
  display: block;
}

</style>