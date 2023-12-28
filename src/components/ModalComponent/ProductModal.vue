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
        button.favorite-button(@click="addToCart(product)") Добавить в корзину
    p.item-added-text(v-if="product.itemAddedToCart") Товар добавлен в корзину
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
    addToCart(product) {
      product.itemAddedToCart = true;
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
p{
  color:#ffffff;
}
h1{
  color:#030000;
}
span{
  color:#050000;
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
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: 10px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.6),
              7px 7px 20px 0px rgba(0,0,0,.3),
              4px 4px 5px 0px rgba(0,0,0,.3);
  outline: none;
  background: rgb(207, 84, 84); 
  background: linear-gradient(0deg, rgb(252, 16, 16) 0%, rgb(238, 96, 96) 100%);
  text-decoration: none;
}

.buy-button {
  background-color: #BA1519;
  color: #fff;
  font-size: 15px;
  
}

.favorite-button {
  background-color: #BA1519;
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
 
button:active {
  transform: scale(0.95);
}
.item-added-text {
  text-align: center;
  background-color: #020202;
  border-radius: 10px;
  position:absolute;
  color: #ffffff;
  font-size: 30px;
  width: 400px;
  top:50%;
  left:20%;
  padding: 15px;
}

@media (max-width: 1240px) {
  .modal-content {
    width: 90%;
  }
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
    margin-right: 20px ;
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

.close-button {
  position: absolute;
  top: -25px;
  right: -25px;
  cursor: pointer;
  width: 24px;
  height: 24px;
}
</style>