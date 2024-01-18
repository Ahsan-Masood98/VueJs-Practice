<template>
  <form>
    <div>
      <label>Name</label>
      <input type="text" required ref="name" />
    </div>
    <div>
      <label>Phone</label>
      <input type="text" required ref="phone" />
    </div>
    <div>
      <label>Email</label>
      <input type="text" required ref="email" />
    </div>
    <div>
      <button @click="submitData">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["new-friend-data"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    submitData(e) {
      e.preventDefault();
      this.name = this.$refs.name.value;
      this.phone = this.$refs.phone.value;
      this.email = this.$refs.email.value;
      this.$emit("new-friend-data", this.name, this.phone, this.email);
    },
  },
};
</script>