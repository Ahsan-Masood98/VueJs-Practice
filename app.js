const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enterdGoalValue:'',
     };
  },
  methods: {
    addGoal() {
     this.goals.push(this.enterdGoalValue);
    }
  }
});

app.mount('#user-goals');
