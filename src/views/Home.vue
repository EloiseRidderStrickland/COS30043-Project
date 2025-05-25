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

    
<!--==================================================== MAIN PAGE CONTENT ====================================================-->

  <div class="main outer">
   <div class="row">
      <div class="col-md theme-option">
        <div class="card-link mb-3">
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
          <label for="catag" class="box popular">
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

<!--==================================================== PRE-MADE CONTENT HEADERS ====================================================-->

  <div class="main">
    <div class="outer">
      <div class="row">
          
      <div class="col-md theme-option">
        <div class="card-link mb-3">
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
        <div class="card-link mb-3">
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
        <div class="card-link mb-3">
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

  <!--==================================================== CATALOGUE COMPONENTS ====================================================-->

    <Wood />
    <Rock />
    <Moss />

   <!--==================================================== OFFER FORM ====================================================-->

  <div class="outer offer">
    <div class="offerx">
      <!-- MINI BOX FOUR -->
      <div class="row">
        <div class="col-sm-6">
          <div class="offerheader"><h2>Stay In The Loop!</h2></div>
          <br><p>
            <em>Want Exclusive offers and deals delivered to your mailbox? 
            enter your email or become a member! 
            For a limited time get <u>10% off</u> your first purchase!</em>
          </p>
        </div>
        
        <div class="col-sm-6">
          <h2></h2>
          <!-- Show form if not submitted -->
          <form v-if="!showThanks" @submit.prevent="submitEmail">
            <input 
              id="email" 
              type="email" 
              placeholder="example@email.com"
              v-model="email"
              required
              class="email-input">
            <br><br>
            <button type="submit" class="buttonEx"><strong>Subscribe</strong></button>
          </form>
          
          <!-- Show thank you message after submission -->
          <div v-if="showThanks" class="thank-you-message">
            <h3>Thank You!</h3>
            <p>We've received your email <strong><u>{{ submittedEmail }}!</u></strong></p>
            <p>Cash back, Discounts and More heading your way!</p>
            <button @click="resetForm" class="buttonEX">Exit</button>
          </div>
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

<script>
import Wood from './catalogue/Wood.vue'
import Rock from './catalogue/Rock.vue'
import Moss from './catalogue/Moss.vue'

export default {
  data() {
    return {
      name: 'Home',
      email: '',
      showThanks: false,
      submittedEmail: ''
    }
  },
  components: {
        Wood,
        Rock,
        Moss
      },
  methods: {
    submitEmail() {
      if (this.email) {
        this.submittedEmail = this.email;
        this.showThanks = true;
        this.email = ''; // Clear the input
      }
    },
    resetForm() {
      this.showThanks = false;
      this.submittedEmail = '';
      this.email = '';
    }
  }
}
</script>


<style>

.email-input {
  width: 100%;
  padding: 8px;
  border-radius: 20px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.2);
}

.email-input:focus {
  outline: none;
  border-color: #ffffff;
}

.thank-you-message {
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  background: rgba(30, 30, 30, 0.5);
  border-radius: 20px;
}

.thank-you-message p {
  text-align: center;
}

.thank-you-message h3 {
  color: rgb(255, 255, 255);
  margin-bottom: 10px;
}

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
  padding-left: 20px;
  backdrop-filter: blur(4px);
}

.theme-labelx {
  position: absolute;
  top: 10px;          
  right: 10px;       
  background: rgba(30, 30, 30, 0.5);
  color: white;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  border-radius: 20px;
  backdrop-filter: blur(3px);
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

.popular
{
  background-image: url('/collage/terra-2.jpg');
}

.offer
{
  /*background-image: url('/wallpapers/moss-wallpaper-8.jpg');*/
  background: rgba(54, 54, 54, 0.2);
  color: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  padding: 20px;
  transition: transform .2s;
  background-image: url('/collage/terra-10.jpg');
}

.buttonEx {
  background-color: rgba(255, 255, 255, 0);
  color: rgb(255, 255, 255);
  border: none;
  text-align: center;
  font-size: 15px;
  font-weight: 15px;
  width: auto;
}

.offer:hover
{
  transform: scale(101%);
}

.offerx
{
  background: rgba(30, 30, 30, 0.4);
  transition: transform .2s;
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(4px);
}

.offerx:hover
{
  transform: scale(101%);
}

.offerheader
{
  font-family: 'Kindmight', sans-serif;                               
}

.offerx p 
{
  text-align: left;
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