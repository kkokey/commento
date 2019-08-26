<template>
  <div class="login">
    <loginForm></loginForm>
  </div>
</template>
<script>
// eslint-disable-next-line import/extensions
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'home',
  components: {
    LoginForm,
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.dir(this.$store);
  },
};
</script>
