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
    products: []
})

const mutations = {
    setProducts(state, payload) {
        state.products = payload.product
    },
}

// ACTIONS
const actions = {
    async registerProduct({commit}, payload) {
        await api 
            .post(`/product/create`, {
            img:payload.newImg,
            name:payload.newName,
            price:payload.newPrice,
            qtyInInventory:payload.newQty,
            description:payload.newDescription,
            collectionType:payload.newCollection,
            sizes: payload.sizes,
                })
            .then(() => {
                console.log("Sucesso")
            })
            .catch((error) => {
                commit('setIsLogged', false)
                console.log(error.message)
            })
    },


    async allProducts({commit}) {
        await api 
            .get(`/product/all`, {
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


    async delete({commit}, payload) {
        await api 
            .put(`/product/d/delete`,
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


    async updateProduct({commit}, payload) {
        console.log(payload)
        await api 
            .put(`/product/`+payload._id, {
                image: payload.image,
                name: payload.name,
                collectionType: payload.collectionType,
                price: payload.price,
                qtyInInventory: payload.qtyInInventory,
                description: payload.description,
                sizes: payload.sizes
                },{
                    headers: {
                    'x-access-token': getCookie("accessToken")
                    }
                })
            .then(() => {
                commit('setIsLogged', true)
            })
            .catch((error) => {
                commit('setIsLogged', false)
                console.log(error.message)
            })
    },
}

const getters = {
    getProducts(state) {
        return state.products
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}
