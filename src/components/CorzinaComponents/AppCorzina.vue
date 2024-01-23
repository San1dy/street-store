<template lang="pug">
.catalog
  h1 Корзина
  .products
    p.text(v-if="cartItems.length === 0") В данный момент ваша корзина пустая
    .product(
      v-for="item in cartItems", 
      :key="item.id",
      @mouseenter="showDelete(item, true)", 
      @mouseleave="showDelete(item, false)"
    )
      img(:src="item.image", @click="openModal(item)")
      h2 {{ item.name }}
      span.price {{ item.price }} ₽
      button.delete-button(
        :class="{'show-delete': item.showDelete}", 
        @click="removeFromCart(item)"
      )
  ModalComponent(
    :product="selectedItem",
    :isVisible="isModalVisible",
    :fromCart="true",
    @close="closeModal",
    @change-image="handleImageChange"
  )
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import ModalComponent from '../ModalComponent/ModalComponent.vue';

export default {
  components: {
    ModalComponent
  },
  setup() {
    const store = useStore();
    const selectedItem = ref(null);
    const isModalVisible = ref(false);
    
    const cartItems = computed(() => {
      return store.state.cart.map(item => ({ ...item, showDelete: false }));
    });

    onMounted(() => {
      store.dispatch('initializeCart');
    });

    const removeFromCart = (itemToRemove) => {
      store.dispatch('removeFromCart', itemToRemove);
    };

    const openModal = (item) => {
      selectedItem.value = item;
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    const handleImageChange = (newImage) => {
      selectedItem.value.image = newImage;
    };

    const showDelete = (item, value) => {
      item.showDelete = value;
    };

    return {
      cartItems,
      selectedItem,
      isModalVisible,
      removeFromCart,
      openModal,
      closeModal,
      handleImageChange,
      showDelete
    };
  }
};
</script>


<style scoped>
.catalog, .products {
  text-align: center;
  width: 80%;
  margin: 0 auto; /* Центрирование блока внутри родителя */
 
}
h1 {
  color: var(--text-color);
}
.text {
  color: var(--text-color);
  margin-top: 2rem; /* Отступ сверху для текста */
  font-size: 1.5rem; /* Размер шрифта для текста */
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px; /* Расстояние между карточками */
  justify-content: center;
  margin-top: 30px;
}

.product {
  box-sizing: border-box;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  
  background: var(--card-bg-color);
  border-radius: 20px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1),
              -5px -5px 15px rgba(255, 255, 255, 0.7);
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product img {
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
.product:hover {
  transform: translateY(-5px);
  box-shadow: 10px 10px 15px #2826269b;
}
.product h2 {
  font-size: 1.6rem; 
  color: var(--text-color);
  margin: 10px;
}

.product .price {
  font-size: 1.2rem; 
  color: var(--detail-text-color);
  margin-bottom: 10px;
}

.delete-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  opacity: 0;
  cursor: pointer;
  transition: opacity ease 0.5s;
  border: none;
  background: transparent;
}

.delete-button::before,
.delete-button::after {
  content: '';
  position: absolute;
  top: 10px;
  display: block;
  width: 24px;
  height: 3px;
  background: #000;
}

.product:hover .delete-button {
  opacity: 1;
}

.buy-button:hover,
.delete-button:hover {
  background: var(--button-hover-color);
}
.delete-button::before {
  transform: rotate(45deg);
}

.delete-button::after {
  transform: rotate(-45deg);
}

.product:hover .delete-button {
  opacity: 0.7;
}

.delete-button:hover {
  opacity: 1;
}
@media (max-width: 1240px) {
  .products {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1080px) {
  .products {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 720px) {
  .products {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .product h2, .product .price, .buy-button, .delete-button {
    font-size: 0.8rem; 
  }
}

@media (max-width: 320px) {
  .catalog, .products {
    width: 95%;
  }
}

</style>
