<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark" v-if="notIsLoginPage">
      <b-navbar-brand href="#">Projeto</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Tarefas</b-nav-item>
          <b-nav-item to="/form">Formulário</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <transition name="fade" mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    notIsLoginPage() {
      return this.$route.name !== "login";
    }
  }
}

</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter, .fade-leave {
  opacity: 0;
}
</style>
