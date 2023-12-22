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
    this.updateDisplayedItems(); 
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
    this.selectedProduct = { ...this.selectedProduct, image: newImage };
    },

    loadMore() {
      this.visibleItems += this.loadMoreStep;
    },

    applyFilters(newFilters) {
    this.filters = { ...this.filters, ...newFilters };
    this.currentPage = 1; 
    this.updateDisplayedItems(); 
    },
    
    addToCart(item) {
    this.$store.dispatch('addToCart', item);
    item.itemAddedToCart = true;
    setTimeout(() => {
      item.itemAddedToCart = false;
    }, 2000); 
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
h1 {
  color:#BA1519;
}
p{ 
  text-align: left;
  margin-left: 5px;
}
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
}

.product {
  box-sizing: border-box;
  padding: 1rem;
  transition: transform 0.3s ease;
  position: relative;
  background: #c8c8c897;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 5px 5px 5px #2826269b;
  margin: 0 auto;
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  height: 100%;
}
.product:nth-child(4n) {
  margin-right: 0;
}

.product:hover {
  transform: translateY(-10px);
}

.product img {
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  aspect-ratio: 3 / 4; 
  object-fit: cover; 
  margin-bottom: 1rem; 
}

.product h2 {
  color: #000;
  margin-top: 0.5rem;
  font-size: 1.5rem; 
  margin-bottom: 0.5rem;
}


.product .price {
  font-size: 24px;
  color: #fff;
  margin: 10px 0;
  margin-bottom: 0.8rem;
}

.product p {
  color: #fff;
  font-size: 16px;
}

button {
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  background-color: #BA1519;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 10px;
  transition: transform 0.2s, background-color 0.2s;
  align-self: center; 
  margin-top: auto;
}

button:hover {
  background-color: #fb0307;
}

button:active {
  transform: scale(0.95); 
  background-color: #171616;
}

.no-items {
  text-align: center;
  color: #999;
  margin-top: 100px;
  font-size: 35px;
}

@media (max-width: 1240px) {
  .product {
    max-width: 300px;
  }
  .product h2 {
    font-size: 0.9rem;
  }
  .product .price {
    font-size: 1.1rem;
  }
  .product p, button {
    font-size: 0.8rem;
  }
}

@media (max-width: 1080px) {
  .product {
    max-width: 250px; 
  }

  .product h2 {
    font-size: 0.8rem;
  }
  .product .price {
    font-size: 1rem;
  }
  .product p, button {
    font-size: 0.7rem;
  }
}

@media (max-width: 720px) {
  .products {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}

@media (max-width: 480px) {
  .products {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
}

@media (max-width: 320px) {
  .products {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}
</style>