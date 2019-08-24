// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export const store = new Vuex.Store({
  state: {
    user_name: '익명',
    user_id: '',
  },
  mutations: {
    addDetail(state, payload) {
      state.user_name = payload.user_name;
      state.user_id = payload.user_id;
    },
  },
});
