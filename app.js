const app = Vue.createApp({
    data() {
        return {
            currentUserInput: '',
            message: 'Vue is great!',
        };
    },
    methods: {
        setText() {
            // this.message = this.currentUserInput;
            // $ sign varibles like $ref tells us that this is vue specific not default javascript.
            // this.$refs.userText will have an object containing all the info about that specific html element
            this.message = this.$refs.userText.value;
        },
    },
    // Creation Life Cycle
    beforeCreate() {
        // Vue is not crated yet or initialized in the project
        // and you cant see any thing vue related on the screen
        console.log('before create');
    },
    created() {
        // Vue is crated
        // but you still cant see any thing vue related on the screen
        console.log('created');
    },
    beforeMount() {
        // right before anything we see is mounted in the screen 
        console.log('beforeMount');
    },
    mounted() {
        // As I explained, because at this point of time this Vue app was mounted to the screen.
        //  It was initialized internally, all the data was processed, 
        // the template was compiled and it's showing its output on the screen.
        console.log('mounted');
    },
    // Update Cycle
    beforeUpdated() {
        // right before any thing updated on the screen 
        console.log('beforeUpdated');
    },
    updated() {
        // right after the updates visible on the screen
        console.log('updated');

    },
    // Unmount Cycle 
    beforeUnmount() {
        // right before the #app is unmounted 
        console.log('beforeUnmount');
    },
    unmounted() {
        // right after the #app is unmounted
        console.log('unmounted');
    },
});

app.mount('#app');

setTimeout(function () {
    // to unmount after 3 seconds
    app.unmount()
}, 3000)