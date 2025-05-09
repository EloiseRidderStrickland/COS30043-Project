How could I make the header bar, as it is, but move with the content on the page?

<template>
  <header class="full-width">
        <div class="row">
          <div class="box col-sm-2 mt-3">
            <div class="bold">Air-iums.com</div>
          </div>

            <div class="col-sm mt-3">
             <div class="bar-nav">
              <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/news">News</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/project">Project</router-link>
              </nav>
             </div>
            </div>

          <div class="col-sm-auto mt-3">
              <input class="search" type="search" placeholder="Search">
              <button class="button" style="vertical-align:middle"><span>Login</span></button>
              <button class="button" style="vertical-align:middle"><span>Sign-up</span></button>
          </div>

          <div class="col-sm-2 mt-3">
            <a href="https://github.com/EloiseRidderStrickland"><img src="/icons/white-icons/github-white.png" alt="GitHub" width="30"></a>
            <a href="https://discord.com/"><img src="/icons/white-icons/discord-white.png" alt="Discord" width="30"></a>
            <a href="https://au.pinterest.com/ers29740/"><img src="/icons/white-icons/pinterest-white.png" alt="Pinterest" width="30"></a>
          </div>
        </div>

        <div class="col-12 header-title">
          <div>
            <h1>Build Worlds</h1>
            <h1>Create Anything</h1>
          </div>
        </div>
      
        <div class="col-6 header-subtitle">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. 
            </p>
          <div class="sign">
            Eloise RidderStrickland
          </div>
        </div>
  </header>
    <router-view />
</template>

<style scoped>

header 
{
  background-image: url('/wallpapers/tree-wallpaper-2.jpg');
  background-color: rgb(88, 107, 87);
  background-repeat: no-repeat;
  background-size: cover;
}

.header-title
{
  padding-top: 95px;
  padding-left: 50px;
  text-align: left;
  font-size: 23px;
  font-family: 'Kindmight', sans-serif;
}

.header-subtitle
{
  justify-content: space-between; 
  padding-top: 10px;
  padding-bottom: 95px;
  padding-left: 50px;
  text-align: justify;
}

.sign 
{
  font-family: 'Southera', sans-serif;
  font-size: 25px;
  padding-left: 0px;
}

.bar-nav nav a {
  margin: 0 10px;
  text-decoration: none;
  color: white; 
}

img {
  margin-left: 15px;
}

/* -- SEARCH AREA -- */

.search
{
  background-color: rgba(255, 255, 255, 0);
  font-weight: 1em;
  border: none;
  text-indent: 10px;
  border-bottom: 2px solid rgb(255, 255, 255);
}

.search::placeholder {
  color: rgb(255, 255, 255);
}

input, select, search{
    color: rgb(255, 255, 255);
}

search:focus, input:focus {
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
}

/* -- BUTTON CONTROLS -- */

.button {
  background-color: rgba(255, 255, 255, 0);
  color: rgb(255, 255, 255);
  border: none;
  text-align: center;
  font-size: 15px;
  font-weight: 15px;
  width: auto;
  transition: all 0.5s;
  margin-left: 20px;
}

.button span {
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\1F852';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

</style>
