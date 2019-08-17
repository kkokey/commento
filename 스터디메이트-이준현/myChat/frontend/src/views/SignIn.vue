<template>
  <div class="login">
    <loginBar></loginBar>
    <SignForm></SignForm>
  </div>
</template>
<script>
// eslint-disable-next-line import/extensions
import LoginBar from '@/components/LoginBar.vue';
// eslint-disable-next-line import/extensions
import SignForm from '@/components/SignForm.vue';

export default {
  name: 'SignIn',
  components: {
    LoginBar,
    SignForm,
  },
};
</script>
