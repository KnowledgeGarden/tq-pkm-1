<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/journal">Journal</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <template v-if="isAuthenticated">
        <a hrev="#" v-on:click="logout">Logout</a> |
      </template>
      <template v-else>
        <router-link to="/login">Login</router-link> |
      </template>
      <router-link to="/register">Register</router-link>

    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isAuthenticated: false
    };
  },
  methods: {
    logout () {
      console.log('Logout')
    }
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
