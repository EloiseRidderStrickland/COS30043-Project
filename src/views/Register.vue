
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
        <h2>Welcome !</h2>
      </div>
    
<!------ FORM ------>
    <div class="col-sm body">
      <form>
      
<!------ FULL NAME ------>
    <div>
      <div class="row">
        <h4>Full Name *</h4>
        <div class="col-sm-6">
            <label for="fname">First Name</label>
            <input type="text" id="fname" v-model="fname" placeholder="Name" name="First Name" required>
          </div>
          <div class="col-sm-6">
            <label for="lname">Last Name</label>
            <input type="text" id="lname" v-model="lname" placeholder="Surname" name="Last Name" required>
          </div>
      </div>
    </div>

<!------ USERNAME / MOBILE NUMBER ------>
    <div>
      <div class="row">
        <div class="col-sm-6">
          <label for="uname">Username</label>
          <input type="text" id="uname" v-model="uname" placeholder="Username" name="Username" required>
        </div>
        <div class="col-sm-6">
          <label for="mnumber">Mobile Number</label>
          <input type="text" id="mnumber" v-model="mnumber" placeholder="+61 04" name="Mobile Number" required>
        </div>
      </div>
    </div>

<!------ PASSWORD / CONFIRM ------>
    <div>
      <div class="row">
        <div class="col-sm-6">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Password" name="Password" required>
        </div>
        <div class="col-sm-6">
          <label for="confirmPassword">Re-Enter Password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Re-Enter Password" name="Confirm Password" required>
          <span v-if="confirmPassword && password !== confirmPassword" class="text-danger">
            Passwords do not match
          </span>
        </div>
        <div class="col-sm-12">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="example@mail.com" name="Email" required>
        </div>
      </div>
    </div>

<!------ ADDRESS DETAILS ------>

    <div>
      <div class="row">
          <h4>Address *</h4>
          <div class="col-sm-12">
            <label for="address">Street Address</label>
            <input type="text" id="address" v-model="address" placeholder="Street Address" name="Address" required>
          </div>
          <div class="col-sm-6">
            <label for="suburb">Suburb</label>
            <input type="text" id="suburb" v-model="suburb" placeholder="Suburbs" name="Suburb" required>
          </div>

          <div class="col-sm-6">
            <label for="state">State / Territory</label>
            <select id="state" v-model="state" name="State" required>
              <option value="" disabled selected>Select State</option>
              <option value="vic">Victoria</option>
              <option value="nsw">New South Wales</option>
              <option value="qld">Queensland</option>
              <option value="wa">Western Australia</option>
              <option value="sa">South Australia</option>
              <option value="nt">Northen Territory</option>
              <option value="tm">Tasmania</option>
            </select>
          </div>

          <div class="col-sm-12">
            <label for="postcode">Postal / Zip Code</label>
            <input type="text" id="poscode" v-model="postcode" placeholder="Postal / Zip Code" name="Postcode" required>
          </div>
        </div>
    </div>
    <!--<input type="checkbox" id="showterms" name="showterms" value="Terms">-->
    
        <button type="button" class="button" @click="toggleTerms">Terms & Conditions</button>
        <div v-if="showTerms" class="terms-popup">

          <p>By using this service, you agree to the use of all data supplied in this form being processed 
          in accordance with privacy police (AU) by Air-iums.com, for the purpose of puchasing and/or subscribing, direct, or indirect affiliates of Air-iums.com. 
          By submitting this information, you acknowledge that all provided information is correct and true in accordance with law</p>

          <p>Insight Hire.inc are can not be held accountable or liable for any direct, indirect, incidental, 
          special, or consequential damages arising out of or in connection with your use of the service.</p> 

          <p>By clicking 'Accept', you acknowledge that you have read and understand 
          the terms and conditions outlined above.</p>

          <button type="button" class="buttonx" @click="acceptTerms">Accept</button>
        </div>
          <button type="submit" class="register">Register</button>
    </form>
  </div>
    
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fname: '',
      lname: '',
      uname: '',
      password: '',
      confirmPassword: '',
      email: '',
      address: '',
      suburb: '',
      state: '',
      postcode: '',
      mnumber: '',
      termsAccepted: false,
      showTerms: false,
    };
  },
  methods: {
    toggleTerms() {
      this.showTerms = !this.showTerms;
    },
    acceptTerms() {
      this.termsAccepted = true;
      this.showTerms = false;
    },
    submitForm(event) {
      // Stop form if terms not accepted
      if (!this.termsAccepted) {
        alert("You must accept the Terms and Conditions first.");
        event.preventDefault();
        return;
      }
    
      // Regular Expressions
      const nameRegex = /^[A-Za-z]+$/;
      const passwordRegex = /^(?=.*[\$\%\^\&\*\#]).{8,}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const postcodeRegex = /^\d{4}$/;
      const mobileRegex = /^04\d{8}$/;
    
      // First Name
      if (!this.fname || !nameRegex.test(this.fname)) {
        alert("First Name is required and must contain letters only.");
        event.preventDefault();
        return;
      }
    
      // Last Name
      if (!this.lname || !nameRegex.test(this.lname)) {
        alert("Last Name is required and must contain letters only.");
        event.preventDefault();
        return;
      }
    
      // Username
      if (!this.uname || this.uname.length < 3) {
        alert("Username is required and must be at least 3 characters.");
        event.preventDefault();
        return;
      }
    
      // Password
      if (!this.password || !passwordRegex.test(this.password)) {
        alert("Password must be at least 8 characters and include at least one special character ($, %, ^, &, *).");
        event.preventDefault();
        return;
      }
    
      // Confirm Password
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault();
        return;
      }
    
      // Email
      if (!this.email || !emailRegex.test(this.email)) {
        alert("Please enter a valid email address. 'example@mail.com'");
        event.preventDefault();
        return;
      }
    
      // Street Address (optional, max 40)
      if (this.address && this.address.length > 40) {
        alert("Street Address cannot exceed 40 characters.");
        event.preventDefault();
        return;
      }
    
      // Suburb (optional, max 20)
      if (this.suburb && this.suburb.length > 20) {
        alert("Suburb cannot exceed 20 characters.");
        event.preventDefault();
        return;
      }
    
      // Postcode
      if (!postcodeRegex.test(this.postcode)) {
        alert("Postcode must be a 4 digit number.");
        event.preventDefault();
        return;
      }
    
      // Mobile Number
      if (!mobileRegex.test(this.mnumber)) {
        alert("Mobile Number must be 10 digits and start with 04.");
        event.preventDefault();
        return;
      }
    
      // Date of Birth (must be valid and 16+ years old)
      if (!this.isValidDOB(this.dob)) {
        alert("You must enter a valid Date of Birth and be at least 16 years old.");
        event.preventDefault();
        return;
      }
    
      // Preferred Job Category
      if (!this.jobCategory) {
        alert("Please select a Preferred Job Category.");
        event.preventDefault();
        return;
      }
    
      // Everything valid -> manually submit form
      event.target.submit();
    },
    isValidDOB(dobString) {
      // Expecting dd/mm/yyyy
      const parts = dobString.split('/');
      
      if (parts.length !== 3) return false;
    
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // JS months are 0-indexed
      const year = parseInt(parts[2], 10);
    
      // Validate the date using Date constructor
      const dob = new Date(year, month, day);
    
      // Check if the created date matches the original input (handles invalid dates like 31/02)
      if (dob.getDate() !== day || dob.getMonth() !== month || dob.getFullYear() !== year) {
        return false;
      }
    
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();
      
      // If the month is before the current month, or it's the same month but the day is before today
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        return age - 1; // The birthday hasn't occurred yet this year
      }
    
      return age >= 16; // Must be at least 16 years old
    }   
    
  },
}  
</script>

<style scoped>

select
{
  color: black;
  width: 100%;
  margin-top: 6px;
  padding: 8px;
  border-radius: 10px;
}

.buttonx {
  background: rgba(255, 255, 255, 0.3);
  color: rgb(255, 255, 255);
  transition: all 0.5s;
  border-radius: 20px;
  text-align: center;
  margin-right: 20px;
  font-weight: 15px;
  padding: 5px 15px;
  border: none;
  width: auto;
  font-size: 20px;
  margin-top: 20px;
}

input {
  background-color: rgb(255, 255, 255);
}

select {
  background-color: rgb(255, 255, 255);
}

.register {
  background: rgba(215, 56, 56, 0.3);
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

.register:hover
{
  transform: scale(102%);
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

.main {
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  margin: 20px;
  background-image: url('/assets/dark-trees.jpg');
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