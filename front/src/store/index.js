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

    cart : [
      {
        id : 1,
        productId: 2,
        quantity: 3,
        size: 'S'
      },
      {
        id : 2,
        productId: 4,
        quantity: 1,
        size: 'XS'
      },
      {
        id : 3,
        productId: 6,
        quantity: 5,
        size: 'XL'
      }
    ],
  },
  mutations: {
    // addCartItem(state, item){
    //     item.quantity = 1;
    //     state.cart.push(item);
    // },
    // updateCartItem(state, updatedItem){
    //     state.cart = state.cart.map((cartItem) => {
    //         if(cartItem.id == updatedItem.id){
    //             return updatedItem;
    //         }

    //         return cartItem;
    //     })
    // },
    // removeCartItem(state, item){
    //     state.cart = state.cart.filter((cartItem) => {
    //         return cartItem.id != item.id
    //     })
    // }
  }
})