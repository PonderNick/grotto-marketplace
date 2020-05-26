<template>
  <div class="container-fluid no-side-padding">
    <div class="welcome-content">
      <div class="welcome-content-header">
        <div class="row h-100 w-100 no-side-margin">
          <div class="col-12 my-auto no-side-padding">
            <div class="jumbotron jumbotron-fluid">
              <div class="container-fluid">
                <h1 class="display-3">Welcome!</h1>
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
      <div class="container-fluid no-side-padding">
        <div class="welcome-content-body">
          <div class="row w-100">
            <div class="col-4">
              <div class="shadow p-3 mb-5 bg-white rounded">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title"><strong>Technologies</strong></h3>
                  </div>
                  <img class="card-img site-info" src="../../assets/welcome-card1.png" alt="Card image">
                  <div class="card-img-overlay">
                    <div class="card-content shadow p-3 mb-5 bg-white rounded text-center">
                      <p><strong>This website was created utilising the following technologies:</strong></p>
                      <ul>
                        <li><strong>Languages:</strong> HTML5, CSS, Javascript(NodeJS)</li>
                        <li><strong>Frameworks:</strong> VueJS, Bootstrap</li>
                        <li><strong>Cloud Services:</strong> AWS Cognito</li>
                        <li><strong>API:</strong> FortniteAPI.io</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="shadow p-3 mb-5 bg-white rounded">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title"><strong>Website Features</strong></h3>
                  </div>
                  <img class="card-img site-features" src="../../assets/welcome-card2.png" alt="Card image">
                  <div class="card-img-overlay">
                    <div class="card-content shadow p-3 mb-5 bg-white rounded text-center">
                      <ul>
                        <li>Filter and search for items within Fortnite Battle Royal.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="shadow p-3 mb-5 bg-white rounded">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title"><strong>About the Author</strong></h3>
                  </div>
                  <img class="card-img about-author" src="../../assets/welcome-card3.png" alt="Card image">
                  <div class="card-img-overlay">
                    <div class="card-content shadow p-3 mb-5 bg-white rounded text-center">
                      <p><strong>Nicholas Winter:</strong></p>
                      <ul>
                        <li><strong>CV:</strong> http://www.nick-winter.com</li>
                        <li><strong>Bitbucket:</strong> https://bitbucket.org/NickWT/</li>
                        <li><strong>Github:</strong> https://github.com/PonderNick</li>
                      </ul>
                    </div>
                  </div>
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
import { mapState } from 'vuex';

const Welcome = {
  name: 'welcome',
  computed: {
    ...mapState({
      loggedIn: state => state.is.loggedIn,
    })
  },
  mounted() {
    this.checkAuth();
    this.scrollTop();
  },
  methods: {
    checkAuth() {
      if (this.loggedIn) {
        return;
      } else {
        return this.$router.push(`/`);
      }
    },
    scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  }
};

export default Welcome;
</script>

<style scoped>
.welcome-content {
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
  background-image: url(../../assets/welcome-background.png);
  background-repeat: no-repeat;
  background-size: 100%;
  margin-bottom: 0rem;
}

.welcome-content-body {
  height: 100%;
  background-color: whitesmoke;
  padding: 25px;
}

.welcome-card {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.card {
  color: darkgray;
}

li {
  list-style: none;
}

.card-content {
  margin-top: 10px;
  text-align: left;
}

.card-img-overlay {
  height: 82%;
  opacity: 0;
  top: unset;
  bottom: 0;
}

.card-img-overlay:hover {
  color: gray;
  opacity: 1;
  animation: fade-in;
  animation-duration: 2s;
  cursor: pointer;
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