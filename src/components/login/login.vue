<template>
  <div class="container">
    <div class="login-content">
      <div class="row h-100">
        <div class="col-3 my-auto"></div>
        <div class="col-6 my-auto form-wrapper">
          <div v-show="is.awaitinglogin" class="login-form">
            <div class="row">
              <div class="col-12 login-form-header">
                <img class="login-image" src="../../assets/login-image.png">
                <h2>Login</h2>
              </div>
            </div>
            <form>
              <div class="form-group">
                <label>Email or Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fa fa-user-circle"></i>
                      </span> 
                    </div>
                  <input type="text" class="form-control" placeholder="Username..." autocomplete="on">
                </div>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-lock"></i>
                    </span> 
                  </div>
                  <input type="password" class="form-control" placeholder="Password..." autocomplete="on">
                </div>
              </div>
              <div class="login-button">
                <div class="">
                  <button title="goToReset" type="button" class="btn btn-link no-side-padding" v-on:click="forgotPassword()">Forgot Password?</button>
                </div>
                <button title="goToSignup" type="button" class="btn btn-dark" v-on:click="createAccount()">Create Account <i class="fas fa-plus"></i></button>
                &nbsp;
                <button type="submit" class="btn btn-outline-dark" v-on:click="login()">Log in <i class="fa fa-paper-plane"></i></button>
              </div>
            </form>
          </div>
          <div v-show="is.creatingAccount" class="sign-up-form">
            <div class="row">
              <div class="col-12 sign-up-form-header">
                <i title="backToLogin" class="fa fa-arrow-left" v-on:click="backToLogin()"></i>
                <h2>Signup</h2>
              </div>
            </div>
            <form>
              <div class="form-group">
                <label>Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fa fa-user-circle"></i>
                      </span> 
                    </div>
                  <input type="text" class="form-control" placeholder="Username..." autocomplete="on">
                </div>
              </div>
              <div class="form-group">
                <label>Email address</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-envelope"></i>
                    </span> 
                  </div>
                  <input type="email" class="form-control" placeholder="Email..." autocomplete="on">
                </div>
              </div>
              <div class="form-group">
                <label>Password</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-lock"></i>
                    </span> 
                  </div>
                  <input type="password" class="form-control" placeholder="Password..." autocomplete="on">
                </div>
                <button type="button" class="btn" data-toggle="collapse" data-target="#password">
                  <small>Password Criteria <i class="fa fa-chevron-circle-down"></i></small>
                </button>
                <div id="password" class="collapse">
                  <ul>
                    <li><small>At least 8 characters</small></li>
                    <li><small>one lowercase and uppercase letter</small></li>
                    <li><small>one numeric digit</small></li>
                    <li><small>one special character</small></li>
                  </ul>
                </div>
              </div>
              <div class="form-group">
                <label>Confirm Password</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-lock"></i>
                    </span> 
                  </div>
                  <input type="password" class="form-control" placeholder="Confirm password..." autocomplete="on">
                </div>
              </div>
              <!--Error scenario -->
              <div v-if="error.signUp" class="error-message">
                <p>Error</p>
              </div>
              <div class="login-button">
                <button type="submit" class="btn btn-outline-dark">Sign Up <i class="fas fa-user-plus"></i></button>
              </div>
            </form>
          </div>
          <div v-show="is.resettingPassword" class="reset-password-form">
            <div class="row">
              <div class="col-12 reset-password-form-header">
                <i title="backToLogin" class="fa fa-arrow-left" v-on:click="backToLogin()"></i>
                <h2>Reset Password</h2>
              </div>
            </div>
            <form>
              <div class="form-group">
                <label>Verification Code</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fa fa-key"></i>
                      </span> 
                    </div>
                  <input type="text" class="form-control" placeholder="Verification code..." autocomplete="on">
                </div>
              </div>
              <div class="form-group">
                <label>Email address</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-envelope"></i>
                    </span> 
                  </div>
                  <input type="email" class="form-control" placeholder="Email..." autocomplete="on">
                </div>
              </div>
              <div class="form-group">
                <label>Password</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-lock"></i>
                    </span> 
                  </div>
                  <input type="password" class="form-control" placeholder="Password..." autocomplete="on">
                </div>
                <button type="button" class="btn" data-toggle="collapse" data-target="#reset-password">
                  <small>Password Criteria <i class="fa fa-chevron-circle-down"></i></small>
                </button>
                <div id="reset-password" class="collapse">
                  <ul>
                    <li><small>At least 8 characters</small></li>
                    <li><small>one lowercase and uppercase letter</small></li>
                    <li><small>one numeric digit</small></li>
                    <li><small>one special character</small></li>
                  </ul>
                </div>
              </div>
              <div class="form-group">
                <label>Confirm Password</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-lock"></i>
                    </span> 
                  </div>
                  <input type="password" class="form-control" placeholder="Confirm password..." autocomplete="on">
                </div>
              </div>
              <!--Error scenario -->
              <div v-if="error.signUp" class="error-message">
                <p>Error</p>
              </div>
              <div class="login-button">
                <button type="submit" class="btn btn-outline-dark">Reset Password <i class="fas fa-user-plus"></i></button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-3 my-auto"></div>
      </div>
    </div>
  </div>
</template>

<script>

const login = {
  name: 'login',
  data() {
    return {
      user: {
        username: '',
        password: '',
        signUp: {
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
        reset: {
          email: '',
          verificationCode: '',
          password: '',
          confirmPassword: '',
        }
      },
      is: {
        awaitinglogin: true,
        creatingAccount: false,
        resettingPassword: false
      },
      error: {
        login: false,
        signUp: false,
        reset: false,
        verify: false,
      },
    }
  },
  methods: {
    login() {
      console.log('login')
    },
    forgotPassword() {
      this.is.awaitinglogin = false;
      this.is.resettingPassword = true;
      this.triggerAnimation();
    },
    createAccount() {
      this.is.awaitinglogin = false;
      this.is.creatingAccount = true;
      this.triggerAnimation();
    },
    backToLogin() { 
      this.is.awaitinglogin = true;
      this.is.creatingAccount = false;
      this.is.resettingPassword = false;
      this.triggerAnimation();
    },
    triggerAnimation() {
      var target = null;
      if(event.target.title === 'backToLogin') {
        target = document.getElementsByClassName('login-form');
        target[0].classList.add('fade-in-trigger');
        return;
      }

      if (event.target.title === 'goToSignup') {
        target = document.getElementsByClassName('sign-up-form');
        target[0].classList.add('fade-in-trigger');
        return;
      }

      if (event.target.title === 'goToReset') {
        target = document.getElementsByClassName('reset-password-form');
        target[0].classList.add('fade-in-trigger');
        return;
      }

      return;
    },
  }
};

export default login;
</script>

<style scoped>
.container {
  height: 100%;
}

.login-content {
  background-color: none;
  height: 100%;
  animation-name: fade-in;
  animation-duration: 3s;
}

.form-wrapper {
  background-color: whitesmoke;
  border-radius: .25rem;
  min-height: 500px;
}

.login-form-header {
  text-align: center;
}

.login-image {
  height: 150px;
  width: 150px;
}

.login-form {
  text-align: left;
  padding: 20px;
}

.login-button {
  text-align: right;
}

.sign-up-form-header,
.reset-password-form-header {
  text-align: center;
}

.sign-up-form-header i,
.reset-password-form-header i {
  float: left;
  margin-top: 13px;
}

i:hover {
  opacity: 0.2;
  cursor: pointer;
}

.sign-up-form {
  background-color: none;
  text-align: left;
  padding: 20px;
}

.reset-password-form {
  background-color: none;
  text-align: left;
  padding: 20px;
}

.no-side-padding {
  padding-left: 0px;
  padding-right: 0px;
}

.fade-in-trigger {
  animation-name: fade-in;
  animation-duration: 2s;
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