import api from "../api";
import Cookies from 'js-cookie';

const JWT = () => Cookies.get("jwt");

const state = () => ({
  productError: null,
  productList: null,
  currentProduct: null,
  currentLoaded: null,
  cartProducts: {},
  cartProductsLoaded: null,
  collections: {},
  genres: [],
});

const mutations = {
  setProductList(state, list) {
    state.productList = list;
  },
  setCurrentProduct(state, product) {
    state.currentProduct = product;
  },
  setCurrentLoaded(state, cur) {
    state.currentLoaded = cur;
  },
  setCartProducts(state, items) {
    state.cartProducts = items;
  },
  setCartProductsLoaded(state, cur) {
    state.cartProductsLoaded = cur;
  },
  setProductError(state, value) {
    state.productError = value;
  },
  setProductCollection(state, collection) {
    state.collections[collection.name] = collection.data;
  },
  setGenres(state, genres) {
    state.genres = genres;
  },
};

const actions = {
  //Loads the product list for the products page
  async loadProducts({ commit }) {
    await api.get("product/")
             .then(productList => {
               commit("setProductList", productList.data);
             })
             .catch(err => {
               console.log(`Erro ao carregar lista de produtos: ${err}`);
               commit("setProductList", []);
             });
  }, 

  // Loads a product for a product page
  async loadProduct({ commit }, id) {
    commit('setCurrentLoaded', false);
    await api.get(`product/${id}`)
             .then(response => {
               commit("setCurrentProduct", response.data);
             })
             .catch(err => {
               console.log(`Erro ao carregar produto: ${err}`);
               commit("setCurrentProduct", null);
             });
    commit('setCurrentLoaded', true);
  },

  // Loads the cart with the products   
  async loadCart({ commit, state }, items) {
    commit('setCartProductsLoaded', false);
    
    // Searches for ids that match 
    // TODO melhor passar isso pro mutations
    const cartIds = Object.keys(items);
    let cartInfos = {};
    for (const id of cartIds) {
      cartInfos[id] = state.productList.find(p => p._id == id);
    }

    commit('setCartProducts', cartInfos);
    commit('setCartProductsLoaded', true);
  },

  // Adds a product to the product list
  async addProduct( { dispatch, commit }, product) {
    commit('setProductError', null);

    await api.post('admin/product/', {
      title: product?.title,
      launchDate: product?.launchDate,
      frontCover: product?.frontCover,
      artists: product?.artists,
      genres: product?.genres,
      shortDescription: product?.shortDescription,
      longDescription: product?.longDescription,
      extraInfo: product?.extraInfo,
      price: product?.price,
      amountInStock: product?.amountInStock
    }, {
        headers: {
         "authorization": `Bearer ${JWT()}`,
        }
      }
    )
    .then(async () => {
      await dispatch("loadProducts");
      commit('setProductError', null);
    })
    .catch(err => {
      console.log(`Erro ao adicionar produto: ${err}`);
      commit('setProductError', "Erro ao adicionar produto");
    });
  },

  // Updates a product from the product list
  async updateProduct( { dispatch, commit }, { productId, ...product }) {
    commit('setProductError', null);

    await api.put(`admin/product/${productId}`, {
      title: product?.title,
      launchDate: product?.launchDate,
      frontCover: product?.frontCover,
      artists: product?.artists,
      genres: product?.genres,
      shortDescription: product?.shortDescription,
      longDescription: product?.longDescription,
      extraInfo: product?.extraInfo,
      price: product?.price,
      amountInStock: product?.amountInStock
    }, {
        headers: {
          "authorization": `Bearer ${JWT()}`,
        }
      }
    )
    .then(async () => {
      await dispatch("loadProducts");
      commit('setProductError', null);
    })
    .catch(err => {
      console.log(`Erro ao atualizar produto: ${err}`);
      commit('setProductError', "Erro ao atualizar produto!");
    });
  },

  // Deletes a product from the product list
  async deleteProduct({ dispatch, commit }, { productId }) {
    commit('setProductError', null);

    await api.delete(`admin/product/${productId}`,
        {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        }
    )
      .then(async () => {
        await dispatch("loadProducts");
        commit('setProductError', null);
      })
      .catch(err => {
        console.log(`Erro ao excluir produto da lista: ${err}`);
        commit('setProductError', "Erro ao excluir produto da lista");  
      });
  },

  // Loads product collection by name
  async loadProductCollection({ commit }, name) {
    await api.get(`product/collection/${name}`)
             .then(response => {
               commit("setProductCollection", {
                 name: name,
                 data: response.data
               });
             })
             .catch(err => {
               console.log(`Erro ao carregar coleção: ${err}`);
             });
  },

  // Loads product genres
  async loadGenres({ commit }, ) {
    await api.get(`product/genres`)
             .then(response => {
               commit("setGenres", response.data);
             })
             .catch(err => {
               console.log(`Erro ao carregar gêneros: ${err}`);
             });
  },
};

const getters = {
  getProductList(state) { return state.productList; },
  getCurrentProduct(state) { return state.currentProduct; },
  getCurrentLoaded(state) { return state.currentLoaded; },
  getCartProducts(state) { return state.cartProducts; },
  getCartProductsLoaded(state) { return state.cartProductsLoaded; },
  getProductError(state) { return state.productError; },
  getProductCollections(state) { return state.collections; },
  getGenres(state) { return state.genres; },
};

export default {
  state,
  mutations,
  actions,
  getters,
};