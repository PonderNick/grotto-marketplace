<template>
  <div class="container-fluid">
    <div class="welcome-content">
      <div class="welcome-content-header">
        <div class="row h-100 w-100 no-side-margin">
          <div class="col-12 my-auto no-side-padding">
            <div class="jumbotron jumbotron-fluid">
              <div class="container-fluid">
                <h1 class="display-4">Welcome!</h1>
                <p class="lead">The Grotto was created for the purpose of providing a central directory of cosmetic items within Fortnite Battle Royal past and present</p>
                <br/>
                <p class="lead">This website, contents and authour are not affiliated with Epic Games Fortnite Battle Royal in anyway, just merely a fan of the game!</p>
                <hr class="my-4">
                <p class="lead">
                  <router-link class="btn btn-outline-light" :to="{ name: 'Shop' }">Continue to the item shop</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="welcome-content-body">
          <div class="row w-100">
            <div class="col-4">
              <div class="card bg-dark text-white">
                <img class="card-img" src="../../assets/welcome-card1.png" alt="Card image">
                <div class="card-img-overlay">
                  <h5 class="card-title">How the site was built</h5>
                  <p class="card-text"></p>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card bg-dark text-white">
                <img class="card-img" src="../../assets/welcome-card2.png" alt="Card image">
                <div class="card-img-overlay">
                  <h5 class="card-title">Website features</h5>
                  <p class="card-text"></p>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card bg-dark text-white">
                <img class="card-img" src="../../assets/welcome-card3.png" alt="Card image">
                <div class="card-img-overlay">
                  <h5 class="card-title">About the Author</h5>
                  <p class="card-text"></p>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const Welcome = {
  name: 'welcome',
}
export default Welcome;
</script>

<style scoped>
.welcome-content {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
}

.welcome-content-header {
  background-color: none;
  height: 100%;
  color: whitesmoke;
}

.jumbotron {
  background-color: whitesmoke;
  border-radius: .25rem;
  background-image: url(../../assets/welcome-background.png);
  background-repeat: no-repeat;
  background-size: 100%;
}

.welcome-card {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.no-side-padding {
  padding-left: 0px;
  padding-right: 0px;
}

.no-side-margin {
  margin-left: 0px;
  margin-right: 0px;
}

@keyframes blur {
  from {
    filter: blur(0px);
  }
  to {
    filter: blur(6px);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>