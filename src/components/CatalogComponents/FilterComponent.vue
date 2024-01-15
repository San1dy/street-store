<template lang="pug">
.filter
  .filter-item
    label(for="brand") Бренд:
    select(v-model="selectedBrand", id="brand")
      option(value='') Все
      option(v-for="brand in brands", :value="brand", :key="brand") {{ brand }}
  .filter-item
    label(for="size") Размер:
    select(v-model="selectedSize", id="size")
      option(value='') Все
      option(v-for="size in sizes", :value="size", :key="size") {{ size }}
  .filter-item
    label(for="min-price") Цена: От
    input(
      type="number", 
      v-model.lazy="minPrice", 
      :min="minPriceLimit", 
      :max="maxPrice", 
      placeholder="От",
      id="min-price"
    )
    label(for="max-price") До
    input(
      type="number", 
      v-model.lazy="maxPrice", 
      :min="minPrice", 
      :max="maxPriceLimit", 
      placeholder="До",
      id="max-price"
    )
    VueSlider(:min="minPriceLimit", :max="maxPriceLimit", v-model="priceRange", :tooltip="'active'", :process="true")
  button.button-apply-filters(@click="applyFilters") Применить фильтры
</template>


<script>
import { defineComponent, ref, watch, toRefs } from 'vue';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default defineComponent({
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
  setup(props, { emit }) {
    const { minPriceLimit, maxPriceLimit } = toRefs(props);

    const selectedBrand = ref('');
    const selectedSize = ref('');
    const minPrice = ref(minPriceLimit.value);
    const maxPrice = ref(maxPriceLimit.value);
    const priceRange = ref([minPriceLimit.value, maxPriceLimit.value]);
    const brands = ['Nike', 'Reebok', 'New Balance', 'Diadora', 'Mizuno', 'ASICS', 'PUMA', 'ON', 'IYSO'];
    const sizes = ['34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45'];

    watch(minPrice, (newVal) => {
      if (newVal < minPriceLimit.value) {
        minPrice.value = minPriceLimit.value;
      } else if (newVal > maxPrice.value) {
        minPrice.value = maxPrice.value;
      }
      priceRange.value = [minPrice.value, maxPrice.value];
    });

    watch(maxPrice, (newVal) => {
      if (newVal > maxPriceLimit.value) {
        maxPrice.value = maxPriceLimit.value;
      } else if (newVal < minPrice.value) {
        maxPrice.value = minPrice.value;
      }
      priceRange.value = [minPrice.value, maxPrice.value];
    });

    watch(priceRange, (newVal) => {
      if (newVal[0] !== minPrice.value) {
        minPrice.value = newVal[0];
      }
      if (newVal[1] !== maxPrice.value) {
        maxPrice.value = newVal[1];
      }
    });

    const applyFilters = () => {
      emit('filter-changed', {
        brand: selectedBrand.value,
        size: selectedSize.value,
        minPrice: minPrice.value,
        maxPrice: maxPrice.value,
      });
    };

    return {
      selectedBrand,
      selectedSize,
      minPrice,
      maxPrice,
      priceRange,
      brands,
      sizes,
      applyFilters
    };
  }
});
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

