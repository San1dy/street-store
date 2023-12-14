<template lang="pug">
div
  FilterComponent(@filter-changed="applyFilters")
  .catalog
    h1 Каталог
    .products
      .product(v-for="item in displayedItems", :key="item.id")
        img(:src="item.image" , @click="openModal(item)")
        h2 {{ item.name }}
        span.price {{ item.price }} ₽
        p Пол: {{ item.floor }}
        p Размер: {{ item.size }}
        button(@click="addToCart(item)") Добавить в корзину
        p.item-added-text(v-if="item.itemAddedToCart") Товар добавлен в корзину
    button(v-if="showLoadMoreButton", @click="loadMore") Еще
  ProductModal(:product="selectedProduct", :isVisible="isModalVisible", @close="isModalVisible = false",  @add-to-cart="addToCart")
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
        return (!this.filters.gender || item.floor === this.filters.gender) &&
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
    this.$store.dispatch('addToCart', item);

    // Установите значение itemAddedToCart в true
    item.itemAddedToCart = true;

    // Используйте setTimeout для скрытия надписи через некоторое время
    setTimeout(() => {
      item.itemAddedToCart = false;
    }, 2000); // Скрыть надпись через 2 секунды (по желанию)
  }
    
  }
};
</script>

<style scoped>

.item-added-text {
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  background-color: #1b1b1b; 
  padding: 15px; 
  border-radius: 10px; 
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
  height: 300px;
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
  transition: transform 0.2s, background-color 0.2s;
}

button:hover {
  background-color: #c0392b;
}

button:active {
  transform: scale(0.95); /* Уменьшает размер кнопки при нажатии */
  background-color: #d35400; /* Меняет цвет фона при нажатии */
}
</style>