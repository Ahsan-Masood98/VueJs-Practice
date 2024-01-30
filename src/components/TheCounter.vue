<template>
  <h3>Narmal: {{ counter }}</h3>
  <h3>Double: {{ countMulBy2 }}</h3>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // without namespaced named state
    // counter () {
    //     return this.$store.getters.doubleCounter;
    // },
    // ...mapGetters(['doubleCounter'])
    // ...mapGetters({
    //   countMulBy2: "doubleCounter",
    //   counter: "getCounter",
    // }),

    // when accessing namespaced state
    // ...mapGetters("counter", ['doubleCounter', "getCounter"])
    // 1st args is the namespaced name of the state
    ...mapGetters("counter", {
      countMulBy2: "doubleCounter",
      counter: "getCounter",
    }),
  },
};
</script>
