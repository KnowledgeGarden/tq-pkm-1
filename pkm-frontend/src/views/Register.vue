<template>
  <b-container class="text-center" >
    <h1>Register</h1>
    <b-form id="create-post-form" @submit.prevent="register">
      <b-form-group
        class="col-md-4 text-center"
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" 
        class="col-md-4 text-center" label="Handle (required):" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.handle"
          required
          placeholder="Enter handle"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" 
        class="col-md-4 text-center" label="Your Full Name (required):" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" 
        class="col-md-4 text-center" label="Webpage (optional):" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.url"
          placeholder="Enter url"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-5" class="col-md-4 text-center">
        <label for="text-password">Password</label>
        <b-input type="password" required v-model="form.password" id="text-password" aria-describedby="password-help-block"></b-input>
          <b-form-text id="password-help-block">
            Your password must be 8-20 characters long, contain letters and numbers, and must not
            contain spaces, special characters, or emoji.
          </b-form-text>
      </b-form-group>
      <button variant="primary">Submit</button>
    </b-form>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
        form: {
          email: '',
          name: '',
          handle: '',
          url: '',
          password: ''
        }
    };
  },
  methods: {
    register () {
      console.log('Register')
    }
  }
};
</script>
<style>
</style>