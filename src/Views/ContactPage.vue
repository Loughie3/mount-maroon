<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea
              class="form-control"
              id="message"
              rows="5"
              v-model="message"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      console.log(formData); // Send the data to the server or do other things with it here
    },
  },
};
</script>

<style></style>
