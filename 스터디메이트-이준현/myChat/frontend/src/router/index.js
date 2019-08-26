import Vue from 'vue';
import Router from 'vue-router';
import home from '@/views/Home';
import SignIn from '@/views/SignIn';
import chat from '@/views/Chat';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn,
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat,
    },
  ],
});
