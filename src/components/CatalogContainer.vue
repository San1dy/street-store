<template lang="pug">
div
  FilterComponent(@filter-changed="applyFilters")
  .catalog
    h1 Каталог
    .products
      .product(v-for="item in displayedItems", :key="item.id")
        img(:src="item.image" , @click="openModal(item)")
        h2 {{ item.name }}
        span.price {{ item.price }}₽
        p Пол: {{ item.pol }}
        p Размер: {{ item.raz }}
        button(@click="addToCart(item)") Добавить в корзину
        p.item-added-text(v-if="item.itemAddedToCart") Товар добавлен в корзину
    button(v-if="showLoadMoreButton", @click="loadMore") Еще
  ProductModal(:product="selectedProduct", :isVisible="isModalVisible", @close="isModalVisible = false", @change-image="handleImageChange")
</template>

<script>
import FilterComponent from './FilterComponent.vue';
import ProductModal from './ProductModal.vue';
import { products } from '@/data/products.js';

export default {
  name: 'CatalogContainer',
  components: {
    ProductModal,
    FilterComponent
  },
  data() {
    return {
      selectedProduct: null,
      isModalVisible: false,
      items: products,
      visibleItems: 12,
      loadMoreStep: 4,
      filters: {
        gender: '',
        maxPrice: null
      }
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => {
        return (!this.filters.gender || item.pol === this.filters.gender) &&
               (!this.filters.maxPrice || item.price <= this.filters.maxPrice);
      });
    },
    displayedItems() {
      return this.filteredItems.slice(0, this.visibleItems);
    },
    showLoadMoreButton() {
      return this.visibleItems < this.filteredItems.length;
    }
  },
  methods: {
    openModal(product) {
    this.selectedProduct = product;
    this.isModalVisible = true;
  },
  handleImageChange(newImage) {
    // Обновляем изображение для выбранного продукта без мутации prop
    this.selectedProduct = { ...this.selectedProduct, image: newImage };
  },
    loadMore() {
      this.visibleItems += this.loadMoreStep;
    },
    applyFilters(newFilters) {
      this.filters = newFilters;
      this.visibleItems = 12; 
    },
    addToCart(item) {
      // Меняем состояние товара, чтобы показать, что он добавлен в корзину
      item.itemAddedToCart = true;
      // Вы можете также добавить код для фактического добавления товара в корзину здесь
      // Например, добавить этот товар в массив корзины или отправить запрос на сервер
      // Для целей этого примера просто меняем состояние товара
      setTimeout(() => {
        item.itemAddedToCart = false; // Спустя какое-то время скрываем сообщение
      }, 3000); // Скрыть сообщение через 3 секунды (время может быть настроено по вашему усмотрению)
    }

  }
};
</script>

<style scoped>


.item-added-text {
  position: absolute;
  top: 50%; /* Размещение текста по вертикали посередине */
  left: 50%; /* Размещение текста по горизонтали посередине */
  transform: translate(-50%, -50%); /* Центрирование текста по центру блока */
  background-color: #1b1b1b; /* Прозрачный черный фон */
  padding: 15px; /* Отступы вокруг текста */
  border-radius: 10px; /* Скругление углов */
  text-align: center;
}
.catalog {
  text-align: center;
  width: 80%;
  margin: auto;
}

p{ 
  text-align: left;
  margin-left: 5px;
}
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
}

.product {
  width: calc(25% - 20px); 
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  transition: transform 0.3s ease;
  position: relative;
}

.product:hover {
  transform: translateY(-10px);
}

.product img {
  width: 100%;
  border-radius: 10px;
}

.product h2 {
  color: #333;
  font-size: 20px;
  margin-top: 15px;
}

.product .price {
  font-size: 24px;
  color: #555;
  margin: 10px 0;
}

.product p {
  color: #666;
  font-size: 16px;
}

button {
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  background-color: #e74c3c;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 10px;
}

button:hover {
  background-color: #c0392b;
}
</style>