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
});

app.mount('#app');
