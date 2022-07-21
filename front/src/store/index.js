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
    cartPrice : 0,

    orders: [{}],
  },
  mutations: {
    setCartItem(state, payload) {
      state.cart.push(payload)
    },
    remCartItem(state, item) {
        state.cart = state.cart.filter((cartItem) => {
            return cartItem.id != item.id
        })
    },
    setCartPrice(state, value) {
      state.cartPrice = value
    },
  },
  actions: {
    async addCartItem({commit}, item){
        commit("setCartItem", item);
    },
    async removeCartItem({commit}, item){
        commit("remCartItem", item)
    },
    async changeCartPrice({commit}, item){
        commit("setCartPrice", item);
    },
  },
  getters: {
    getCart(state) {
        return state.cart
    },
    getCartPrice(state) {
        return state.cartPrice
    },
  }
})