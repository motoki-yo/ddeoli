import api from "../api";
import Cookies from 'js-cookie';

const JWT = () => Cookies.get("jwt");

const state = () => ({
  cartList: {},
  currentOrder: null,
  orderSuccess: null,
  outOfStock: null,
});

const mutations = {
  addToCart(state, item) {
    state.cartList[item.id] = (state.cartList[item.id] || 0) + item.qnt;
  },
  removeFromCart(state, item) {
    if (!state.cartList[item.id]) return;
    state.cartList[item.id] -= item.qnt;
    if (state.cartList[item.id] <= 0)
      delete state.cartList[item.id];
  },
  setCart(state, items) {
    state.cartList = items;
  },
  setCurrentOrder(state, order) {
    state.currentOrder = order;
  },
  setOrderSuccess(state, v) {
    state.orderSuccess = v;
  },
  setOutOfStock(state, titles) {
    state.outOfStock = titles;
  },
};

const actions = {
  addToCart({ commit, state }, payload) {
    console.log(payload.product);
    if (payload.product.amountInStock < (state.cartList[payload.product._id] || 0) + payload.qnt)
      return;
    commit('addToCart', {
      id: payload.product._id,
      qnt: payload.qnt
    });
  },
  removeFromCart({ commit }, payload) {
    commit('removeFromCart', {
      id: payload?.id,
      qnt: payload?.qnt
    });
  },
  setCurrentOrder({ commit }, orderInfo) {
    commit("setCurrentOrder", orderInfo);
  },
  async finishOrder({ commit, state }, ) {
    commit("setOrderSuccess", null);

    await api.post("order", {
      addressId: state.currentOrder.address,
      method: ["boleto", "pix"].includes(state.currentOrder.method) ?
        state.currentOrder.method :
        "card",
      ...(!["boleto", "pix"].includes(state.currentOrder.method) ? {
        cardId: state.currentOrder.method,
      } : {}),
      cart: state.cartList,
    }, {
      headers: {
        "authorization": `Bearer ${JWT()}`,
      }
    })
             .then(() => {
               commit("setOrderSuccess", true);
               commit("setCurrentOrder", null);
               commit("setCart", {});
               commit("setOutOfStock", null);
             })
             .catch(err => {
               console.log(`Erro ao adicionar cartão: ${err}`);
               commit("setOrderSuccess", false);
               if (err.response?.status == 405)
                 commit("setOutOfStock", err.response?.data?.outOfStock);
               else
                 commit("setOutOfStock", null);
             });
  },
};

const getters = {
  getCartList(state) { return state.cartList; },
  getOrderInfo(state) { return state.currentOrder; },
  getOrderSuccess(state) { return state.orderSuccess; },
  getOutOfStock(state) { return state.outOfStock; },
};

export default {
  state,
  mutations,
  actions,
  getters,
};