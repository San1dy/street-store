<template lang="pug">
div.pagination
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
  color: #C6A153;
}

button {
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  color:#C6A153;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.7);
}

button:active {
  transform: scale(0.9);
}

button.active {
  background-color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
}
</style>
