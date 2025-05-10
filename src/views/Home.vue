<template>


  <header class="outer">
        <div class="col-12 header-title">
          <div>
            <h1>"Why Settle</h1>
            <h1>For Temorary?"</h1>
          </div>
        </div>
      
      <div class="row">
        <div class="col-sm-5">
        </div>
        <div class="col-sm-7 header-subtitle">
          <p>
            <em>"When you can have forever, with our professional range, on demand.
            sure to impress in any style. Bring some magic to your space."</em>
          </p>
          <div class="sign">
            ~ Timothy Mifsud
          </div>
        </div>
        </div>

  </header>

  <div class="main">

    <div class="outer">
      <div class="row">
          <div class="container col-lg m-2 p-3">
                <h2>Welcome!</h2>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>

          <div class="container col-sm m-2 p-3">
            <h4>Aqua-terrariums</h4>
            <p>
              Immerse yourself in the world of Aquascaping, explore tropical & cold water fish,  
              pond scaping, substrates, accessory kits, plants amd more to kick start your aquatic journey.
            </p>
          </div>
  
          <div class="container col-sm m-2 p-3">
            <h4>Our Story</h4>
            <p>
              Started from a passion...
            </p>
          </div>         
  
      </div>
    </div>
  </div>
    
  </template>

  <style scoped>
   
    .container
    {
      /*background-image: url('/wallpapers/wood-wallpaper-1.jpg');*/
      background-color: rgb(88, 107, 87);
      color: rgb(255, 255, 255);
      background-repeat: no-repeat;
      text-align: center;
      transition: transform .2s;
      border-radius: 20px;
    }
    
    .container:hover
    {
      transform: scale(102%);
    }

    .main
    {
      padding-right: 20px;
      padding-left: 5px;
    }

    /* -- HEADER BOX CONTROLS -- */

    header 
{
  background-image: url('/wallpapers/wood-wallpaper-1.jpg');
  background-color: rgb(88, 107, 87);
  color: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  padding: 20px;
  transition: transform .2s;
}

header:hover
{
  transform: scale(101%);
}

.header-title
{
  padding-top: 75px;
  padding-right: 80px;
  text-align: right;
  font-family: 'Kindmight', sans-serif;
}

.header-subtitle
{
  justify-content: space-between; 
  padding-top: 10px;
  padding-bottom: 75px;
  padding-right: 90px;
  text-align: justify;
}

.sign 
{
  font-family: 'Southera', sans-serif;
  font-size: 25px;
  text-align: right;
}


  </style>