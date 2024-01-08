const app = Vue.createApp({
    data() {
        return {
            myName: '',
        };
    },
    methods: {
        setMyName(event) {
            this.myName = event.target.value;
        },
        resetInput() {
            this.myName = '';
        }
    }
});
app.mount('#events');
