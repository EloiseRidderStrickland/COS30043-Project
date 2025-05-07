How could I make the header bar, as it is, but move with the content on the page?

<template>
  <div class="bar-nav">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/news">News</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/project">Project</router-link>
      </nav>
    </div>
    
  <header class="full-width">
    
    <div class="bar-header">
        <h1>Air-iums</h1>

      <div>
        <p>
          Welcome to <strong>Air-ium</strong>, your central repository for all things
          Terrariums, Aquariums, Paludariums, Vivarium, Ripariums, Insectariums & <strong>More</strong>!
        </p>
      </div>

    </div>
  </header>

  <router-view />
</template>

<style scoped>

  header 
  {
  background-color: rgba(73, 117, 109, 0.5); 
  padding: 40px 60px;
  }

.left-column {
  display: flex;
  flex-direction: column;
  gap: 10px; 
}

nav {
  margin-bottom: 15px;
  font-weight: bold;
}

.bar-nav nav a {
  margin: 0 10px;
  text-decoration: none;
  color: white; 
}
</style>
