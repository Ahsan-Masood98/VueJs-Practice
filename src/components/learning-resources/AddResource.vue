<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" ref="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          type="text"
          rows="3"
          name="description"
          id="description"
          ref="description"
        >
        </textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" ref="link" />
      </div>
      <div class="form-control">
        <base-button type="submit">Add Reource</base-button>
      </div>
    </form>
  </base-card>
  <teleport to="body">
    <base-dialog
      v-if="inputIsInvalid"
      title="Invalid Input"
      @close="confirmError"
    >
      <template #default>
        <p>Unfortunately, at least one input is invalid.</p>
        <p>Please recheck all your inputs and enter the data correctly</p>
      </template>
      <template #actions>
        <base-button @click="confirmError">Okay</base-button>
      </template>
    </base-dialog>
  </teleport>
</template>

<script>
import { Teleport } from 'vue';

export default {
  data() {
    return {
      title: '',
      description: '',
      link: '',
      inputIsInvalid: false,
    };
  },
  inject: ['addResource'],
  methods: {
    submitData() {
      this.title = this.$refs.title.value;
      this.description = this.$refs.description.value;
      this.link = this.$refs.link.value;
      if (
        this.title.trim() === '' ||
        this.description.trim() === '' ||
        this.link.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }
      this.addResource(this.title, this.description, this.link);
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
  components: { Teleport },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}
input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}
.form-control {
  margin: 1rem 0;
}
</style>
