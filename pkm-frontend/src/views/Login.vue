<template>
    <b-container class="text-center" fluid>
      <h1>Login</h1>
      <b-form id="create-post-form" @submit.prevent="login">
        <div class="text-center">
          <div>
            <input class="col-md-4" type="text" id="email" v-model="email" name="entry" placeholder="Email">
          </div>
          
          <div>
            <input class="col-md-4" type="password" id="password" v-model="password" name="entry" placeholder="Password">
          </div>
          <div>
            <button class="btn btn-success" type="submit"> Submit </button>
          </div>
        </div>
      </b-form>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      title: "Sign In",
      valid: false
    };
  },
  methods: {
    login () {
      console.log('Login')
    }
  }
};
</script>
<style>
</style>