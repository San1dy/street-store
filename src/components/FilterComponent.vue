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
    VueSlider(:min="minPriceLimit", :max="maxPriceLimit", v-model="priceRange", :tooltip="'active'", :process="true")
  button(@click="applyFilters") Применить фильтры
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
      priceRange: [this.minPriceLimit, this.maxPriceLimit],
      brands: [ 'Nike', 'Reebok', 'New Balance', 'Diadora', 'Mizuno', 'ASICS', 'PUMA', 'ON', 'IYSO'],
      sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
    };
  },
  watch: {
    priceRange(newVal) {
      this.minPrice = newVal[0];
      this.maxPrice = newVal[1];
    },
    minPrice(newVal) {
      this.priceRange[0] = newVal;
    },
    maxPrice(newVal) {
      this.priceRange[1] = newVal;
    }
  },
  methods: {
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

