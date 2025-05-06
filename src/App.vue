<template>
  <header>
    <div class="left-column">
      <div class="bar-header">
        <h1>Air-iums</h1>
      </div>
      <div class="bar-subtext">
        <p>
          
          Welcome to <strong>Air-ium</strong>, your central repository for all things
          Terrariums, Aquariums, Paludariums, Vivarium, Ripariums, Insectariums & <strong>More</strong>!
        </p>
      </div>
    </div>

    <div class="bar-nav">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/news">News</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/project">Project</router-link>
      </nav>
    </div>
  </header>

  <router-view />
</template>


<style scoped>
  nav 

  {
    margin-right: 10px;
  }
  .logo
  {
    height: 10em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo.vue:hover
  {
    filter: drop-shadow(0 0 2em #42b883aa);
  }

  header {
  background-color: rgba(73, 117, 109, 0.5); 
  position: fixed;
  width: 100%;
  top: 10%;
  left: 0;
  padding: 40px 50px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}

.left-column {
  display: flex;
  flex-direction: column;
  gap: 10px; 
}

nav {
  margin-left: auto;
  font-weight: bold;
}

.bar-nav nav a {
  margin: 0 10px;
  text-decoration: none;
  color: white; 
}
</style>