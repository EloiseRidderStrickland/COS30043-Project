<template>

<!--===================================================== HEADER BAR =====================================================-->
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
              <router-link to="/login" class="button" style="vertical-align:middle"><span>Login</span></router-link>
              <router-link to="/register" class="button" style="vertical-align:middle"><span>Sign-In</span></router-link>
          </div>
        </div>

        <div class="subheader">
            <br><h2>About Us</h2>
        </div>

  </header>
  <!--==================================================== HEADER BAR END ====================================================-->
 

  <div class="outer main">
    <div class="col-sm p-3">
      <div class="pagbox">
          <h1>Sponsors</h1>

          <v-table>
            <thead>
              <tr>
                <th>Memeber</th>
                <th>Company</th>
                <th>Donation</th>
                <th>Contribution</th>
              </tr>
            </thead>
            <!-- Using v-for to loop units and list them -->
            <tbody>
              <tr v-for="unit in getItems"  >
                <td>{{unit.code}}</td>
                <td>{{unit.desc}}</td>
                <td>{{unit.cp}}</td>
                <td>{{unit.type}}</td>
              </tr>
            </tbody>
        </v-table>

        <!-- Vue Paginate template -->
        <paginate 
          :page-count="5"    
          :page-range="3" 
          :margin-pages="1"
          :click-handler="clickCallback" 
          :prev-text=" '<' " 		
          :next-text="'>'" 
          :container-class="'pagination'" 
          :active-class="'currentPage'"
          >
        </paginate>
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
  
  .subheader
  {
    font-family: 'Kindmight', sans-serif;
  }

  h1
  {
    font-family: 'Kindmight', sans-serif;
    font-size: 40px;
  }

  .main
  {
    background-image: url('/collage/terra-3.jpg');
    position: relative;
    background-position: center;
    background-size: cover;
    border-radius: 20px;
  }

  .pagination 
  {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 20px;
  }

  td
  {
    text-align: left;
    font-size: 20px;
    padding-right: 50px;
    padding-bottom: 10px;
    color: rgb(255, 255, 255);
  }
 
  th
  {
    text-align: left;
    padding-bottom: 10px;
    font-size: 20px;
    color: rgb(80, 95, 205);
  }

  .pagbox
  {
    padding: 20px;;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.4);  
    color: rgb(255, 255, 255);
  }


  </style>

 <script>
import VuejsPaginate from 'vuejs-paginate-next'

export default {
  components: {
    paginate: VuejsPaginate,
  },
  
  data() {
    return {
      currentPage: 1,
      msg: [],
      err: null
    }
  },

  mounted() {
    fetch('sponsors.json')
        .then(response => {
            console.log("Fetch status:", response.status);
            if (!response.ok) {
                throw new Error('No File loaded');
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            this.msg = data; 
        })
        .catch(error => {
            this.err = error.message;
            console.error('Fetch error:', error);
        });
  },

  computed: {
    getItems() {
      let current = this.currentPage * 3;
      let start = current - 3;
      return this.msg.slice(start, current);
    }
  },

  methods: {
    clickCallback(pageNum) {
      this.currentPage = Number(pageNum);
    }
  }
}
</script>