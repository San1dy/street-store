<template lang="pug">
.filter
  .filter-item
    label(for="brand") Бренд:
    select(v-model="selectedBrand")
      option(value='') Все
      option(v-for="brand in brands" :value="brand" :key="brand") {{ brand }}
  .filter-item
    label(for="size") Размер:
    select(v-model="selectedSize")
      option(value='') Все
      option(v-for="size in sizes" :value="size" :key="size") {{ size }}
  .filter-item
    label(for="price") Цена:
    .price-inputs
      input(type="number", v-model.number="minPrice", :min="minPriceLimit", :max="maxPrice", placeholder="От")
      input(type="number", v-model.number="maxPrice", :min="minPrice", :max="maxPriceLimit", placeholder="До")
    VueSlider(v-if="isSliderReady", :min="minPriceLimit", :max="maxPriceLimit", v-model="priceRange", :tooltip="'active'", :process="true")
  button.button-apply-filters(@click="applyFilters") Применить фильтры
</template>



<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
  name: 'FilterComponent',
  components: {
    VueSlider
  },
  props: {
    minPriceLimit: {
      type: Number,
      default: 2300
    },
    maxPriceLimit: {
      type: Number,
      default: 50000
    },
  },
  data() {
    return {
      selectedBrand: '',
      selectedSize: '',
      minPrice: this.minPriceLimit,
      maxPrice: this.maxPriceLimit,
      priceRange: [null, null],
      brands: ['Nike', 'Reebok', 'New Balance', 'Diadora', 'Mizuno', 'ASICS', 'PUMA', 'ON', 'IYSO'],
      sizes: ['34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
      isSliderReady: false,
    };
  },
  created() {
    this.restoreFiltersFromSessionStorage();
  },
  mounted() {
    this.$nextTick(() => {
      this.isSliderReady = true;
      this.priceRange = [this.minPrice, this.maxPrice];
    });
  },
  watch: {
    minPriceLimit(newVal) {
      if (this.isSliderReady && newVal !== this.minPrice) {
        this.minPrice = newVal;
        this.priceRange[0] = newVal;
      }
    },
    maxPriceLimit(newVal) {
      if (this.isSliderReady && newVal !== this.maxPrice) {
        this.maxPrice = newVal;
        this.priceRange[1] = newVal;
      }
    },
    priceRange(newVal) {
      if (this.isSliderReady) {
        if (newVal[0] !== this.minPrice) {
          this.minPrice = newVal[0];
        }
        if (newVal[1] !== this.maxPrice) {
          this.maxPrice = newVal[1];
        }
      }
    },
    minPrice(newVal) {
      if (this.isSliderReady) {
        this.priceRange[0] = newVal;
      }
    },
    maxPrice(newVal) {
      if (this.isSliderReady) {
        this.priceRange[1] = newVal;
      }
    }
  },
  methods: {
    saveFiltersToSessionStorage() {
      sessionStorage.setItem('selectedBrand', this.selectedBrand);
      sessionStorage.setItem('selectedSize', this.selectedSize);
      sessionStorage.setItem('minPrice', this.minPrice.toString());
      sessionStorage.setItem('maxPrice', this.maxPrice.toString());
      sessionStorage.setItem('priceRange', JSON.stringify(this.priceRange));
    },

    restoreFiltersFromSessionStorage() {
      this.selectedBrand = sessionStorage.getItem('selectedBrand') || '';
      this.selectedSize = sessionStorage.getItem('selectedSize') || '';
      const minPrice = sessionStorage.getItem('minPrice');
      const maxPrice = sessionStorage.getItem('maxPrice');
      this.minPrice = (minPrice !== null) ? Number(minPrice) : this.minPriceLimit;
      this.maxPrice = (maxPrice !== null) ? Number(maxPrice) : this.maxPriceLimit;
      const savedRange = sessionStorage.getItem('priceRange');
      this.priceRange = savedRange ? JSON.parse(savedRange) : [this.minPrice, this.maxPrice];
    },

    applyFilters() {
      console.log("Применяемые фильтры:", {
        brand: this.selectedBrand,
        size: this.selectedSize,
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
      });
      this.$emit('filter-changed', {
        brand: this.selectedBrand,
        size: this.selectedSize,
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
      });
      this.saveFiltersToSessionStorage();
    },
  },
};
</script>






<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

.filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: linear-gradient(170deg, #fffefe, #848484); 
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  margin: 10px;
}

.filter-item {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 200px;
}

label {
  font-weight: 500;
  margin-bottom: 5px;
  color: #605E61;
}

select, .price-inputs input {
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  font-weight: 400;
  color: #605E61;
}

.price-inputs {
  display: flex;
  justify-content: space-between;
}

.price-inputs input {
  width: calc(50% - 10px);
}

button {
  padding: 10px 15px;
  background-color: #BA1519;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
  width: auto; 
  align-self: center; 
}

button:hover {
  background-color: #f70307;
}
button:active {
  transform: scale(0.9);
}

.vue-slider {
  height: 8px; 
  background-color: #E0E0E0; 
  border-radius: 4px; 
}

.vue-slider-dot {
  width: 25px; 
  height: 25px; 
  border: none; 
  background-color: #ff0000; 
  box-shadow: none; 
}

.vue-slider-dot-handle {
  display: none; 
}

.vue-slider-process {
  background-color: #FF6A00; 
  border-radius: 4px; 
}

.vue-slider-mark {
  display: none; 
}
.button-apply-filters {
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
  background: rgb(128,128,128); /* серый цвет */
  background: linear-gradient(0deg, rgb(245, 3, 3) 0%, rgb(243, 53, 53) 100%);
}

.button-apply-filters:hover {
  text-decoration: none;
  color: #fff;
  opacity: .7;
}

.button-apply-filters:active {
  box-shadow: 4px 4px 6px 0 rgba(255,255,255,.3),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
              inset -4px -4px 6px 0 rgba(255,255,255,.2),
              inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
}

@keyframes shiny-btn1 {
  0% { transform: scale(0) rotate(45deg); opacity: 0; }
  80% { transform: scale(0) rotate(45deg); opacity: 0.5; }
  81% { transform: scale(4) rotate(45deg); opacity: 1; }
  100% { transform: scale(50) rotate(45deg); opacity: 0; }
}

@media (max-width: 768px) {
  .filter {
    flex-direction: column;
    align-items: center;
  }

  .filter-item {
    width: 100%;
  }

  select, .price-inputs input {
    width: 100%;
  }

  .price-inputs input {
    margin-bottom: 10px;
  }
}
</style>

