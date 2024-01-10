const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
            boxDSelected: false,
        };
    },
    methods: {
        boxSelected(box) {
            console.log(box);
            if (box === 'A') {
                console.log("in A");
                this.boxASelected = !this.boxASelected;
                console.log(this.boxASelected);
            } else if (box === 'B') {
                console.log("in B");
                this.boxBSelected = !this.boxBSelected;
            } else if (box === 'C') {
                console.log("in C");
                this.boxCSelected = !this.boxCSelected;
            } else if (box === 'D') {
                console.log("in D");
                this.boxDSelected = !this.boxDSelected;
            }
        },        
    }
})
app.mount('#styling')