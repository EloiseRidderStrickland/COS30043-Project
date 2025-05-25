
<template>
  <div class="outer main">

        <div class="col-md-6 containerxy">
            <div class="col-1 route">
                <router-link to="/"><strong>Back</strong></router-link>
            </div>

            <div class="company col-sm mt-3">
                <div>Air-iums.com</div>
            </div>
             <div class="mt-4">
                <h3>Sorry There Was An Error Loading The Page!</h3>
                <span>This is a test driver page. This page return
                an items respective details read from a .JSON file, with 
                infomation dynamically displayed and updated.
                This would further include the option to 'add to cart', 'save'
                or 'like' a 'Logged-In' members preference. 
                </span>
             </div>
        </div>

    </div>
    
</template>

<style scoped>

.containerxy
{
  display: inline-block;
  backdrop-filter: blur(4px);
  background-color: rgba(36, 35, 35, 0.4);
  transition: transform .2s;
  border-radius: 20px;
  padding: 30px;
  transition: transform .2s;
}
@keyframes fadeIn 
  {
    to {
        opacity: 1;
       }
  }

.containerxy:hover
{
  transform: scale(101%);
}
  
h3 
{
  font-family: 'Kindmight', sans-serif;
  padding: 20px;
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
  background-image: url('/collage/terra-5.jpg');
}

.route a,
.route router-link {
  color: white;
  text-decoration: none;
}

</style>