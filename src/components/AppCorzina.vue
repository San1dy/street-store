<template lang="pug">
div.catalog
  h1 Корзина
  .products
    p(v-if="cartItems.length === 0") Ваша корзина пуста
    .product(
      v-for="item in cartItems", 
      :key="item.id",
      @mouseenter="item.showDelete = true", 
      @mouseleave="item.showDelete = false"
    )
      img(:src="item.image", @click="openModal(item)")
      h2 {{ item.name }}
      span.price {{ item.price }} ₽
      button.buy-button(@click="openExternalLink(item.buy)") Купить
      button.delete-button(
        :class="{'show-delete': item.showDelete}", 
        @click="removeFromCart(item)"
      ) Удалить
  ModalComponent(
    :product="selectedItem",
    :isVisible="isModalVisible",
    @close="closeModal",
    @change-image="handleImageChange"
  )
</template>



<script>
import ModalComponent from './ModalComponent.vue';

export default {
  components: {
    ModalComponent
  },
  data() {
    return {
      selectedItem: null, // Данные для выбранного элемента
      isModalVisible: false, // Переменная для управления видимостью модального окна
    };
  },
  computed: {
    cartItems() {
      // Добавляем свойство showDelete к каждому элементу корзины
      return this.$store.state.cart.map(item => ({ ...item, showDelete: false }));
    }
  },
  methods: {
    removeFromCart(itemToRemove) {
      // Отправить действие удаления в Vuex store
      this.$store.dispatch('removeFromCart', itemToRemove);
    },
    openExternalLink(url) {
      window.open(url, '_blank');
    },
    openModal(item) {
      this.selectedItem = item;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    handleImageChange(newImage) {
      this.selectedItem.image = newImage;
    }
  }
};
</script>


<style scoped>
.item-added-text {
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  background-color: #1b1b1b; 
  padding: 15px; 
  border-radius: 10px; 
  text-align: center;
}

.catalog {
  text-align: center;
  width: 80%;
  margin: auto;
}

p {
  text-align: left;
  margin-left: 5px;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
}

.product {
  width: calc(25% - 20px); 
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 10px;
  transition: transform 0.3s ease;
  position: relative;
  margin-right: 20px;
  background: rgba(255, 255, 255, 0.1); /* Прозрачный белый фон */
  backdrop-filter: blur(10px); /* Размытие фона за элементом */
  border-radius: 20px; /* Скругление углов */
  padding: 0.5rem 2rem; /* Внутренние отступы */
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5); /* Тень для эффекта воздушности */
}

.product:hover {
  transform: translateY(-10px);
}

.product img {
  width: 100%;
  height: 300px;
  border-radius: 10px;
}

.product h2 {
  color: #333;
  font-size: 20px;
  margin-top: 15px;
}

.product .price {
  font-size: 24px;
  color: #555;
  margin: 10px 0;
}

.product p {
  color: #666;
  font-size: 16px;
}

button {
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  background-color: #e74c3c;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 10px;
}

button:hover {
  background-color: #c0392b;
}

.delete-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: rgba(231, 76, 60, 0.8);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: none;
  opacity: 1;
  transition: opacity 0.3s ease, display 0.3s ease;
}

.product:hover .delete-button {
  display: block; /* Показать кнопку при наведении */
}


.delete-button:hover {
  background-color: #c0392b; /* Цвет фона при наведении на саму кнопку */
}


.show-delete {
  display: block;
  opacity: 1;
}
</style>