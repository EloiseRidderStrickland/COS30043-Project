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
            <br><h2>Latest News</h2>
        </div>

  </header>
  <!--==================================================== HEADER BAR END ====================================================-->

  <div class="main">

    <div class="main-body p-3 mt-5">
    
    <div class="col-12 p-3">
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum."
      </p>
    </div>
    
      <div class="row">
          <div class="box col-sm m-1">
            <p>Column 1</p>
          </div>

          <div class="box col-sm m-1">
            <p>Column 2</p>
          </div>
  
          <div class="box col-sm m-1">
            <p>Column 3</p>
          </div>

          <div class="box col-sm m-1">
            <p>Column 4</p>
          </div>
  
          <div class="box col-sm m-1">
            <p>Column 5</p>
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

  </style>