<template>
  <div class="login">
    <SignForm></SignForm>
  </div>
</template>
<script>
// eslint-disable-next-line import/extensions
import SignForm from '@/components/SignForm.vue';

export default {
  name: 'SignIn',
  components: {
    SignForm,
  },
};
</script>
