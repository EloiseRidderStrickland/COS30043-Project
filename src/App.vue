<template>
  <img src="./assets/vue.svg" class="logo vue" alt="Vue logo"/>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/news">News</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

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