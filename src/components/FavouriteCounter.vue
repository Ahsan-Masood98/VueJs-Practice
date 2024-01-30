<template>
  <h3>Normalized: {{ counter }}</h3>
  <p>And More ....</p>
</template>

<script>
export default {
  computed: {
    counter() {
      // without namespaced named state
      // return this.$store.getters.normalizedCounter;
      
      // when accessing namespaced state
      return this.$store.getters['counter/normalizedCounter'];

    },
  },
};
</script>
