<template>
    <h3>Normalized: {{ counter }} </h3>
    <p>And More ....</p>
</template>

<script>
export default {
 computed: {
    counter () {
        return this.$store.getters.normalizedCounter;
    },
 }   
}
</script>