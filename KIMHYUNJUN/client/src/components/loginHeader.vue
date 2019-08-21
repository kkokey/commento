<template>
  <div class="header">
    <span class="header__container-home">LOGO</span>
    <span class="header__container-login">JOIN</span>
    <span class="header__container-join">LOGIN</span>
  </div>
</template>

<script>
const A = console.log('asdfsaf');
export default {
  name: 'loginHeader'
};
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.9);
  /* background-image: linear-gradient(to top, #fdc830, #f37335); */
  color: white;
  display: flex;
  font-size: 20px;
  font-weight: 600;
  align-items: center;
}

.header__container-home {
  margin-left: 20vh;
  justify-self: flex-start;
  margin-right: auto;
}

.header__container-join {
  margin-right: 20vh;
}

.header__container-login {
  margin-right: 20px;
}
</style>