const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enterdGoalValue: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enterdGoalValue);
    },
    removeGoal(idx) {
      // splice will remove the index and 2nd arg means how many elements to remove 
      this.goals.splice(idx, 1)
    }
  }
});

app.mount('#user-goals');
