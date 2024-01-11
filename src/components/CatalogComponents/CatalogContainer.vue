<template lang="pug">
div
  FilterComponent(
    v-if="isDataLoaded",
    :min-price-limit="minItemPrice",
    :max-price-limit="maxItemPrice",
    @filter-changed="applyFilters"
  )
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
    )
  ModalComponent(
    :product="selectedProduct",
    :isVisible="isModalVisible",
    @close="isModalVisible = false",
    @change-image="handleImageChange",
    @add-to-cart="addToCart"
    :showAddToCartButton="true"
  )
</template>


<script>
import FilterComponent from './FilterComponent.vue';
import ModalComponent from '../ModalComponent/ModalComponent.vue';
import PaginationComponent from './PaginationComponent.vue';

export default {
  name: 'CatalogContainer',

  components: {
    ModalComponent,
    FilterComponent,
    PaginationComponent
  },

  props: {
    floor: String
  },

  data() {
    return {
      selectedProduct: null,
      isModalVisible: false,
      items: [], 
      itemsPerPage: 12,
      currentPage: 1,
      isDataLoaded: false,
      filters: {
        brand: '',
        size: '',
        minPrice: this.minPriceLimit, 
        maxPrice: this.maxPriceLimit, 
        priceRange: [this.minPriceLimit, this.maxPriceLimit], 
      }
    };
  },

  created() {
    this.fetchProducts(); 
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
    },
    totalItems() {
    console.log('Total items:', this.filteredItems.length);
    return this.filteredItems.length;
  },
    totalPages() {
    console.log('Total items:', this.totalItems, 'Items per page:', this.itemsPerPage);
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }
  },
  watch: {
    currentPage(newPage) {
    console.log('Current page changed:', newPage);
    this.updateDisplayedItems();
  }
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
      this.updateDisplayedItems(); 
    },

    updateDisplayedItems() {
    console.log('Updating items for page:', this.currentPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    if (this.filteredItems.slice) {
      this.displayedItems = this.filteredItems.slice(startIndex, endIndex);
    } else {
      console.error('filteredItems.slice is not a function');
    }
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
    },

    fetchProducts() {
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(data => {
        this.items = data;
        this.isDataLoaded = true; // Устанавливаем флаг в true после загрузки данных
      })
      .catch(error => {
        console.error('Error:', error);
        this.isDataLoaded = false; // В случае ошибки
      });
  },    
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
  font-family: 'MyCustomFont';
}
h1 {
  color:#f3080b;
}
p{ 
  text-align: left;
  margin-left: 5px;
}
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
}

.product {
  box-sizing: border-box;
  padding: 1rem;
  transition: transform 0.3s ease;
  position: relative;
  background: #ffffff;
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
  aspect-ratio: 1 / 1; 
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
  color: #000;
  margin: 10px 0;
  margin-bottom: 0.8rem;
}

.product p {
  color: #fff;
  font-size: 16px;
}

button {
  border: none;
  border-radius: 15px;
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

 
  font-weight: 500;
  font-size: 15px;
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
  background: linear-gradient(0deg, rgb(245, 3, 3) 0%, rgb(243, 53, 53) 100%);
  text-decoration: none;
}

button:hover {
  text-decoration: none;
  color: #fff;
  opacity: .7;
}

button:active {
  box-shadow: 4px 4px 6px 0 rgba(255,255,255,.3),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
              inset -4px -4px 6px 0 rgba(255,255,255,.2),
              inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
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