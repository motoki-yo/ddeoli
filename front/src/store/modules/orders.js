import api from "../api";

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

const state = () => ({
    orders: []
})

const mutations = {
    setOrders(state, payload) {
        state.orders = payload.order
    },
}

// ACTIONS
const actions = {
    async registerOrder({commit}, payload) {
        await api 
            .post(`/order/create`, {
            userEmail:payload.newUserEmail,
            items:payload.newItems,
            totalPrice:payload.newTotalPrice,
            orderAddress:payload.newOrderAddress
            })
            .then(() => {
                window.alert(console.log("Successful order request! Your items are on the way."))
            })
            .catch((error) => {
                commit('setIsLogged', false)
                window.alert(console.log("Could not place your order. We're sorry. " + error.message))
            })
    },


    async allOrders({commit}) {
        await api 
            .get(`/order/all`, {
                    headers: {
                    'x-access-token': getCookie("accessToken")
                    }
                })
            .then((response) => {
                commit('setProducts', response.data)
            })
            .catch((error) => {
                commit('setIsLogged', false)
                console.log(error.message)
            })
    },


    async deleteOrder({commit}, payload) {
        await api 
            .put(`/order/d/delete`,
            { id : payload._id }, {
                    headers: {
                    'x-access-token': getCookie("accessToken")
                    }
                })
            .then(() => {
                console.log("Sucesso")
            })
            .catch((error) => {
                commit('setIsLogged', false)
                console.log(error.message)
            })
    },
}

const getters = {
    getOrders(state) {
        return state.orders
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}
