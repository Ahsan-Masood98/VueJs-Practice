<template>
  <h3>{{ countMul2 }}</h3>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // counter () {
    //     return this.$store.getters.finalCounter;
    // },
    // ...mapGetters(['finalCounter'])
    ...mapGetters({
      countMul2: "finalCounter",
    }),
  },
};
</script>
