<template>
  <br>
  <h2>Web Application By Eloise Ridder-Strickland!</h2>

  <div class="container m-3 border">
   <div class="row">

    <div class="box col-sm-7 p-3 border">
      
        <p>
        Welcome to COS30043-Project! You have landed on the Home page.
        This project is aimed at showcasing the skills aquired throughout Semester 1, Interface Design & Development,
        as well as knowledge obtained throughout previous Web Development tutorials.
        </p>

    </div>
    
    <div class="box col-sm p-3 border">

        <p><strong>Project Folder Structure</strong></p>
          <p class="structure"> 
            COS30043/<br>
            ├── <strong>.vscode </strong><br>
            |......└── extension.json <br>
            ├── <strong> framework/ </strong><br>
            |......├── css/ <br>
            |......└── js/ <br>
            ├── <strong> node_modules/ </strong><br>
            |......└── (.modules/ x27) <br>
            ├── <strong>public/ </strong><br>
            |......├── assets/ <br>
            |......|.....├── mountains.png <br>
            |......|.....└── ocean.png <br>
            |......├── Bootstrap_logo.png <br>
            |......├── vite.svg <br>
            |......└── vue.svg <br>
            ├── <strong> src/ </strong><br>
            |......├── assets/ <br>
            |......|.....└── (Private Images x2) <br>
            |......├── <strong> router/ </strong><br>
            |......|.....└── index.js <br>
            |......├── <strong> views/ </strong><br>
            |......|.....├── About.vue <br>
            |......|.....├── Home.vue <br>
            |......|.....└── News.vue<br>
            |......├── App.vue <br>
            |......├── main.js <br>
            |......└── styles.css <br>
            ├── .gitignore <br>
            ├── index.html <br>
            ├── package-lock.json <br>
            ├── package.json <br>
            ├── README.md <br>
            ├── vite.config.js <br>
          </p>
          
            <!--<ol>
              <li> 1 </li>
              <li> 2 </li>
              <li> 3 </li>
            </ol>-->
    </div>

    <div class="containers">
      <div class="row">

      <div class="col-sm border">
        <strong>Vite</strong>
        <br><img src="/vite.svg" class="logo vite" alt="Vite logo"/>
      </div>

      <div class="col-sm border">
        <strong>Vue</strong>
        <br><img src="/vue.svg" class="logo vue" alt="Vue logo"/>
      </div>

      <div class="col-sm border">
        <strong>Bootstrap</strong>
        <br><img src="/Bootstrap_logo.png" class="logo bootstrap" alt="bootstrap logo"/>
      </div>

      </div>
    </div>

   </div>
  </div>

</template>

<style scoped>
  .logo
  {
    height: 8em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo.vue:hover
  {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  .logo.vite:hover
  {
    filter: drop-shadow(0 0 2em #59bcffaa);
  }
  .logo.bootstrap:hover
  {
    filter: drop-shadow(0 0 2em #4a07e5aa);
  }
</style>