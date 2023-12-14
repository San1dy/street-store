<template lang="pug">
.filter
  .filter-item
    label(for="gender") Пол:
    select(v-model="filters.gender")
      option(value="") Все
      option(value="мужской") Мужской
      option(value="женский") Женский

  .filter-item
    label Минимальная цена:
    input(type="number", v-model="filters.minPrice")

  .filter-item
    label Максимальная цена:
    input(type="number", v-model="filters.maxPrice")

  button(@click="applyFilters") Применить фильтры
</template>

<script>
export default {
  name: 'FilterComponent',
  data() {
    return {
      filters: {
        gender: '',
        minPrice: null,
        maxPrice: null
      }
    };
  },
  methods: {
    applyFilters() {
      this.$emit('filter-changed', this.filters);
    }
  }
};
</script>

<style scoped>
.filter {
  display: flex;
  flex-direction: row;
  align-items: center; 
	justify-content: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.filter-item {
	align-items: center; 
  margin-right: 50px;
	display: flex;
  flex-direction: row;
}

.filter label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
	margin-right: 10px;
}

.filter select, .filter input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
}

.price-range {
  display: flex;
  align-items: center;
}

.price-range input[type="range"] {
  flex-grow: 1;
  margin: 0 10px;
}

button {
	margin:auto;
  padding: 8px 15px;
  background-color: #e06c6c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  align-self: flex-start;
}

button:hover {
  background-color: #c0392b;
}
</style>