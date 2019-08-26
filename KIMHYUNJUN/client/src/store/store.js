import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const resourceHost = "http://localhost:4000";

const enhanceAccessToken = () => {
  const { accessToken } = localStorage;
  if (accessToken) {
    return (axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`);
  }
};

enhanceAccessToken();

export default new Vuex.Store({
  state: {
    accessToken: null
  },
  getters: {
    isAuthenticated(state) {
      state.accessToken = state.accessToken || localStorage.accessToken;
      return state.accessToken;
    }
  },
  mutations: {
    REGISTER(state, { accessToken }) {
      state.accessToken = accessToken;
    },
    LOGIN(state, { accessToken }) {
      state.accessToken = accessToken;

      localStorage.accessToken = accessToken;
    },
    LOGOUT(state) {
      state.accessToken = null;
      delete localStorage.accessToken;
    }
  },
  actions: {
    REGISTER({ commit }, { name, email, password }) {
      return axios
        .post(`${resourceHost}/register`, { name, email, password })
        .then(({ data }) => commit("REGISTER", data));
    },
    LOGIN({ commit }, { email, password }) {
      return axios
        .post(`${resourceHost}/login`, { email, password })
        .then(({ data }) => {
          commit("LOGIN", data);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${data.accessToken}`;
        });
    },
    LOGOUT({ commit }) {
      axios.defaults.headers.common["Authorization"] = undefined;
      commit("LOGOUT");
    }
  }
});
