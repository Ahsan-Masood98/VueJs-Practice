<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favourite-counter></favourite-counter>
    <button @click="addNumber">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from "@/components/BaseContainer.vue";
import ChangeCounter from "@/components/ChangeCounter.vue";
import TheCounter from "@/components/TheCounter.vue";
import FavouriteCounter from "@/components/FavouriteCounter.vue";
import UserAuth from "@/components/UserAuth.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    UserAuth,
    FavouriteCounter,
    TheCounter,
    ChangeCounter,
    BaseContainer,
  },
  computed: {
    ...mapGetters({
      isAuth: "getIsAuth"
    })
  },
  methods: {
    addNumber() {
      // this.$store.commit("increase", { value: 10 });
      this.$store.dispatch({
        type: "increase",
        value: 10,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
