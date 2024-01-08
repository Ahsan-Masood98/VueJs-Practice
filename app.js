const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            myName: '',
        };
    },
    computed: {
        // we will use it like data property not like method [fulname()]
        fullname() {
            console.log('Running Again...');
            if (this.myName === '') {
                return "";
            }
            return this.myName + ' ' + "Masood"
        },
    },
    methods: {
        setMyName(event) {
            this.myName = event.target.value;
        },
        resetInput() {
            this.myName = '';
        }
    }
})
app.mount('#events');
