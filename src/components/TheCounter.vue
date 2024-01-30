<template>
    <h3>Narmal: {{ counter }}</h3>
    <h3>Double: {{ countMulBy2 }}</h3>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // counter () {
    //     return this.$store.getters.doubleCounter;
    // },
    // ...mapGetters(['doubleCounter'])
    ...mapGetters({
      countMulBy2: "doubleCounter",
      counter: "getCounter"
    }),
  },
};
</script>
