<template lang="pug">
.catalog
  h1 Корзина
  .products
    p.text(v-if="cartItems.length === 0") В данный момент ваша корзина пустая
    .product(
      v-for="item in cartItems", 
      :key="item.id",
      @mouseenter="item.showDelete = true", 
      @mouseleave="item.showDelete = false"
    )
      img(:src="item.image", @click="openModal(item)")
      h2 {{ item.name }}
      span.price {{ item.price }} ₽
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
import { mapActions } from 'vuex';
import ModalComponent from '../ModalComponent/ModalComponent.vue';

export default {
  components: {
    ModalComponent
  },
  data() {
    return {
      selectedItem: null,
      isModalVisible: false
    };
  },
  computed: {
    cartItems() {
      return this.$store.state.cart.map(item => ({ ...item, showDelete: false }));
    }
  },
  created() {
    this.initializeCart();
  },
  methods: {
    ...mapActions(['initializeCart']),
    removeFromCart(itemToRemove) {
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
.catalog, .products {
  text-align: center;
  width: 90%;
  margin: auto;
  height: auto;
}

.catalog {
  position: relative;
}
.text {
  position: absolute;
  margin: auto;
}
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
}

.product {
  box-sizing: border-box;
  padding: 1rem;
  transition: transform 0.3s ease;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.product img {
  width: 100%;
  border-radius: 10px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  margin-bottom: 1rem;
}

.product h2, .product .price, button {
  color: #000;
  font-size: 25px;
}

.buy-button, .delete-button {
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

p{
  position: absolute;
  font-size: 20px;
}
.product:hover .buy-button, .product:hover .delete-button {
  display: block;
}

.buy-button:hover, .delete-button:hover {
  background-color: #c0392b;
}

.buy-button:hover, .delete-button:active {
  transform: scale(0.95);
}
.show-delete {
  display: block;
  opacity: 1;
}

@media (max-width: 1240px) {
  .product {
    max-width: 300px;
  }
  .product h2, .product .price, button {
  font-size: 20px;
}
}

@media (max-width: 1080px) {
  .product {
    max-width: 250px;
  }
  .product h2, .product .price, button {
  font-size: 15px;
}
}

@media (max-width: 720px) {
  .products {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }

}

@media (max-width: 480px) {
  .products {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

}

@media (max-width: 320px) {
  .products {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}
</style>
