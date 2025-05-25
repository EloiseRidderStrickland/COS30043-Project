<template>
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
            <div>Browse our collection of purchasable Natural Woods!🪵</div>
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
            <span class="theme-labelx">From $25.99</span>
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
            <span class="theme-labelx">From $35.99</span>
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
            <span class="theme-labelx">From $45.99</span>
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
            <span class="theme-labelx">From $55.99</span>
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
            <span class="theme-labelx">From $15.99</span>
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
            <span class="theme-labelx">From $20.99</span>
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
            <span class="theme-labelx">From $110.99</span>
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
            <span class="theme-labelx">From $75.99</span>
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
            <span class="theme-labelx">From $25.99</span>
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

    </template>

<style scoped>

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
</style>