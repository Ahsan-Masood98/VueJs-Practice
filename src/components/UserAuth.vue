<template>
    <button v-if="!isAuth" @click="longIn">Login</button>
    <button v-else @click="logOut">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        longIn() {
            this.$store.dispatch('login');
        },
        ...mapActions({
            logOut: 'logout',
        })
    },
    computed: {
        isAuth(){
            return this.$store.getters.getIsAuth;
        }
    }
}
</script>