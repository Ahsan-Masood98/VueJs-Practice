const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: '',
        };
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        reduce() {
            this.counter--;
        },
        setName(event, lastName = '') {
            this.name = event.target.value + ' ' + lastName;
        },
        confirmedInput(){
            this.confirmedName = this.name
        },
        submitFormWithoutModifier(event) {
            // without event modifier we have to prevent default behaviour by ourselve
            event.preventDefault();
            alert('Submitted  Without Event Modifier!')
        },
        submitFormWithModifier() {
            alert('Submitted With Event Modifier!')
        },
    }
});
app.mount('#events');
