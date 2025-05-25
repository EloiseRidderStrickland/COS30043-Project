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

  <div class="video-container">
  <iframe 
    width="560"
    height="315"
    src="https://www.youtube.com/embed/OBOBath0_qc"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
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

  <script>
export default {
  props: {
    videoId: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '560'
    },
    height: {
      type: String,
      default: '315'
    }
  }
}
</script>

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

  