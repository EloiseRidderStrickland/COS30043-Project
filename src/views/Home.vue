<template>

<!------ Mini Boxs SET ONE ------>

  <div class="main">
   <div class="row">
    <div class="outer col-sm p-3">
      <h2>Welcome!</h2><br>
        <p><em>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </em></p>
    </div>
    <div class="outer col-sm p-3">
      <h2>Popular</h2><br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
    </div>
   </div>
  </div>

  <!------ Mini Boxes SET TWO ------>

  <div class="main">
    <div class="outer">
      <div class="row">
          

          <div class="container col-md m-2 p-3">
            <div class="containerx">
              <h2>Terrariums</h2><br>
                <p>
                  Experience a taste of the natural world wherever you are, with stunning
                  bio-spheres of thriving green, these minimal maintenance living worlds 
                  will inspire and brighten any space. 
                </p>
            </div>
          </div>
  
          <div class="container col-md m-2 p-3">
            <div class="containerx">
              <h2>Aqua-dariums</h2><br>
                <p>
                  Immerse yourself in the world of Aquascaping, explore tropical & cold water fish,  
                  pond scaping, substrates, accessory kits, plants and more to kick start your aquatic journey.
                </p>
              </div>
          </div>     
          
          <div class="container col-md m-2 p-3">
            <div class="containerx">
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
  </div>

<!------ WOOD THEME HEADER ------>

  <div class="outer wood">
        <div class="col-12 wood-title">
          <div>
            <h1>"Natural</h1>
            <h1>Resources"</h1>
          </div>
        </div>
      
  <div class="row">
    <div class="col-sm-5"></div>
      <div class="col-sm-7 wood-subtitle">
          <p>
            <em>"With our curated range of natural resources.
            sure to impress in any style. Bring some magic to your space."</em>
          </p>
        <div class="sign-right">
            ~ Timothy Mifsud
        </div>
      </div>
    </div>

  <button class="button" style="vertical-align:middle"><span>See The Range</span></button>

  </div>

<!------ STONE THEME HEADER ------>

  <div class="outer stone">
        <div class="col-12 stone-title">
          <div>
            <h1>"Stones</h1>
            <h1>& Substrate."</h1>
          </div>
        </div>
      
 
    <div class="col-sm-5"></div>
      <div class="col-6 stone-subtitle">
          <p>
            <em>
              "Where natural Beauty meets elegent style. Set the stage for
              a world of wonder in any color, click below to browse our range."
            </em>
          </p>
        <div class="sign">
            ~ Pebbles The Kitten
        </div>
      </div>
    </div>

  <!------ MOSS THEME HEADER ------>

  <div class="outer moss">
        <div class="col-12 moss-title">
          <div>
            <h1>"Plants</h1>
            <h1>, Moss & Foliage."</h1>
          </div>
        </div>
      
  <div class="row">
    <div class="col-sm-5"></div>
      <div class="col-sm-7 moss-subtitle">
          <p>
            <em>"When you can have forever, with our curated range of natural resources.
            sure to impress in any style. Bring some magic to your space."</em>
          </p>
        <div class="sign-right">
            ~ Coco The Cat
        </div>
      </div>
    </div>
  </div>

   <!------ FOOTER ------>

   <div class="outer offer">
    <div class="offerx">

        <div class="row">
          <div class="col-sm-6">
            <div class="offerheader"><h2>Stay In The Loop!</h2></div>
              <br><p>
                Want Exclusive offers and deals delivered to your mailbox? 
                enter your email or become a memeber! 
                For a limited time get <u>10% off</u> your first purchase!
              </p>
          </div>
            
          <div class="col-sm-6">
            <h2></h2>
              <form>
              <input id="email" type="email" placeholder="example@email.com">
            </form>
          </div>

        </div>
      </div>
  </div>
  
  <div class="main">
    <div class="outer">
          
    </div>
  </div>
    
  </template>

  <style scoped>


    .offer
    {
      /*background-image: url('/wallpapers/moss-wallpaper-8.jpg');*/
      background-color: rgba(36, 35, 35, 0.685);
      transition: transform .2s;
      color: rgb(255, 255, 255);
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 20px;
      padding: 20px;
      transition: transform .2s;
    }

    .offer:hover
    {
      transform: scale(101%);
    }

    .offerx
    {
      background-color: rgba(36, 35, 35, 0.685);
      transition: transform .2s;
      border-radius: 20px;
      padding: 30px;
    }

    .offerx:hover
    {
      transform: scale(101%);
    }

    .offerheader
    {
      font-family: 'Kindmight', sans-serif;                               
    }


/* ---- WOOD THEME HEADER ----- */
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

/* ---- STONE THEME HEADER ----- */

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

/* ---- MOSS THEME HEADER ----- */
.moss
{
  background-image: url('/wallpapers/reverse-moss-wallpaper-4.jpg');
  background-color: rgb(88, 107, 87);
  color: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  padding: 20px;
  transition: transform .2s;
}

.moss:hover
{
  transform: scale(101%);
}

.moss-title
{
  padding-top: 75px;
  padding-right: 80px;
  text-align: right;
  font-family: 'Kindmight', sans-serif;
}

.moss-subtitle
{
  justify-content: space-between; 
  padding-top: 10px;
  padding-bottom: 75px;
  padding-right: 90px;
  text-align: justify;
}

/* -- END MAIN -- */

.sign 
{
  font-family: 'Southera', sans-serif;
  font-size: 25px;
  text-align: left;
}

.sign-right
{
  font-family: 'Southera', sans-serif;
  font-size: 25px;
  text-align: right;
}

/* -- BUTTON -- */

/* -- BUTTON CONTROLS -- */

.button {
  background-color: rgba(255, 255, 255, 0);
  color: rgb(255, 255, 255);
  font-weight: bold;
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
  content: '\1F850';
  position: absolute;
  opacity: 0;
  top: 0;
  left: 20px;
  transition: 0.5s;
}

.button:hover span {
  padding-left: 25px;
}

.button:hover span:after {
  opacity: 1;
  left: 0;
}
  </style>