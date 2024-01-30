<template>
  <div>
    <button @click="confirmInput">Confirm</button>
    <button @click="saveChanges">Confirm</button>
    <ul>
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"
      ></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  components: {
    UserItem,
  },
  inject: ["users"],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      //do something
      // this.$router.push("/teams"); // push for programmatic navigation
      this.$router.push({
        name: "teams",
      });
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteEnter(_, _2, next) {
    console.log("UserList Component beforeRouteEnter");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("Userlist component beforeRouteLeave");
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm(
        "Are you shure? you got some unsaved changes!"
      );
      next(userWantsToLeave);
    }
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
