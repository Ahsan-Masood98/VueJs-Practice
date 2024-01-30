<template>
    <h3> {{ counter }} </h3>
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