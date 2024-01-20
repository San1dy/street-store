<template lang="pug">
SpinnerComponent(:is-visible="!isDataLoaded")
div(v-if="isDataLoaded")
  FilterComponent(
    :min-price-limit="minItemPrice",
    :max-price-limit="maxItemPrice",
    @filter-changed="applyFilters"
  )
  .catalog
    h1 Каталог
    .products(v-if="displayedItems.length")
      .product(v-for="item in displayedItems", :key="item.id")
        img(:src="item.image", @click="openModal(item)")
        .product-info
          .product-details
            h2.product-name {{ item.name }}
            span.price {{ item.price }} ₽
        p.item-added-text(v-if="item.itemAddedToCart") Товар добавлен в корзину
    p.no-items(v-else) Нет товаров, соответствующих выбранным фильтрам.
    
  PaginationComponent(
    v-if="totalDisplayedItems !== undefined"
    :total-items="totalDisplayedItems"
    :items-per-page="itemsPerPage"
    :current-page.sync="currentPage"
    @update:currentPage="page => currentPage = page"
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
import { ref, computed, onMounted, reactive, watch, toRefs } from 'vue';
import FilterComponent from './FilterComponent.vue';
import ModalComponent from '../ModalComponent/ModalComponent.vue';
import PaginationComponent from './PaginationComponent.vue';
import SpinnerComponent from '../SpinnerComponent/SpinnerComponent.vue';
import { useStore } from 'vuex';

export default {
  name: 'CatalogContainer',
  components: {
    ModalComponent,
    FilterComponent,
    PaginationComponent,
    SpinnerComponent
  },

  props: {
    totalItems: Number,
    floor: String,
    selectedFloor: {
      type: String,
      default: ''
    },
  },

  setup(props) {
    const { selectedFloor } = toRefs(props); // Деструктуризация props

    const selectedProduct = ref(null);
    const isModalVisible = ref(false);
    const store = useStore();
    const items = ref([]);
    const itemsPerPage = ref(12);
    const currentPage = ref(1);
    const isDataLoaded = ref(false);
    const totalDisplayedItems = computed(() => items.value.length);
    const filters = reactive({
      brand: '',
      size: '',
      minPrice: null,
      maxPrice: null,
      priceRange: [],
    });

    const fetchProducts = async () => {
      isDataLoaded.value = false;
      try {
        const response = await fetch('http://localhost:3000/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        items.value = data;
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        isDataLoaded.value = true;
      }
    };

    watch([currentPage, filters], () => {
  console.log(`Текущая страница: ${currentPage.value}, выбранные фильтры: ${JSON.stringify(filters)}`);
});

    onMounted(fetchProducts);

    const displayedItems = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredItems.value.slice(start, end);
    });



    const minItemPrice = computed(() => {
      return Math.min(...items.value.map(item => parseFloat(item.price.replace(/\s/g, ''))));
    });

    const maxItemPrice = computed(() => {
      return Math.max(...items.value.map(item => parseFloat(item.price.replace(/\s/g, ''))));
    });


    const filteredItems = computed(() => {
      return items.value.filter(item => {
        const price = parseFloat(item.price.replace(/\s/g, ''));
        return (!filters.brand || item.brand === filters.brand) &&
               (!filters.size || item.size.includes(filters.size)) &&
               (!filters.minPrice || price >= filters.minPrice) &&
               (!filters.maxPrice || price <= filters.maxPrice) &&
               (!selectedFloor.value || item.floor === selectedFloor.value);
      });
    });

    const openModal = (product) => {
      selectedProduct.value = product;
      isModalVisible.value = true;
    };

    const handleImageChange = (newImage) => {
      selectedProduct.value = { ...selectedProduct.value, image: newImage };
    };

    const addToCart = (item) => {
      store.dispatch('addToCart', item);
      item.itemAddedToCart = true;
      setTimeout(() => {
        item.itemAddedToCart = false;
      }, 2000);
    };

    const applyFilters = (newFilters) => {
      Object.assign(filters, newFilters);
      currentPage.value = 1; // Сбросить текущую страницу при изменении фильтров
    };

    return {
      selectedProduct,
      isModalVisible,
      items,
      itemsPerPage,
      currentPage,
      filters,
      isDataLoaded,
      displayedItems,
      minItemPrice,
      maxItemPrice,
      totalDisplayedItems,
      openModal,
      handleImageChange,
      addToCart,
      applyFilters
    };
  }
};
</script>





<style scoped>

:root {
  --main-bg-color: #EFF2F9; /* светло-серый фон */
  --accent-color: #4E84D9; /* синий акцент для кнопок и ссылок */
  --text-color: #333; /* темно-серый для основного текста */
  --detail-text-color: #666; /* светло-серый для дополнительного текста */
  --card-bg-color: #ffffff; /* белый фон для карточек */
  --button-hover-color: rgba(78, 132, 217, 0.8); /* прозрачный синий для наведения */
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
  color: white;
  font-size: 0.9rem;
}
.catalog {
  text-align: center;
  width: 80%;
  margin: auto;
  font-family: 'MyCustomFont';
}
h1 {
  color: var(--text-color);
}
p{ 
  text-align: left;
  margin-left: 5px;
  color: var(--text-color);
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
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  background: var(--card-bg-color);
  border-radius: 20px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1),
              -5px -5px 15px rgba(255, 255, 255, 0.7);
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.product:nth-child(4n) {
  margin-right: 0;
}

.product:hover {
  transform: translateY(-5px);
  box-shadow: 10px 10px 15px #2826269b;
}

.product img {
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.product h2 {
  font-size: 1.6rem; /* Увеличенный размер */
  color: #333;
  margin: 5px 0;
}


.product .price {
  font-size: 1.2rem; /* Увеличенный размер */
  color: #666;
}

.product p {
  color: #fff;
  font-size: 16px;
}

.product-info {
  padding: 10px 15px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.product-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.add-to-cart {
  display: none;
  padding: 10px 20px;
  background-color: #BA1519;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.2s;
  align-self: center; 
  margin-bottom: 10px;
}

.product:hover .add-to-cart {
  display: block;
}

.product:hover img {
  opacity: 1;
}

.product:hover .add-to-cart {
  display: block; /* Показываем кнопку при наведении */
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
  color: white;
  font-size: 0.9rem;
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
@media (min-width: 1241px) {
  .product:nth-child(4n) {
    margin-right: 0;
  }
}
@media (max-width: 1240px) {
  .product:nth-child(4n) {
    margin-right: auto;
  }
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