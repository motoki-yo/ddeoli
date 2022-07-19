import api from '../api';
import Cookies from 'js-cookie';

const JWT = () => Cookies.get("jwt");

const state = () => ({
  userError: null,
  authReq: null,
  user: null,  
  userLoaded: false,
  users: null,
  admins: null,
  unauthNotyf: false,
});

const mutations = {
  setUserError(state, value) {
    state.userError = value;
  },
  setAuthReq(state, value) {
    state.authReq = value;
  },
  setUser(state, info) {
    state.user = info;
  },
  setUnauthNotyf(state, value) {
    state.unauthNotyf = value;
  },
  setUserLoaded(state, value) {
    state.userLoaded = value;
  },
  setAdmins(state, value) {
    state.admins = value;
  },
  setUsers(state, value) {
    state.users = value;
  },
};

const actions = {
  // Autenticates a existing user
  async auth({ commit }, login) {
    commit('setAuthReq', false);

    await api.post(
      "user/login", {
        email: login.email,
        password: login.password,
      },
    )
             .then(response => {
               const { user, accessToken } = response.data;
               Cookies.set("jwt", accessToken, {
                 expires: 1,
                 sameSite: 'strict',
               });
               commit("setUser", user);
               commit('setAuthReq', true);
             })
             .catch(err => {
               console.log(`Erro no login: ${err}`);
               commit("setUser", null);
               commit('setAuthReq', true);
             });
  },

  // Register a new user
  async register({ commit }, register) {
    commit('setAuthReq', false);

    await api.post(
      "user/register", {
        name: register.name,
        phone: register.phone,
        email: register.email,
        password: register.password,
      }
    )
             .then(response => {
               const { user, accessToken } = response.data;
               Cookies.set("jwt", accessToken, {
                 expires: 1,
                 sameSite: 'strict',
               });
               commit("setUser", user);
               commit('setAuthReq', true);
             })
             .catch(err => {
               console.log(`Erro no login: ${err}`);
               commit("setUser", null);
               commit('setAuthReq', true);
             });
  },

  // Logs out
  async logout({ commit }, ) {
    Cookies.remove("jwt");
    commit("setUser", null);
  },

  async unauthNotyf({ commit }, state) {
    commit("setUnauthNotyf", state);
  },

  // Loads user (used after updating info)
  async loadUser({commit, state}) {
    commit("setUserError", null);
    commit("setUserLoaded", false);

    await api.get(`user/${state.user?._id}`,
         {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        },
    )
              .then(response => {
                commit("setUser", response.data);
                commit("setUserLoaded", true);
                commit("setUserError", null);
             })
             .catch(err => {
                console.log(`Erro ao carregar usuário: ${err}`);
                commit("setUserLoaded", false);
                commit("setUserError", `Erro ao carregar usuário: ${err}`);
             });


  },

  // Updates user info
  async updateUserInfo({ dispatch, state, commit }, updated) {
    commit("setUserError", null);

    await api.put(`user/${state.user?._id}`, 
        {
          name: updated.name,
          phone: updated.phone,
          email: updated.email,
          curPassword: updated.curPassword,
          newPassword: updated.newPassword,
        }, {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        },
    )
              .then(async () => {
                await dispatch("loadUser");
                commit("setUserError", null);
             })
             .catch(err => {  
               console.log(`Erro ao atualizar informações: ${err}`);
               commit("setUserError", `Erro ao atualizar informações: ${err}`);
             });
  },

  // Adds an card to a user
  async addCard({ commit, dispatch, state }, card) {
    commit("setUserError", null);

    await api.post("card/", 
        {
          cardNumber: card.cardNumber,
          dueData: card.dueData,
          ownerName: card.ownerName,
          securityCode: card.securityCode,
          userId: state.user?._id
        }, {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        },
    )
            .then(async () => {
                await dispatch("loadUser");
                commit("setUserError", null);
             })
            .catch(err => {  
                console.log(`Erro ao adicionar cartão: ${err}`);
                commit("setUserError", `Erro ao adicionar cartão: ${err}`);
             });
  },

  // Deletes a card from a user
  async deleteCard({ commit, dispatch, state }, { cardId }) {
    commit("setUserError", null);

    await api.delete(`card/${cardId}`,
        {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          },
          data: {
            userId: state.user._id
          }
        },
    )
            .then(async () => {
                await dispatch("loadUser");
                commit("setUserError", null);
             })
            .catch(err => {  
               console.log(`Erro ao deletar cartão: ${err}`);
               commit("setUserError", `Erro ao deletar cartão: ${err}`);
             });
  },

  // Adds an address to a user
  async addAddress({ commit, dispatch, state }, address) {
    commit("setUserError", null);

    await api.post("address/", 
        {
          name: address.name,
          phone: address.phone,
          country: address.country,
          postalCode: address.postalCode,
          address: address.address,
          complemment: address.complemment,
          state: address.state,
          city:  address.city,
          userId: state.user?._id
        }, {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        },
    )
            .then(async () => {
                await dispatch("loadUser");
                commit("setUserError", null);
             })
            .catch(err => {  
                console.log(`Erro ao adicionar endereço: ${err}`);
                commit("setUserError", `Erro ao adicionar endereço: ${err}`);
             });
  },

  // Deletes an address from a user
  async updateAddress({ commit, dispatch }, { addressId, ...updateAddress }) {
    commit("setUserError", null);
    
    await api.put(`address/${addressId}`, 
        updateAddress, {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        },
    )
            .then(async () => {
                await dispatch("loadUser");
                commit("setUserError", null);
             })
            .catch(err => {  
                console.log(`Erro ao atualizar endereço: ${err}`);
                commit("setUserError", `Erro ao atualizar endereço: ${err}`);
             });
  },

  // Deletes a address from a user
  async deleteAddress({ commit, dispatch, state }, { addressId }) {
    commit("setUserError", null);

    await api.delete(`address/${addressId}`,
        {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          },
          data: {
            userId: state.user._id
          }
        },
    )
            .then(async () => {
                await dispatch("loadUser");
                commit("setUserError", null);
             })
            .catch(err => {  
                console.log(`Erro ao deletar endereço: ${err}`);
                commit("setUserError", `Erro ao deletar endereço: ${err}`);
             });
  },

  // Load the users if user that requested it is an admin
  async loadUsers({ commit }) {
    commit("setUsers", null);

    await api.get('admin/users',
        {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        },
    )
            .then(response => {
                commit("setUsers", response.data);
             })
            .catch(err => {  
                console.log(`Erro ao carregar usuários: ${err}`);
                commit("setUsers", null);
             });
  },

  // Load the admins if user that requested it is an admin
  async loadAdmins({ commit }) {
    commit("setAdmins", null);

    await api.get('admin/admins',
        {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        },
    )
            .then(response => {
                commit("setAdmins", response.data);
             })
            .catch(err => {  
                console.log(`Erro ao carregar usuários: ${err}`);
                commit("setAdmins", null);
             });
  },

  // Deletes an user if the user that requested it is an admin
  async deleteUser({ dispatch, commit }, { userId }) {
    commit("setUsers", null);
    
    await api.delete(`admin/user/${userId}`,
        {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        },
    )
            .then(async () => {
              await dispatch("loadUsers");
              commit("setUsers", null);
            })
            .catch(err => {  
              console.log(`Erro ao deletar usuário: ${err}`);
              commit("setUsers", "Erro ao deletar usuário!");
              commit("setUsers", err);
             });
  },

  // Promotes an user to admin if the user that requested it is an admin
  async promoteUser({ dispatch, commit }, { userId }) {
    commit("setUserError", null);
    
    await api.put(`admin/promote/${userId}`, {},
        {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        },
    )
            .then(async () => {
                dispatch("loadUsers");
                commit("setUserError", null);
            })
            .catch(err => {  
                console.log(`Erro ao promover usuário: ${err}`);
                commit("setUserError", "Erro ao promover usuário");
            });
  },
  
  // Promotes an user to admin if the user that requested it is an admin
  async demoteUser({ dispatch, commit, state }, { userId }) {
    commit("setUserError", null);
    
    if (userId == state.user._id) {
      commit("setUserError", "Você não pode se auto rebaixar!");
      return;
    }
    
    await api.put(`admin/demote/${userId}`, {},
        {
          headers: {
            "authorization": `Bearer ${JWT()}`,
          }
        },
    )
            .then(async () => {
                dispatch("loadAdmins");
                commit("setUserError", null);
            })
            .catch(err => {  
              console.log(`Erro ao promover usuário: ${err}`);
              commit("setUserError", "Erro ao rebaixar usuário!");
            });
  },

};

const getters = {
  getAuthReceived(state) { return state.authReq; },
  getIsLogged(state) { return state.user != null; },
  getUser(state) { return state.user; },
  getUserError(state) { return state.userError; },
  getUserLoaded(state) { return state.userLoaded; },
  getUnauthNotyf(state) { return state.unauthNotyf; },
  getPermDenied(state) { return !state.user.isAdmin; },
  getUsers(state) {return state.users; },
  getAdmins(state) {return state.admins; },
};

export default {
  state,
  mutations,
  actions,
  getters,
};