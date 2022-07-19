// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'
// import createPersistedState from "vuex-persistedstate";


// Vue.use(Vuex)

// const url = process.env.VUE_APP_URL + "/products"; //"http://springboot-productservice-ucllteam15.ucll-ocp-40cb0df2b03969eabb3fac6e80373775-0000.eu-de.containers.appdomain.cloud/products";
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
//       login: process.env.VUE_APP_AUTH_URL,
//       partnercheck: process.env.VUE_APP_URL + "/check",
//       products: process.env.VUE_APP_URL + "/products",
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
//     setUrls(state) {
//       state.endpoints.partnercheck = process.env.VUE_APP_URL + "/check";
//       state.endpoints.products = process.env.VUE_APP_URL + "/products";
//       state.endpoints.login = process.env.VUE_APP_AUTH_URL
//       console.log(process.env);
//     }
//   },
//   actions: { //asynchronous
//     async getProducts(state) {
//       const products = await fetch(url, { headers });
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
//       let productsurl = state.endpoints.products;
//       console.log(productsurl);
//       let accessToken = state.user.accessToken;
//       const AuthStr = 'Bearer '.concat(accessToken);
//       console.log(AuthStr);
//       console.log(obj);
//       axios(productsurl, {
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
// import user from './modules/user';
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
  state: {
    products : [
        {
            id : 1,
            name : "Chelsea Shoes",
            price : 200,
            collectionType: "synkdive-collection",
            shortdesc : "Best Drip in the Market",
            url : "./assets/images/product-01.jpg"
          },
          {
            id : 2,
            name : "Kimono",
            price : 50,
            collectionType: "wildside-collection",
            shortdesc : "Classy, Stylish, Dope",
            url : "./assets/images/product-02.jpg"
          },
          {
            id : 3,
            name : "Watch",
            price : 2500,
            collectionType: "maniac-collection",
            shortdesc : "Elegance built in",
            url : "./assets/images/product-03.jpg"
          },
          {
            id : 4,
            name : "Wallet",
            price : 80,
            collectionType: "synkdive-collection",
            shortdesc : "Sleek, Trendy, Clean",
            url : "./assets/images/product-04.jpg"
          },
          {
            id : 5,
            name : "Lady Handbags",
            price : 230,
            collectionType: "wildside-collection",
            shortdesc : "Fabulous, Exotic, Classy",
            url : "./assets/images/product-05.jpg"
          },
          {
            id : 6,
            name : "Casual Shirts",
            price : 30,
            collectionType: "maniac-collection",
            shortdesc : "Neat, Sleek, Smart",
            url : "./assets/images/product-06.jpg"
          }
    ],
    cart : []
  },
  mutations: {
    addCartItem(state, item){
        item.quantity = 1;
        state.cart.push(item);
    },
    updateCartItem(state, updatedItem){
        state.cart = state.cart.map((cartItem) => {
            if(cartItem.id == updatedItem.id){
                return updatedItem;
            }

            return cartItem;
        })
    },
    removeCartItem(state, item){
        state.cart = state.cart.filter((cartItem) => {
            return cartItem.id != item.id
        })
    }
  }
})