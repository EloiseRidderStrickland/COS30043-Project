<template>
    <h2>Welcome {{ name }}!</h2>

    <div>
      <p>What is your name?</p>
      
        <div>
          <label for="fname">First Name </label>
          <input type="text" id="fname" v-model="fname" placeholder="John" name="First Name" required>
        </div>

        <div>
          <label for="lname">Last Name </label>
          <input type="text" id="lname" v-model="lname" placeholder="Doe" name="Last Name" required>
        </div>

        <div class="group">
		    <p> 
                <input type="radio" id="ocean" name="ocean" value="ocean" v-model='selectPlace' checked>
				<label for="ocean">Ocean</label>

				<input type="radio" id="mountain" name="mountain" value="mountain" v-model="selectPlace">
				<label for="mountain">Mountains</label> 
			</p>
        </div>

        <div>
            <img v-if="selectPlace === 'ocean'" src="/assets/ocean.png" class="image" alt="Image Of The Ocean"/>
            <img v-if="selectPlace === 'mountain'" src="/assets/mountains.png" class="image" alt="Image Of Mountains"/>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {      
            return {
                lname: '',
                fname: '',
                selectPlace: 'ocean',
                }
            },
            computed: {
                name() {
                    return `${this.fname} ${this.lname}`.trim()
                }
            }
        }
</script>

<style scoped>
.image {
  width: 300px;
  height: auto; 
}
.image:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

</style>