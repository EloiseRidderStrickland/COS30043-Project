How could I make the header bar, as it is, but move with the content on the page?

<template>
    
  <header class="full-width">
    <div class="bar-header">

    <div class="top-header">
      <div class="company-header">Air-iums</div>


      <div class="bar-nav">
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/news">News</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/project">Project</router-link>
        </nav>
      </div>

      <div class="top-header">
        <input type="search" placeholder="Search">
      </div>

      <div class="top-header">
        <img src="/icons/github.png" alt="Menu Button" width="30">
        <img src="/icons/discord.png" alt="Home Button" width="30">
        <img src="/icons/pinterest.png" alt="Menu Button" width="30">
      </div>

    </div>

      <div class="header-test">
        <h1>Welcome</h1>
      </div>

      <div>
        <p>
          Welcome to <strong>Air-ium</strong>, your central repository for all things
          Terrariums, Aquariums, Paludariums, Vivarium, Ripariums, Insectariums & <strong>More</strong>!
        </p>
      </div>

    </div>
  </header>

  <div class="full-width">
    <div class="bar-second">
      <div class="email">air-iums.natural@bigpond.com</div>
      <div class="address">example address. place name</div>
    </div>
  </div>

  <router-view />
</template>

<style scoped>

  header 
  {
  background-color: rgba(73, 117, 109, 0.5); 
  padding: 30px 60px;
  outline: 1px solid rgb(255, 234, 0);
  }

.bar-second {
  background-color: rgb(143, 154, 117);
  display: flex;
  justify-content: space-between; 
  padding: 5px;
}

.top-header
{
  display: flex;
  justify-content: space-between; 
  outline: 1px solid rgb(255, 234, 0);
}

.email {
  color: rgb(67, 70, 60);
  font-size: 14px; 
  font-weight: bold;
  padding-left: 100px;
}

.address {
  color: rgb(67, 70, 60);
  font-size: 14px; 
  font-weight: bold;
  text-align: right;
  padding-right: 100px;
}

.bar-nav nav a {
  margin: 0 10px;
  text-decoration: none;
  color: white; 
}

img {
  margin-left: 10px;
}

</style>
