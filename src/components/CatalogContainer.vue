<template lang="pug">
div
  FilterComponent(:min-price-limit="minItemPrice", :max-price-limit="maxItemPrice", @filter-changed="applyFilters")
  .catalog
    h1 Каталог
    .products(v-if="displayedItems.length")
      .product(v-for="item in displayedItems", :key="item.id")
        img(:src="item.image", @click="openModal(item)")
        h2 {{ item.name }}
        span.price {{ item.price }} ₽
        button(@click="addToCart(item)") Добавить в корзину
        p.item-added-text(v-if="item.itemAddedToCart") Товар добавлен в корзину
    p.no-items(v-else) Нет товаров, соответствующих выбранным фильтрам.
    PaginationComponent(
  :total-items="filteredItems.length"
  :items-per-page="itemsPerPage"
  :current-page.sync="currentPage"
  @page-changed="changePage"
)
  ProductModal(:product="selectedProduct", :isVisible="isModalVisible", @close="isModalVisible = false", @add-to-cart="addToCart", @change-image="handleImageChange" )
</template>

<script>
import FilterComponent from './FilterComponent.vue';
import ProductModal from './ProductModal.vue';
import PaginationComponent from './PaginationComponent.vue';
import { products } from '@/data/products.js';

export default {
  name: 'CatalogContainer',
  components: {
    ProductModal,
    FilterComponent,
    PaginationComponent
  },
  props: {
    selectedFloor: String
  },
  data() {
    return {
      selectedProduct: null,
      isModalVisible: false,
      items: products,
      itemsPerPage: 12,
      currentPage: 1,
      filters: {
        brand: '',
        size: '',
        minPrice: null,
        maxPrice: null,
      }
    };
  },
  computed: {
    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredItems.slice(start, end);
    },
    minItemPrice() {
      return Math.min(...this.items.map(item => parseFloat(item.price.replace(/\s/g, ''))));
    },
    maxItemPrice() {
      return Math.max(...this.items.map(item => parseFloat(item.price.replace(/\s/g, ''))));
    },
    filteredItems() {
    return this.items.filter(item => {
      const price = parseFloat(item.price.replace(/\s/g, ''));
      return (!this.filters.brand || item.brand === this.filters.brand) &&
             (!this.filters.size || item.size.includes(this.filters.size)) &&
             (!this.filters.minPrice || price >= this.filters.minPrice) &&
             (!this.filters.maxPrice || price <= this.filters.maxPrice) &&
             (!this.selectedFloor || item.floor === this.selectedFloor);
    });
  },
    showLoadMoreButton() {
      return this.visibleItems < this.filteredItems.length;
    }
  },
  methods: {
    changePage(page) {
    this.currentPage = page;
    this.updateDisplayedItems(); // Этот метод теперь вызывается при смене страницы
  },
  updateDisplayedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedItems = this.filteredItems.slice(startIndex, endIndex);
  },
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
    this.filters = { ...this.filters, ...newFilters };
    this.currentPage = 1; // Сбросить текущую страницу на первую
    this.updateDisplayedItems(); // Обновите отображаемые элементы после применения фильтров
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
@font-face {
  font-family: 'MyCustomFont';
  src: url('../../fonts/groplet/Gropled-Bold.otf') format('truetype'),

}
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
  font-family: 'MyCustomFont';
}

p{ 
  text-align: left;
  margin-left: 5px;
}
.products {
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}

.product {
  width: calc(25% - 20px); 
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 10px;
  transition: transform 0.3s ease;
  position: relative;
  margin-right: 20px;
  background: rgba(255, 255, 255, 0.1); /* Прозрачный белый фон */
  backdrop-filter: blur(10px); /* Размытие фона за элементом */
  border-radius: 20px; /* Скругление углов */
  padding: 0.5rem 2rem; /* Внутренние отступы */
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5); /* Тень для эффекта воздушности */
  
}
.product:nth-child(4n) {
  margin-right: 0;
}

.product:hover {
  transform: translateY(-10px);
}

.product img {
  width: 100%;
  height: 300px;
  border-radius: 10px;
  cursor: pointer; 
  border: 1px #C6A153;
}

.product h2 {
  color: #fff;
  font-size: 20px;
  margin-top: 15px;
}

.product .price {
  font-size: 24px;
  color: #fff;
  margin: 10px 0;
}

.product p {
  color: #fff;
  font-size: 16px;
}

button {
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  background-color: #C6A153;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 10px;
  transition: transform 0.2s, background-color 0.2s;
}

button:hover {
  background-color: #533f14;
}

button:active {
  transform: scale(0.95); /* Уменьшает размер кнопки при нажатии */
  background-color: #f5e105; /* Меняет цвет фона при нажатии */
}

.no-items {
  text-align: center;
  color: #999;
  margin-top: 20px;
}
</style>