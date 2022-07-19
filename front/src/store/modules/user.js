import api from "../api";

/* var JWT = () => {
    return (Cookies.get("accessToken") ? Cookies.get("accessToken") : "JWT VAZIO");
} */
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

// STATES
const state = () => ({
    isLogged: false,
    user: {
        name: "",
        email: "",
        address: "",
        phone: "",
        id: "",
    }
})

// MUTATIONS
const mutations = {
    setIsLogged(state, payload) {
        state.isLogged = payload
    },
    setName(state, payload) {
        state.user.name = payload
    },
    setEmail(state, payload) {
        state.user.email = payload
    },
    setAddress(state, payload) {
        state.user.address = payload
    },
    setPhone(state, payload) {
        state.user.phone = payload
    },
    setId(state, payload) {
        state.user.id = payload
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
                commit('setIsLogged', true)
                commit('setName', response.data.user.name)
                commit('setEmail', response.data.user.email)
                commit('setAddress', response.data.user.address)
                commit('setPhone', response.data.user.phone)
                commit('setId', response.data.user._id)
                document.cookie = "accessToken="+response.data.token
            })
            .catch((error) => {
                commit('setIsLogged', false)
                console.log(error.message)
            })
    },


    async update({commit}, payload) {
        await api 
            .put(`/user/`+payload.id, {
                email: payload.email,
                name: payload.name,
                phone: payload.phone,
                address: payload.address,
                },{
                    headers: {
                    'x-access-token': getCookie("accessToken")
                    }
                })
            .then((response) => {
                commit('setIsLogged', true)
                commit('setName', response.data.user.name)
                commit('setEmail', response.data.user.email)
                commit('setAddress', response.data.user.address)
                commit('setPhone', response.data.user.phone)
                commit('setId', response.data.user._id)
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
    },
    getName(state) {
        return state.user.name
    },
    getEmail(state) {
        return state.user.email
    },
    getAddress(state) {
        return state.user.address
    },
    getPhone(state) {
        return state.user.phone
    },
    getId(state) {
        return state.user.id
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}