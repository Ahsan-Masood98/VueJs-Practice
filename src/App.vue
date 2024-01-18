<template>
  <div>
    <TheHeader />
    <button @click="setSelectedComponents('active-goals')">Active Goals</button>
    <button @click="setSelectedComponents('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponents === 'active-goals'"></active-goals> -->
    <!-- <manage-goals v-if="selectedComponents === 'manage-goals'"></manage-goals> -->
    <!-- Dynamic Components -->
    <keep-alive>
      <component :is="selectedComponents"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    TheHeader: TheHeader,
    "active-goals": ActiveGoals,
    "manage-goals": ManageGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
      selectedComponents:'',
    };
  },
  methods:{
    setSelectedComponents(cmp) {
      this.selectedComponents = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
