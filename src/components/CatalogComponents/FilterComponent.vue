<template lang="pug">
.filter
  .filter-duo
    .filter-item.brand-name
      label(for="brand") Бренд:
      select(v-model="selectedBrand", id="brand")
        option(value='') Все
        option(v-for="brand in brands", :value="brand", :key="brand") {{ brand }}
    .filter-item.brand-size
      label(for="size") Размер:
      select(v-model="selectedSize", id="size")
        option(value='') Все
        option(v-for="size in sizes", :value="size", :key="size") {{ size }}
  .filter-price
    .filter-item.price-range
      .price-inputs
        label(for="min-price") От:
        input(
          type="number", 
          v-model.lazy="minPrice", 
          :min="minPriceLimit", 
          :max="maxPrice", 
          placeholder="От",
          id="min-price"
        )
        label(for="max-price") До:
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
.label, select, input[type='number'], .button-apply-filters {
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  box-shadow: inset 2px 2px 5px #cbced1, inset -5px -5px 10px #ffffff;
}


.filter {
  width: 90%;
  max-width: 500px;
  margin: 1rem auto;
  padding: 1rem;
  font-family: 'Roboto', sans-serif;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.filter-duo {
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  flex-wrap: nowrap; 
  width: 100%;
}

.filter-item {
  width: calc(50% - 10px);
  margin: 5px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.brand-name, .brand-size {
  display: flex; 
  align-items: center; 
  justify-content: center; 
  gap: 10px; 
}

.brand-name label, .brand-size label,
.brand-name select, .brand-size select,
.brand-name input, .brand-size input {
  padding: 0.5rem; 

}
.filter-price {
  width: 100%;
}

.price-range {
  flex: 0 0 100%; 
  display: flex;
  justify-content: space-between; 
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: stretch;
  width: 94%;
}

.price-inputs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.price-inputs label,
.price-inputs input {
  flex: 1; 
  margin: 0 5px; 
}

.VueSlider {
  width: calc(100% - 2rm); 
  margin-top: 10px;
}

.VueSlider-dot {
  background-color: #BA1519;
}

.VueSlider-process {
  background-color: #BA1519;
}

.button-apply-filters {
  padding: 0.5rem 1rem;
  margin-top: 10px;
  border-radius: 15px;
  background-color: #f3f3f3;
  border: none;
  box-shadow: 2px 2px 5px #cbced1, -2px -2px 5px #ffffff;
  align-self: center;
}

.button-apply-filters:hover {
  background-color: #e1e1e1;
}

.button-apply-filters:active {
  transform: scale(0.95);
}

@media (max-width: 480px) {
  .label, select, input[type='number'], .button-apply-filters {
    font-size: 0.6rem; 
    padding: 0.4rem; 
  }

  .filter-item, .price-range, .VueSlider {
    padding: 0.4rem;
    font-size: 0.6rem; 
  }

  .button-apply-filters {
    padding: 0.4rem 0.8rem; 
  }

  .filter {
    padding: 0.8rem; 
  }

  .price-inputs label,
  .price-inputs input {
    margin: 0 3px; 
  }

  .VueSlider {
    width: calc(100% - 20px); 
  }
}
</style>
