import api from "../api";

/* var JWT = () => {
    return (Cookies.get("accessToken") ? Cookies.get("accessToken") : "JWT VAZIO");
} */


// STATES
const state = () => ({
    isLogged: false
})

// MUTATIONS
const mutations = {
    setIsLogged(state, payload) {
        state.listMembros = payload
    },
}

// ACTIONS
const actions = {
    async register({commit}, payload) {
        await api 
            .post(`/user/register`, {
                name: payload.name,
                email: payload.email,
                password: payload.password,
                address: payload.address,
                phone: payload.phone,
                })
            .then(() => {
                commit('setIsLogged', false)
            })
            .catch((error) => {
                commit('setIsLogged', false)
                console.log(error.message)
            })
    },
    async login({commit}, payload) {
        await api 
            .post(`/user/login`, {
                email: payload.email,
                password: payload.password,
                })
            .then((response) => {
                let today = new Date();
                today.setHours(today.getHours() + 1);
                commit('setIsLogged', true)
                document.cookie = "accessToken="+response.data.token
            })
            .catch((error) => {
                commit('setIsLogged', false)
                console.log(error.message)
            })
    },
}

// GETTERS
const getters = {
    getIsLogged(state) {
        return state.isLogged
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}