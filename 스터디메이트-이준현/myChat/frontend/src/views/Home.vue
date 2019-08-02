<template>
    <div class="login">
        <loginBar></loginBar>
        <loginForm></loginForm>
    </div>
</template>
<script>
import LoginBar from '@/components/LoginBar.vue'
import LoginForm from '@/components/LoginForm.vue'

export default {
    name : 'home',
    components : {
        LoginBar,
        LoginForm
    }
}
</script>

