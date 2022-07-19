// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'
// import createPersistedState from "vuex-persistedstate";


// Vue.use(Vuex)

// const img = process.env.VUE_APP_img + "/products"; //"http://springboot-productservice-ucllteam15.ucll-ocp-40cb0df2b03969eabb3fac6e80373775-0000.eu-de.containers.appdomain.cloud/products";
// const headers = { Accept: "application/json" };

// export default new Vuex.Store({
//   plugins: [createPersistedState()],
//   state: {
//     products: [],
//     inCart: [],
//     user: {
//       isAuthenticated: false,
//       name: "",
//       email: "",
//       idToken: "",
//       accessToken: "",
//       partner: false
//     },
//     endpoints: {
//       login: process.env.VUE_APP_AUTH_img,
//       partnercheck: process.env.VUE_APP_img + "/check",
//       products: process.env.VUE_APP_img + "/products",
//     },
//   },
//   getters: {
//     products: state => state.products,
//     inCart: state => state.inCart,
//   },
//   mutations: { //synchronous
//     setProducts(state, payload) {
//       state.products = payload;
//     },
//     addToCart(state, payload) {
//       console.log(payload);
//       state.inCart.push(payload);
//     },
//     removeFromCart(state, item) {
//       state.inCart.splice(item, 1);
//     },
//     logout(state) {
//       state.user.isAuthenticated = false;
//       state.user.name = "";
//       state.user.email = "";
//       state.user.idToken = "";
//       state.user.accessToken = "";
//       state.user.partner = "";
//     },
//     login(state, payload) {
//       state.user.isAuthenticated = true;
//       state.user.name = payload.name;
//       state.user.email = payload.email;
//       state.user.idToken = payload.idToken;
//       state.user.accessToken = payload.accessToken;
//     },
//     SET_PARTNER(state, partner) {
//       state.user.partner = partner;
//     },
//     setimgs(state) {
//       state.endpoints.partnercheck = process.env.VUE_APP_img + "/check";
//       state.endpoints.products = process.env.VUE_APP_img + "/products";
//       state.endpoints.login = process.env.VUE_APP_AUTH_img
//       console.log(process.env);
//     }
//   },
//   actions: { //asynchronous
//     async getProducts(state) {
//       const products = await fetch(img, { headers });
//       const prods = await products.json();
//       state.commit("setProducts", prods);
//       console.log(prods);
//     },
//     async checkPartner({ state, commit }) {
//       let accessToken = state.user.accessToken;
//       console.log("checking partner access", state.endpoints.partnercheck);
//       const AuthStr = 'Bearer '.concat(accessToken);
//       const AuthHeader = { 'Authorization': AuthStr };
//       console.log("AuthToken=", AuthHeader);
//       let response = await fetch(state.endpoints.partnercheck, {
//         method: 'GET',
//         headers: {
//           'Authorization': AuthStr
//         }
//       });
//       console.log("partneraccess", response);
//       if (response.ok) {
//         commit('SET_PARTNER', true);
//         console.log("TRUE");
//       } else {
//         commit('SET_PARTNER', false);
//         console.log("FALSE");
//       }
//     },
//     registerProduct({ state }, obj) {
//       let productsimg = state.endpoints.products;
//       console.log(productsimg);
//       let accessToken = state.user.accessToken;
//       const AuthStr = 'Bearer '.concat(accessToken);
//       console.log(AuthStr);
//       console.log(obj);
//       axios(productsimg, {
//         method: 'POST',
//         headers: {
//           'Accept': '*/*',
//           'Content-Type': 'application/json',
//           'Authorization': AuthStr
//         },
//         credentials: 'include',
//         data: obj
//       })
//         .then(response => {
//           console.log('Response:', response);
//         })
//         .catch((error) => {
//           console.error('Error:', error);
//         });
//     },
//   },
//   modules: {
//   }
// })

import { createStore } from "vuex";
// import createPersistedState from "vuex-persistedstate";
// import SecureLS from "secure-ls";

/* =========== MODULES =========== */
// import cart from './modules/cart';
import user from './modules/user';
// import products from './modules/products';
// import orders from './modelus/orders'

// const ls = new SecureLS({ isCompression: false });

// export default createStore({
//   modules: [
//     cart,
//     user,
//     products,
//     orders
//   ],
//   plugins: [
//     createPersistedState({
//       storage: {
//         getItem: (key) => ls.get(key),
//         setItem: (key, value) => ls.set(key, value),
//         removeItem: (key) => ls.remove(key),
//       },
//     }),
//   ],
// });

export default createStore({
  modules: [
    user,
  ],
  state: {
    products : [
        {
          id : 1,
          name : "Chelsea Shoes",
          price : 200,
          collectionType: "Synk Dive",
          description : "Best Drip in the Market",
          img : "./assets/images/product-01.jpg",
          qtyInInventory: 23,
          sizes: ['S','M','L','XL']
        },
        {
          id : 2,
          name : "Kimono",
          price : 50,
          collectionType: "Wildside",
          description : "Classy, Stylish, Dope",
          img : "./assets/images/product-02.jpg",
          qtyInInventory: 4345,
          sizes: ['S','M','L','XL']
        },
        {
          id : 3,
          name : "Watch",
          price : 2500,
          collectionType: "Maniac",
          description : "Elegance built in",
          img : "./assets/images/product-03.jpg",
          qtyInInventory: 32,
          sizes: ['XS','M','L','XL']
        },
        {
          id : 4,
          name : "Wallet",
          price : 80,
          collectionType: "Synk Dive",
          description : "Sleek, Trendy, Clean",
          img : "./assets/images/product-04.jpg",
          qtyInInventory: 12,
          sizes: ['S','M','XL']
        },
        {
          id : 5,
          name : "Lady Handbags",
          price : 230,
          collectionType: "Wildside",
          description : "Fabulous, Exotic, Classy",
          img : "./assets/images/product-05.jpg",
          qtyInInventory: 123,
          sizes: ['S','M','L']
        },
        {
          id : 6,
          name : "Casual Shirts",
          price : 30,
          collectionType: "Maniac",
          description : "Neat, Sleek, Smart",
          img : "./assets/images/product-06.jpg",
          qtyInInventory: 432,
          sizes: ['XS','S','L','XL']
        }
    ],

    users : [
        {
          id : 1,
          name : "Lynn Lapid",
          address : "Av. São Carlos, 123",
          email : "lynn@usp.br",
          phone : "5514999999999",
          isAdmin: false
        },
        {
          id : 2,
          name : "Juca Tico Teco",
          address : "Av. Não Sei, 69",
          email : "queromorrer@gmail.com",
          phone : "5511912345678",
          isAdmin: true
        },
        {
          id : 3,
          name : "Isadora P. Oliveira",
          address : "Puta Que Te Pariu, 293",
          email : "naoaguentomais@yahoo.com.br",
          phone : "5577123456789",
          isAdmin: false
        },
        {
          id : 4,
          name : "Wagner Soares Jr.",
          address : "Um Endereço bem Legal",
          email : "seilaporra@uol.com.br",
          phone : "5566789012345",
          isAdmin: true
        },
    ],

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

    orders: [{}],
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