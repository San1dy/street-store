<template lang="pug">
.pagination
  button(
    v-for="page in totalPages"
    :key="page"
    :class="{ 'active': page === currentPage }"
    @click="setCurrentPage(page)"
  ) {{ page }}
</template>


<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
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
  setup(props, { emit }) {
  const totalPages = computed(() => {
    if (props.itemsPerPage <= 0 || props.totalItems < 0) {
      console.error('Неверные props: itemsPerPage или totalItems');
      return 0;
    }
    return Math.ceil(props.totalItems / props.itemsPerPage);
  });

  const setCurrentPage = (page) => {
    console.log(`Изменение страницы на: ${page}}`);
    emit('update:currentPage', page);
  };

  return {
    totalPages,
    setCurrentPage
  };
}
});
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
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color: var(--text-color); /* Используйте переменную для цвета текста */
}

button {
  background: var(--main-bg-color); /* Используйте переменную для фона */
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.2s, box-shadow 0.2s, transform 0.2s;
  color: var(--text-color); /* Используйте переменную для цвета текста */
  border-radius: 20px;
  font-size: 0.9rem; /* Более крупный размер шрифта для лучшей читаемости */
  box-shadow: 7px 7px 14px #babecc,
              -7px -7px 14px #ffffff;
}

button:hover {
  background: var(--accent-color); /* Светлый акцентный цвет при наведении */
  color: white; /* Белый текст на акцентном фоне */
}

button:active {
  transform: translateY(2px); /* Мягкий эффект при нажатии */
  box-shadow: inset 1px 1px 2px #babecc,
              inset -1px -1px 2px #ffffff;
}

button.active {
  background-color: var(--accent-color); /* Акцентный цвет для активной кнопки */
  color: white; /* Белый текст на акцентном фоне */
  box-shadow: inset 1px 1px 2px #babecc,
              inset -1px -1px 2px #ffffff; /* Вдавленная кнопка для активного состояния */
}

</style>