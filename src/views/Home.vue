<template>
  <div class="main">

    <div class="outer">
      <div class="row">
          <div class="box1 col-sm-5 m-2 p-3">
                <h2>Welcome!</h2>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>

          <div class="box col-sm m-2 p-3">
            <h4>Aqua-terrariums</h4>
            <p>
              Immerse yourself in the world of Aquascaping, explore tropical & cold water fish,  
              pond scaping, substrates, accessory kits and plants to kick start your aquatic journey.
            </p>
          </div>
  
          <div class="box col-sm m-2">
            <p>Column 3</p>
          </div>

          <div class="box col-sm m-2">
            <p>Column 4</p>
          </div>
  
      </div>
    </div>
  </div>
    
  </template>

  <style scoped>
   
    .box1
    {
      /*background-image: url('/wallpapers/wood-wallpaper-1.jpg');*/
      background-color: rgb(88, 107, 87);
      color: rgb(255, 255, 255);
      background-repeat: no-repeat;
      text-align: center;
      transition: transform .2s;
      border-radius: 20px;
    }
    
    .box1:hover
    {
      transform: scale(102%);
    }

    .box
    {
      /*background-image: url('/wallpapers/wood-wallpaper-1.jpg');*/
      background-color: rgb(88, 107, 87);
      color: rgb(255, 255, 255);
      background-repeat: no-repeat;
      text-align: center;
      transition: transform .2s;
      border-radius: 20px;
    }

    .box:hover
    {
      transform: scale(102%);
    }

  </style>