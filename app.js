const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            myName: '',
        };
    },
    watch: {
        // watchers only run on data properties and have prev and new value as function args
        // its useful to use them instead computed when you want to do something when certain conditions met by the data property 
        counter(value){
            if(value>50){
                this.counter =0
            }
        },
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
        add(num){
            this.counter = this.counter + num;
        },
        setMyName(event) {
            this.myName = event.target.value;
        },
        resetInput() {
            this.myName = '';
        }
    }
})
app.mount('#events');
