<template>
  <img src="./assets/vue.svg" class="logo vue" alt="Vue logo"/>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/news">News</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <!-- Bootstrap dependencies -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <!-- Vue.js (v3.4.21)-->
        <script src="https://cdn.jsdelivr.net/npm/vue@3.4.21/dist/vue.global.js"></script>

    <!-- Vue Router (for Vue v3.4.21) -->
        <script src="https://cdn.jsdelivr.net/npm/vue-router@4"></script>

    <!-- Styles -->
        <link href="../framework/css/bootstrap.min.css" rel="stylesheet">

    <router-view />
</template>

<style scoped>
  nav 
  {
    margin-right: 10px;
  }
  .logo
  {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo.vue:hover
  {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>