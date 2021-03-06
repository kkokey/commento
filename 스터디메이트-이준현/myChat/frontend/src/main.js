// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { store } from './store/store';
// eslint-disable-next-line import/first
import axios from 'axios';
// eslint-disable-next-line import/first
// import io from 'socket.io-client';

Vue.prototype.$http = axios;
// Vue.prototype.$socket = io.connect('http://localhost:3000/');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
