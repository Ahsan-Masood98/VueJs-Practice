const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Learn Vue!',
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Finish the course and Master Vue!',
            htmlCourseGoal: '<h1>Master Vue!</h1>',
            vueLink: "https://vuejs.org/"
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        },
        outputHtmlGoal() {
            return this.htmlCourseGoal;
        }
    },
});
app.mount('#user-goal');