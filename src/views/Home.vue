<template>

<!------ Mini Boxs SET ONE ------>

  <div class="main">
   <div class="row">
    <div class="outer title col-sm p-3">
      <h2>Welcome!</h2><br>
        <p><em>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </em></p>
    </div>
    <div class="outer title col-sm p-3">
      <h2>Popular</h2><br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
    </div>
   </div>
  </div>

<!------ WOOD THEME HEADER ------>

  <div class="outer wood">
        <div class="col-12 wood-title">
          <div>
            <h1>"Why Settle</h1>
            <h1>For Temporary?"</h1>
          </div>
        </div>
      
  <div class="row">
    <div class="col-sm-5"></div>
      <div class="col-sm-7 wood-subtitle">
          <p>
            <em>"When you can have forever, with our curated range of natural resources.
            sure to impress in any style. Bring some magic to your space."</em>
          </p>
        <div class="sign">
            ~ Timothy Mifsud
        </div>
      </div>
    </div>
  </div>

<!------ Mini Boxes SET TWO ------>

  <div class="main">
    <div class="outer">
      <div class="row">
          

          <div class="container col-md m-2 p-3">
            <h2>Terrariums</h2><br>
            <p>
              Experience a taste of the natural world wherever you are, with stunning
              bio-spheres of thriving green, these minimal maintenance living worlds 
              will inspire and brighten any space. 
            </p>
          </div>
  
          <div class="container col-md m-2 p-3">
            <h2>Aqua-dariums</h2><br>
            <p>
              Immerse yourself in the world of Aquascaping, explore tropical & cold water fish,  
              pond scaping, substrates, accessory kits, plants amd more to kick start your aquatic journey.
            </p>
          </div>     
          
          <div class="container col-md m-2 p-3">
            <h2>Ripariums</h2><br>
            <p>
              Add a touch of serenity and calm where rainforest meets sandy shores. 
              The perfect combination of both Terrarium and Aqua-darium, 
              for the indecisive. 
            </p>
          </div> 
  
      </div>
    </div>
  </div>

<!------ STONE THEME HEADER ------>

  <div class="outer stone">
        <div class="col-12 stone-title">
          <div>
            <h1>"Go Further</h1>
            <h1>Be The Impossible."</h1>
          </div>
        </div>
      
 
    <div class="col-sm-5"></div>
      <div class="col-6 stone-subtitle">
          <p>
            <em>"Where natural Beauty meets elegent style. Make an impression
              "</em>
          </p>
        <div class="sign">
            ~ Coco Mifsud
        </div>
      </div>
    </div>

  <!------ Mini Boxes SET TWO ------>

  <div class="main">
    <div class="outer">
          <div class="container col-md m-2 p-3">
            <h2>Stay In The Loop For Exclusive Offers!</h2><br>
            <p>
              T's & C's Apply. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. labore et dolore 
          magna aliqua dolor sit amet, consectetur.
            </p>
          </div>
    </div>
  </div>
    
  </template>

  <style scoped>
   
    .title
    {
      /*background-image: url('/assets/dark-trees.jpg');*/
      background-color: rgb(0, 0, 0);
      background-position: center;
      background-size: 50%;
      color: rgb(255, 255, 255);
      background-repeat: no-repeat;
      text-align: left;
      transition: transform .2s;
      text-align: center;
    }
    
    .title:hover
    {
      transform: scale(102%);
    }

    .main
    {
      padding-right: 20px;
      padding-left: 5px;
    }

    p
    {
      text-align: justify;
    }

    /* -- HEADER BOX CONTROLS -- */

.wood
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

.wood:hover
{
  transform: scale(101%);
}

.wood-title
{
  padding-top: 75px;
  padding-right: 80px;
  text-align: right;
  font-family: 'Kindmight', sans-serif;
}

.wood-subtitle
{
  justify-content: space-between; 
  padding-top: 10px;
  padding-bottom: 75px;
  padding-right: 90px;
  text-align: justify;
}

.stone
{
  background-image: url('/wallpapers/stone-wallpaper-2.jpg');
  background-color: rgb(88, 107, 87);
  color: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  padding: 20px;
  transition: transform .2s;
}

.stone:hover
{
  transform: scale(101%);
}

.stone-title
{
  padding-top: 75px;
  padding-left: 90px;
  text-align: left;
  font-family: 'Kindmight', sans-serif;
}

.stone-subtitle
{
  justify-content: space-between; 
  padding-top: 10px;
  padding-bottom: 75px;
  padding-left: 90px;
  text-align: justify;
}

.sign 
{
  font-family: 'Southera', sans-serif;
  font-size: 25px;
  text-align: left;
}


  </style>