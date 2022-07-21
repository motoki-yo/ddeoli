import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

/* =========== MODULES =========== */
// import cart from './modules/cart';
import user from './modules/user';
import products from './modules/products';
import orders from './modules/orders';

export default createStore({
  plugins: [createPersistedState()],
  modules: [
    user,
    products,
    orders
  ],
  state: {

    cart : [],

    orders: [{}],
  },
  mutations: {
    setCartItem(state, payload) {
      console.log("oiii")
      state.cart.push(payload)
      console.log(state.cart)
    },
    remCartItem(state, item) {
        state.cart = state.cart.filter((cartItem) => {
            return cartItem.id != item.id
        })
    }
  },
  actions: {
    async addCartItem({commit}, item){
        commit("setCartItem", item);
    },
    async removeCartItem({commit}, item){
        commit("remCartItem", item)
    }
  },
  getters: {
    getCart(state) {
        return state.cart
    },
  }
})