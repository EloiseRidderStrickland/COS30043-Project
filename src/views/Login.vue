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

<!------ THEME SELECT ------>

    <div>
      <h3>Choose Your Theme</h3>
      <div class="row themerow">
        <div class="col-sm-2 box box1">
          <input type="radio" id="ocean" class="radio_item" name="ocean" value="ocean" v-model='selectPlace' checked>
          <label for="ocean">Ocean</label>
        </div>

        <div class="col-sm-2 box box2">
          <input type="radio" id="mountain" class="radio_item" name="mountain" value="mountain" v-model="selectPlace">
          <label for="mountain">Mountains</label> 
        </div>

        <div class="col-sm-2 box box3">
          <input type="radio" id="forest" class="radio_item" name="forest" value="forest" v-model="selectPlace">
          <label for="mountain">Forest</label> 
        </div>
        
        <div class="col-sm-2 box box4">
          <input type="radio" id="moss" class="radio_item" name="" value="moss" v-model="selectPlace">
          <label for="mountain">Moss</label>
        </div>
        <div class="col-sm-2 box box5">
          <input type="radio" id="leaves" class="radio_item" name="leaves" value="leaves" v-model="selectPlace">
          <label for="mountain">Leaves</label>
        </div>

        <div class="col-sm-2 box box6">
          <input type="radio" id="cave" class="radio_item" name="cave" value="cave" v-model="selectPlace">
          <label for="cave">Cave</label>
        </div>

        <div class="col-sm-2 box box7">
          <input type="radio" id="desert" class="radio_item" name="desert" value="desert" v-model="selectPlace">
          <label for="cave">Desert</label>
        </div>

        <div class="col-sm-2 box box8">
          <input type="radio" id="clouds" class="radio_item" name="clouds" value="clouds" v-model="selectPlace">
          <label for="clouds">Clouds</label>
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

  .box:hover
  {
    transform: scale(102%);
  }

.main {
  background-color: rgb(88, 107, 87);
  border-radius: 20px;
  min-height: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: background-image 0.3s ease;
  padding: 50px;
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
  border-radius: 20px;
  align-items: center;
  
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

/* Add some styling to make form elements more visible on background */
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

/*.radio_item 
{
  display: none !important;
}*/

</style>