<template>
  <div id="app">
  <b-navbar toggleable="lg" type="dark" variant="dark" v-if="notIsLoginPage">
    <b-navbar-brand href="#">Login</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="/login">Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-view>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">About</router-link>
    </div>
    </router-view>
  </div>
</template>

<script>
export default{
  computed: {
    notIsLoginPage(){
      console.log(this.$route.name);
      return this.$route.name !== "login";
    }
  }
}

</script>

<style>

</style>
