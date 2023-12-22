import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, item) {
      state.cart.push(item);
    },
    removeFromCart(state, itemToRemove) {
      const index = state.cart.findIndex(item => item.id === itemToRemove.id);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    }
  },
  actions: {
    addToCart({ commit }, item) {
      commit('ADD_TO_CART', item);
    },
    removeFromCart({ commit }, item) {
      commit('removeFromCart', item);
    }
  }
});
