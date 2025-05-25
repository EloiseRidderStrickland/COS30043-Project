<template>
  <div class="outer main">
    <div class="containerxy">

<!------ NAVIGATION ------>
        <div class="col-1 route">
            <router-link to="/"><strong>Home</strong></router-link>
        </div>

        <div class="company col-sm mt-3">
          <div>Air-iums.com</div>
        </div>

<!------ HEADING ------>
      <div class="confirmation-header">
        <h2>Registration Successful!</h2>
      </div>

<!------ CONFIRMATION DETAILS ------>
      <div class="confirmation-body">
        <p class="confirmation-message">
          <em>Thank you for registering with Air-iums.com! Your account has been successfully created.</em>
        </p>

        <div>
          <h3>Registration Details:</h3>
          
          <div class="detail-group">
            <h4>Personal Information</h4>
            <div class="detail-item">
              <span class="label">Full Name:</span>
              <span class="value">{{ formData.fname }} {{ formData.lname }}</span>
            </div>
            <div class="detail-item">
              <span class="label">Username:</span>
              <span class="value">{{ formData.uname }}</span>
            </div>
            <div class="detail-item">
              <span class="label">Email:</span>
              <span class="value">{{ formData.email }}</span>
            </div>
            <div class="detail-item">
              <span class="label">Mobile Number:</span>
              <span class="value">{{ formData.mnumber }}</span>
            </div>
          </div>

          <div class="detail-group">
            <h4>Address Information</h4>
            <div class="detail-item">
              <span class="label">Street Address:</span>
              <span class="value">{{ formData.address }}</span>
            </div>
            <div class="detail-item">
              <span class="label">Suburb:</span>
              <span class="value">{{ formData.suburb }}</span>
            </div>
            <div class="detail-item">
              <span class="label">State:</span>
              <span class="value">{{ getStateName(formData.state) }}</span>
            </div>
            <div class="detail-item">
              <span class="label">Postcode:</span>
              <span class="value">{{ formData.postcode }}</span>
            </div>
          </div>
        </div>

        <div class="next-steps">
          <h3>What's Next?</h3>
          <ul>
            <li>A confirmation email has been sent to <u>{{ formData.email }}</u></li>
            <li>Please check your email and follow the verification link</li>
            <li>Once verified, you can start using your Air-iums.com account, purchase and save items!</li>
          </ul>
        </div>

        <div class="action-buttons">
          <router-link to="/login" class="login">Login Now</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Confirmation',
  data() {
    return {
      formData: {}
    };
  },
  created() {
    if (this.$route.query.data) {
      this.formData = JSON.parse(this.$route.query.data);
    } else {
      this.$router.push('/register');
    }
  },
  methods: {
    getStateName(stateCode) {
      const states = {
        'vic': 'Victoria',
        'nsw': 'New South Wales',
        'qld': 'Queensland',
        'wa': 'Western Australia',
        'sa': 'South Australia',
        'nt': 'Northern Territory',
        'tm': 'Tasmania'
      };
      return states[stateCode] || stateCode;
    }
  }
}
</script>

<style scoped>
.main {
  margin: 20px;
  background-image: url('/collage/terra-10.jpg');
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

.containerxy {
  display: inline-block;
  backdrop-filter: blur(4px);
  background-color: rgba(36, 35, 35, 0.6);
  transition: transform .2s;
  border-radius: 20px;
  padding: 30px;
  max-width: 700px;
  width: 100%;
}

.confirmation-header {
  text-align: center;
  margin-bottom: 30px;
}

.confirmation-header h2 {
  font-family: 'Kindmight', sans-serif;
  color: white;
  margin-bottom: 20px;
}

.confirmation-body {
  color: white;
}

.confirmation-message {
  text-align: center;
  font-size: 18px;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
}

.details-container {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 30px;
}

.details-container h3 {
  color: #ffffff;
  text-align: center;
  margin-bottom: 25px;
  font-size: 24px;
}

.detail-group {
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 10px;
  transition: all 0.5s;
}

.detail-group:hover
{
  transform: scale(101%);
}

.detail-group h4 {
  color: #ffffff;
  margin-bottom: 15px;
  font-size: 18px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 5px;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 8px 0;
}

.label {
  font-weight: bold;
  color: #E8F5E8;
}

.value {
  color: white;
  text-align: right;
  max-width: 60%;
  word-wrap: break-word;
}

.next-steps {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
  text-align: left;
  transition: all 0.5s;
}

.next-steps:hover
{
  transform: scale(102%);
}

.next-steps h3 {
  color: #ffffff;
  margin-bottom: 15px;
}

.next-steps ul {
  list-style: none;
  padding: 0;
}

.next-steps li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

.next-steps li:before {
  content: "→";
  position: absolute;
  left: 0;
  color: #ffffff;
  font-weight: bold;
}

.action-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 150px;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.route a {
  color: white;
  text-decoration: none;
  margin-right: 15px;
}

.route a:hover {
  text-decoration: underline;
}

.company {
  color: white;
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
}

.login {
  background: rgba(255, 255, 255, 0.5);
  color: rgb(255, 255, 255);
  transition: all 0.5s;
  border-radius: 20px;
  text-align: center;
  font-weight: 15px;
  padding: 5px 15px;
  border: none;
  width: 100%;
  font-size: 20px;
  margin-top: 20px;
  text-decoration: none;
}

.login:hover
{
  transform: scale(102%);
}

</style>