<template lang="pug">
.filter
  .filter-item
    label(for="brand") Бренд:
    select(v-model="selectedBrand")
      option(v-for="brand in brands" :value="brand" :key="brand") {{ brand }}
  .filter-item
    label(for="size") Размер:
    select(v-model="selectedSize")
      option(v-for="size in sizes" :value="size" :key="size") {{ size }}
  .filter-item
    label(for="price") Цена:
    input(type="number", v-model.number="minPrice", :min="minPriceLimit", :max="maxPrice", placeholder="От")
    input(type="number", v-model.number="maxPrice", :min="minPrice", :max="maxPriceLimit", placeholder="До")
  button(@click="applyFilters") Применить фильтры
</template>

<script>
export default {
  name: 'FilterComponent',
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
      brands: ['Все', 'Nike', 'Reebok', 'New Balance', 'Diadora', 'Mizuno', 'ASICS', 'PUMA', 'ON', 'IYSO'],
      sizes: ['Все', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
    };
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
@font-face {
  font-family: 'MyCustomFont';
  src: url('../../fonts/groplet/Gropled-Bold.otf') format('truetype');
}

.filter {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid #C6A153;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
}

.filter-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 10px;
}

.filter-item label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #C6A153; /* Золотой цвет для текста */
}

.filter-item select, 
.filter-item input {
  width: 100px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid rgba(183, 147, 95, 0.5); /* Золотой цвет для границ */
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
}

.filter-item input[type=number]::-webkit-inner-spin-button, 
.filter-item input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

button {
  padding: 10px 20px;
  background-color: rgba(183, 147, 95, 1); /* Золотой фон для кнопки */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: rgba(183, 147, 95, 0.8); /* Более светлый золотой фон при наведении */
}


</style>
