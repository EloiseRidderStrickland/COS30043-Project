
<template>
  <div class="outer main" :class="selectPlace">

        <div class="col-1 route">
            <router-link to="/"><strong>Back</strong></router-link>
        </div>

    <div class="containerxy">

<!------ NAVIGATION ------>

        <div class="company col-sm mt-3">
          <div>Air-iums.com</div>
        </div>

<!------ HEADING ------>

      <div>
        <h2>Good To See You Again!</h2>
      </div>
    
<!------ FORM ------>
    <div class="col-sm body">
     <div class="row">
      <div>
        <label for="fname">Your email </label>
        <input type="text" id="fname" v-model="username" placeholder="e.g example@mail.com" name="First Name" required>
      </div>

      <div>
        <label for="lname">Your password </label>
        <input type="password" id="lname" v-model="password" placeholder="e.g ilooveAiriums123" name="Last Name" required>
      </div>
     </div>

     <div class="row route">
          <div class="col-sm">
            <em>Forgot Password</em>
          </div>

          <div class="col-sm">
            <router-link to="/register"><em>Don't Have An Account?</em></router-link>
          </div>
      </div>
    </div>

    <button type="submit" class="login">Log-In</button>

    

<!------ THEME SELECT ------>

    <div>
      <h3>Choose Your Theme</h3>
      <div class="row themerow">
        <div class="col-sm-auto theme-option">
          <input type="radio" id="ocean" class="radio_item" name="theme" value="ocean" v-model='selectPlace' checked>
          <label for="ocean" class="box box1">
            <span class="theme-label">Ocean</span>
          </label>
        </div>

        <div class="col-sm-auto theme-option">
          <input type="radio" id="mountain" class="radio_item" name="theme" value="mountain" v-model="selectPlace">
          <label for="mountain" class="box box2">
            <span class="theme-label">Mountains</span>
          </label> 
        </div>

        <div class="col-sm-auto theme-option">
          <input type="radio" id="forest" class="radio_item" name="theme" value="forest" v-model="selectPlace">
          <label for="forest" class="box box3">
            <span class="theme-label">Forest</span>
          </label> 
        </div>
        
        <div class="col-sm-auto theme-option">
          <input type="radio" id="moss" class="radio_item" name="theme" value="moss" v-model="selectPlace">
          <label for="moss" class="box box4">
            <span class="theme-label">Moss</span>
          </label>
        </div>
        
        <div class="col-sm-auto theme-option">
          <input type="radio" id="leaves" class="radio_item" name="theme" value="leaves" v-model="selectPlace">
          <label for="leaves" class="box box5">
            <span class="theme-label">Leaves</span>
          </label>
        </div>

        <div class="col-sm-auto theme-option">
          <input type="radio" id="cave" class="radio_item" name="theme" value="cave" v-model="selectPlace">
          <label for="cave" class="box box6">
            <span class="theme-label">Cave</span>
          </label>
        </div>

        <div class="col-sm-auto theme-option">
          <input type="radio" id="desert" class="radio_item" name="theme" value="desert" v-model="selectPlace">
          <label for="desert" class="box box7">
            <span class="theme-label">Desert</span>
          </label>
        </div>

        <div class="col-sm-auto theme-option">
          <input type="radio" id="clouds" class="radio_item" name="theme" value="clouds" v-model="selectPlace">
          <label for="clouds" class="box box8">
            <span class="theme-label">Clouds</span>
          </label>
        </div>

      </div>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  data() {      
    return {
      username: '',
      password: '',
      selectPlace: 'ocean',
    }
  },
  computed: {
    name() {
      return `${this.username} ${this.password}`.trim()
    }
  }
}  
</script>

<style scoped>

.login {
  background: rgba(255, 255, 255, 0.4);
  color: rgb(255, 255, 255);
  transition: all 0.5s;
  border-radius: 20px;
  text-align: center;
  margin-right: 20px;
  font-weight: 15px;
  padding: 5px 15px;
  border: none;
  width: 100%;
  font-size: 20px;
  margin-top: 20px;
}

.login:hover
{
  transform: scale(102%);
}

.themerow {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 20px 0;
}

.containerxy
{
  display: inline-block;
  backdrop-filter: blur(4px);
  background-color: rgba(36, 35, 35, 0.3);
  transition: transform .2s;
  border-radius: 20px;
  padding: 30px;
}
  
h3 
{
  font-family: 'Kindmight', sans-serif;
  padding: 20px;
} 

.radio_item {
  display: none;
}

.theme-option {
  position: relative;
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
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  min-width: 60px;
}

.radio_item:checked + label {
  transform: scale(1.05);
  box-shadow: 0 0 0 3px #ffffff, 0 0 0 6px rgba(255, 255, 255, 0.3);
  border: 2px solid #ffffff;
}

.theme-option label:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.radio_item:checked + label:hover {
  transform: scale(1.05);
  box-shadow: 0 0 0 3px #ffffff, 0 0 0 6px rgba(255, 255, 255, 0.3);
}

.box1 
{
  background-image: url('/assets/ocean.png');
}

.box2 
{
  background-image: url('/assets/mountains.png');
}

.box3
{
  background-image: url('/assets/forest.jpg');
}

.box4
{
  background-image: url('/assets/moss.jpg');
}

.box5
{
  background-image: url('/assets/leaves.jpg');
}

.box6
{
  background-image: url('/wallpapers/cave-wallpaper-1.jpg');
}

.box7
{
  background-image: url('/assets/desert.jpg');
}

.box8
{
  background-image: url('/assets/clouds.jpg');
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
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
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
}

.ocean {
  background-image: url('/assets/ocean.png');
}

.mountain {
  background-image: url('/assets/mountains.png');
}

.forest
{
  background-image: url('/assets/forest.jpg');
}

.moss
{
  background-image: url('/assets/moss.jpg');
}

.leaves
{
  background-image: url('/assets/leaves.jpg');
}

.cave
{
  background-image: url('/wallpapers/cave-wallpaper-1.jpg');
}

.desert
{
  background-image: url('/assets/desert.jpg');
}

.clouds
{
  background-image: url('/assets/clouds.jpg');
}

.body 
{
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 20px;
  display: inline-block;
  opacity: 0;
  animation: fadeIn 1s forwards;
  transition: transform .2s;
}
  @keyframes fadeIn 
  {
    to {
        opacity: 1;
       }
  }

.body:hover
{
  transform: scale(101%);
}

label, input {
  margin: 8px 0;
}

input {
  color: black;
  padding: 5px;
  width: 100%;
  border-radius: 10px;
  border: 3px solid #ffffff;
}

p 
{
  padding-top: 10px;
  border-radius: 10px;
  display: inline-block;
}

.route a,
.route router-link {
  color: white;
  text-decoration: none;
}

h2
{
  font-family: 'Kindmight', sans-serif;
  padding: 30px;
}

</style>