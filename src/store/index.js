import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, item) {
      state.cart.push(item);
      // Сохраняем данные корзины в localStorage после каждого изменения
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart(state, itemToRemove) {
      const index = state.cart.findIndex(item => item.id === itemToRemove.id);
      if (index !== -1) {
        state.cart.splice(index, 1);
        // Сохраняем данные корзины в localStorage после каждого изменения
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    initializeCart(state, cartData) {
      state.cart = cartData;
    }
  },
  actions: {
    addToCart({ commit }, item) {
      commit('ADD_TO_CART', item);
    },
    removeFromCart({ commit }, item) {
      commit('removeFromCart', item);
    },
    initializeCart({ commit }) {
      const cartData = JSON.parse(localStorage.getItem('cart')) || [];
      commit('initializeCart', cartData);
    }
  }
});
