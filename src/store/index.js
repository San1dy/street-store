import { createStore } from 'vuex';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const INITIALIZE_CART = 'INITIALIZE_CART';

export default createStore({
  state: {
    cart: []
  },
  mutations: {
    [ADD_TO_CART](state, item) {
      state.cart.push(item);
      try {
        localStorage.setItem('cart', JSON.stringify(state.cart));
      } catch (error) {
        console.error('Ошибка сохранения в localStorage:', error);
      }
    },
    [REMOVE_FROM_CART](state, itemToRemove) {
      const index = state.cart.findIndex(item => item.id === itemToRemove.id);
      if (index !== -1) {
        state.cart.splice(index, 1);
        try {
          localStorage.setItem('cart', JSON.stringify(state.cart));
        } catch (error) {
          console.error('Ошибка сохранения в localStorage:', error);
        }
      }
    },
    [INITIALIZE_CART](state, cartData) {
      state.cart = cartData;
    }
  },
  actions: {
    addToCart({ commit }, item) {
      commit(ADD_TO_CART, item);
    },
    removeFromCart({ commit }, item) {
      commit(REMOVE_FROM_CART, item);
    },
    initializeCart({ commit }) {
      try {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        commit(INITIALIZE_CART, cartData);
      } catch (error) {
        console.error('Ошибка чтения из localStorage:', error);
      }
    }
  }
});
