<template lang="pug">
.pagination
  button(
    v-for="page in totalPages"
    :key="page"
    :class="{ 'active': page === currentPage }"
    @click="$emit('page-changed', page)"
  ) {{ page }}
</template>

<script>
export default {
  name: 'PaginationComponent',
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    }
  },
  methods: {
    setCurrentPage(page) {
      this.$emit('update:currentPage', page);
    }
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color: #605E61;
}

button {
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  padding: 5px 15px; 
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #605E61;
  border-radius: 20px;
  font-size: 14px; 
}

button:hover {
  background-color: rgba(255, 255, 255, 0.6); 
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); 
}

button:active {
  transform: scale(0.95); 
}

button.active {
  background-color: rgba(255, 255, 255, 0.8); 
  font-weight: bold;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); 
}
</style>