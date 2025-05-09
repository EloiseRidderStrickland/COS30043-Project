<template>
  <header class="outer">
        <div class="row">
          <div class="box col-sm-2 mt-3">
            <div>Air-iums.com</div>
          </div>

            <div class="col-sm mt-3">
             <div class="bar-nav">
              <nav class="bold">
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
            <h1>"Build Worlds</h1>
            <h1>Create Anything."</h1>
          </div>
        </div>
      
        <div class="col-6 header-subtitle">
            <p>
              <em>"From our world to yours, explore our range of handcrafted microworlds 
              made to order, or choose from hundreds of hand-picked accessories; 
              substrate, rock, plants, foliage, fish, insects and more! to craft your very own."</em>
            </p>
          <div class="sign">
            ~ Eloise RidderStrickland
          </div>
        </div>
  </header>
    <router-view />
</template>

<style scoped>

header 
{
  background-image: url('/wallpapers/moss-wallpaper-4.jpg');
  background-color: rgb(88, 107, 87);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  padding: 20px;
  transition: transform .2s;
}

header:hover
{
  transform: scale(102%);
}

.header-title
{
  padding-top: 95px;
  padding-left: 80px;
  text-align: left;
  font-family: 'Kindmight', sans-serif;
}

.header-subtitle
{
  justify-content: space-between; 
  padding-top: 10px;
  padding-bottom: 110px;
  padding-left: 80px;
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
  transition: transform .2s;
}

nav:hover
{
  transform: scale(101%);
}

img {
  margin-left: 15px;
}

/* -- SEARCH AREA -- */

.search
{
  background-color: rgba(0, 0, 0, 0.4);
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
    border-radius: 5px;
    border-radius: 5px 5px 0px 0px;
}

search:focus, input:focus {
    color: rgb(255, 255, 255);
    border-radius: 5px 5px 0px 0px;
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

h1 {
  /* Extra small devices (phones, less than 768px) */
  font-size: 40px;

  /* Small devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    font-size: 50px;
  }

  /* Medium devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    font-size: 60px;
  }

  /* Large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    font-size: 70px;
  }
}

</style>
