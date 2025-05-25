<template>

<!--===================================================== HEADER BAR =====================================================-->
<header class="outer">
        <div class="row">
          <div class="company col-sm-2 mt-3">
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
              <router-link to="/login" class="button" style="vertical-align:middle"><span>Login</span></router-link>
              <router-link to="/register" class="button" style="vertical-align:middle"><span>Sign-In</span></router-link>
          </div>
        </div>

        <div class="subheader">
            <br><h2>Project Details</h2>
        </div>

  </header>
  <!--==================================================== HEADER BAR END ====================================================-->

    <div class="outer main">
        <div class="col-md-6 containerxy">

            <div class="company col-sm mt-3">
                <div>Air-iums.com</div>
            </div>
             <div class="mt-4">
                <h3>Want To See More About This Project?</h3>
                <span>
                  See the full Git Repository Here!
                </span>

                  <div class="col-sm-auto mt-4">
                    <a href="https://github.com/EloiseRidderStrickland"><img src="/icons/white-icons/github-white.png" alt="GitHub" width="60"></a>
                  </div>               
                </div>
              </div>
            </div>

  <!---==================== FOOTER ====================-->
  
  <div class="outer footer">
    <div class="col-sm footerx">
        <div class="row">

          <div class="col-sm m-1">
            <div>© 2025, AIR-IUMS. All Rights Reserved</div>
          </div>

          <div class="col-sm m-1">
            <div>Terms & Conditions</div>
          </div>

          <div class="col-sm m-1">
              <div>Privacy Policy</div>
          </div>

          <div class="col-sm m-1">
            <div>Website by RIDDLAND DESIGN</div>
          </div>

        </div>
    </div>
  </div>

  <!---==================== FOOTER END ====================-->
    
  </template>

  <style scoped>
   
    .box
    {
      color: rgb(255, 255, 255);
      text-align: center;
      background-color: rgb(74, 95, 89); 
      border-radius: 5px;
    }

    .subheader
    {
      font-family: 'Kindmight', sans-serif;
    }

    .containerxy
{
  display: inline-block;
  backdrop-filter: blur(4px);
  background-color: rgba(36, 35, 35, 0.4);
  transition: transform .2s;
  border-radius: 20px;
  padding: 30px;
  transition: transform .2s;
}
@keyframes fadeIn 
  {
    to {
        opacity: 1;
       }
  }

.containerxy:hover
{
  transform: scale(101%);
}
  
h3 
{
  font-family: 'Kindmight', sans-serif;
  padding: 20px;
} 

  .box
  {
    font-weight: bold;
    margin: 2px;
    border-radius: 10px;
    min-height: 90px;
    min-width: 100px;
    display: inline-block;
    background-position: center;
    background-size: cover;
  }

.main {
  margin: 20px;
  background-color: rgb(88, 107, 87);
  border-radius: 20px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: background-image 0.3s ease;
  padding: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: url('collage/terra-8.jpg');
}

.route a,
.route router-link {
  color: white;
  text-decoration: none;
}

  </style>