const app = Vue.createApp({
    // data: function () {}
    data() {
        //and it will always return Object
        return {
            courseGoal: 'Finish the course and learn Vue!',
        };
    },
});
// #user-goal is an id in an html tag on which you want to connect vue with
app.mount('#user-goal');