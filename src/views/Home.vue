<template>

<!--===================================================== MAIN HEADER BAR =====================================================-->
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
              <input class="search" type="search" placeholder="Search">
              <router-link to="/login" class="button" style="vertical-align:middle"><span>Login</span></router-link>
              <router-link to="/register" class="button" style="vertical-align:middle"><span>Sign-Up</span></router-link>
          </div>

          <div class="col-sm-auto mt-3">
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
  <!--==================================================== MAIN HEADER BAR END ====================================================-->

<!------ Mini Boxs SET ONE ------>

  <div class="main outer">
   <div class="row">
      <div class="col-md theme-option">
        <div class="card-link">
          <label for="catag" class="box welcome">
            <span class="theme-label-header">Welcome!</span>
          </label>
          <span>
              <em>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </em><br>
          </span>
        </div>
      </div> 

      <div class="col-md theme-option">
        <div class="card-link">
          <label for="catag" class="box welcome1">
            <span class="theme-label-header">Popular</span>
          </label>
          <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>
          </span>
        </div> 
      </div>
    </div>
  </div>

  <div class="outer divider">
    <div class="col-sm">
        <div class="row">

          <div class="col-sm m-1">
            <div>Select from our <strong>pre-made</strong> or <strong>custom</strong> designs below! 🌿</div>
          </div>
        </div>
    </div>
  </div>

  <!------ Mini Boxes SET TWO ------>

  <div class="main">
    <div class="outer">
      <div class="row">
          
      <div class="col-md theme-option">
        <div class="card-link">
          <label for="catag" class="box terrabox1">
            <span class="theme-label">Terrariums</span>
          </label>
          <span>
              Experience a taste of the natural world wherever you are, with stunning
              bio-spheres of thriving green, these minimal maintenance living worlds 
              will inspire and brighten any space.<br>
          </span>
        </div>
      </div> 

      <div class="col-md theme-option">
        <div class="card-link">
          <label for="catag" class="box terrabox2">
            <span class="theme-label">Aqua-dariums</span>
          </label>
          <span>
              Immerse yourself in the world of Aquascaping, explore tropical & cold water fish,  
              pond scaping, substrates, accessory kits, plants and more to kick start your aquatic journey.<br>
          </span>
        </div>
      </div> 

      <div class="col-md theme-option">
        <div class="card-link">
          <label for="catag" class="box terrabox3">
            <span class="theme-label">Ripariums</span>
          </label>
          <span>
              Add a touch of serenity and calm where rainforest meets sandy shores. 
                  The perfect combination of both Terrarium and Aqua-darium, 
                  for the indecisive. <br>
          </span>
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

  <button class="expandClick" style="vertical-align:middle"><span>See The Range</span></button>
  </div>

  <div class="outer divider">
    <div class="col-sm">
        <div class="row">

          <div class="col-sm m-1">
            <div>Browse our collection of purchasable Natural Woods🪵</div>
          </div>
        </div>
    </div>
  </div>
  
    <div class="outer">
      <div class="row">
        
      <div class="col-sm-4 theme-option">
        <router-link to="/cholla-details" class="card-link mb-3">
          <label for="wood" class="box box1">
            <span class="theme-label">Cholla wood</span>
          </label>
            <span>
              A southeastern 
              Asian driftwood, that is often found in 
              linear shapes, with a dark orange color. 
              Another dense type of driftwood<br>
              <br><strong>See More...</strong>
            </span>
        </router-link>
      </div>  

      <div class="col-sm-4 theme-option">
        <router-link to="/malaysian-details" class="card-link mb-3">
          <label for="wood" class="box box2">
            <span class="theme-label">Malaysian Driftwood</span>
          </label>
            <span>
               A lattice like hollow tubular structure. 
               Cholla can be of the more expensive 
               driftwoods. They make an ideal 
               home for shrimp<br>
               <br><strong>See More...</strong>
            </span>
        </router-link>
      </div> 

      <div class="col-sm-4 theme-option">
        <router-link to="/manzanite-details" class="card-link mb-3">
          <label for="wood" class="box box3">
            <span class="theme-label">Manzanita Wood</span>
          </label>
            <span>
               Ideal for aquascaping where the 
               hardscape is the central focal point. With it’s bark 
               on, Manzanita wood is a dark, often a reddish brown color.<br>
               <br><strong>See More...</strong>
            </span>
        </router-link>
      </div> 

      <div class="col-sm-4 theme-option">
        <router-link to="/mopani-details" class="card-link mb-3">
          <label for="wood" class="box box4">
            <span class="theme-label">Mopani wood</span>
          </label>
            <span>
               Also known as African driftwood, has an attractive two-tone 
               color and is usually available in a chunks. 
               It is denseer and usually lacks branches.<br>
               <br><strong>See More...</strong>
            </span>
        </router-link>
      </div> 

      <div class="col-sm-4 theme-option">
        <router-link to="/spiderwood-details" class="card-link mb-3">
          <label for="wood" class="box box5">
            <span class="theme-label">Spiderwood Branches</span>
          </label>
            <span>
               Rhododendron roots or Azalea roots, named after its intricate, 
               spindly root structures that resemble spider webs, or spider legs.<br>
               <br><strong>See More...</strong>
            </span>
        </router-link>
      </div> 
      
      <div class="col-sm-4 theme-option">
        <router-link to="/pacific-details" class="card-link mb-3">
          <label for="wood" class="box box6">
            <span class="theme-label">Pacific Driftwood</span>
          </label>
            <span>
               Pacific Driftwood is similar to the more 
               common Malaysian driftwood but sports a 
               more beige appearance rather than dark brown..<br>
               <br><strong>See More...</strong>
            </span>
        </router-link>
      </div>

      <div class="col-sm-4 theme-option">
        <router-link to="/coastal-details" class="card-link mb-3">
          <label for="wood" class="box box7">
            <span class="theme-label">Coastal Redwoods</span>
          </label>
            <span>
               California redwood is an evergreen, 
               long-lived, monoecious tree living 
               1,200–2,200 years or more. Its fibrous bark, can 
               provide texture to tanks and terrariums alike  <br>
               <br><strong>See More...</strong>
            </span>
        </router-link>
      </div>
        
      <div class="col-sm-4 theme-option">
        <router-link to="/coastal-details" class="card-link mb-3">
          <label for="wood" class="box box8">
            <span class="theme-label">Tigerwood</span>
          </label>
            <span>
               Tiger Wood driftwood is appreciated for its 
               versatility in sizes and shapes, which allows 
               aquarists to create dynamic, natural-looking aquascapes or Terrariums<br>
               <br><strong>See More...</strong>
            </span>
        </router-link>
      </div>
      
      <div class="col-sm-4 theme-option">
        <router-link to="/bogwood-details" class="card-link mb-3">
          <label for="wood" class="box box9">
            <span class="theme-label">Bogwood</span>
          </label>
            <span>
               Preserved by the anaerobic conditions of these 
               environments over hundreds or thousands of years. 
               It is discoloured by the tannins over this lengthy period.<br>
               <br><strong>See More...</strong>
            </span>
        </router-link>
      </div> 

      </div>
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

   <div class="outer offer">
    <div class="offerx">

<!-- -- MINI BOX FOUR -->
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

  .divider
{
  font-size: small;
  border-radius: 20px;
  font-size: 17px;
  color: rgb(134, 132, 132);
  background-color: rgb(24, 23, 23);
  transition: transform .2s;
}

.divider:hover
{
  transform: scale(102%);
}

.theme-option label {
  cursor: pointer;
  display: inline-block;
  width: 100%;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.theme-label {
  position: absolute;
  bottom: 8px;
  transform: translateX(-50%);
  background: rgba(54, 54, 54, 0.5);
  color: white;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  width: 102%;
  padding-left: 20px;;
}

.theme-label-header {
  position: absolute;
  bottom: 8px;
  transform: translateX(-50%);
  background: rgba(54, 54, 54, 0.5);
  color: white;
  padding: 4px 8px;
  font-size: 27px;
  text-align: left;
  width: 102%;
  padding-left: 20px;
}

.theme-description {
  font-size: 12px;
  color: white;
  background: rgba(0, 0, 0, 0.8);
  padding: 8px;
  border-radius: 6px;
  line-height: 1.4;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
}

.theme-option label:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.box1 
{
  background-image: url('/collection1/wood-1.png');
}

.box2 
{
  background-image: url('/collection1/wood-2.png');
}

.box3
{
  background-image: url('/collection1/wood-3.png');
}

.box4
{
  background-image: url('/collection1/wood-4.png');
}

.box5
{
  background-image: url('/collection1/wood-5.png');
}

.box6
{
  background-image: url('/collection1/wood-6.png');
}

.box7
{
  background-image: url('/collection1/wood-7.png');
}

.box8
{
  background-image: url('/collection1/wood-8.png');
}

.box9
{
  background-image: url('/collection1/wood-9.png');
}

.terrabox1
{
  background-image: url('/collage/terra-5.jpg');
}

.terrabox2
{
  background-image: url('/collage/terra-9.jpg');
}

.terrabox3
{
  background-image: url('/collage/terra-1.jpg');
}

.welcome
{
  background-image: url('/collage/terra-8.jpg');
}

.welcome1
{
  background-image: url('/collage/terra-2.jpg');
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  transition: all 0.2s ease;
  font-size: 13px;
  background-color: rgba(53, 53, 53, 0.267);
  border-radius: 20px;
  padding: 15px;
}

.card-link:hover
{
  transform: scale(102%);
}

.box 
{
  font-weight: bold;
  border-radius: 20px;
  min-height: 200px;
  min-width: 100px;
  display: block;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background-color: rgb(0, 0, 0);
}

    .offer
    {
      /*background-image: url('/wallpapers/moss-wallpaper-8.jpg');*/
      background-color: rgba(36, 35, 35, 0.685);
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


/* -- .expandClick BUTTON CONTROLS -- */

.expandClick {
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

.expandClick span {
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.expandClick span:after {
  content: '\1F850';
  position: absolute;
  opacity: 0;
  top: 0;
  left: 20px;
  transition: 0.5s;
}

.expandClick:hover span {
  padding-left: 25px;
}

.expandClick:hover span:after {
  opacity: 1;
  left: 0;
}

/* -- END -- */

  </style>