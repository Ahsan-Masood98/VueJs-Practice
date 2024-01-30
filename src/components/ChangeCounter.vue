<template>
  <button @click="incAsync">Add 1 Asyncronously</button>
  <button @click="incrs({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment')
    // }
    // ...mapActions(["increment", "increase"]),
    // ...mapActions({
    //   incAsync: "increment",
    //   incrs: "increase",
    // }),

    // when accessing namespaced state
    // ...mapActions("counter", ["increment", "increase"]),
    ...mapActions("counter", {
      incAsync: "increment",
      incrs: "increase",
    }),
  },
};
</script>
