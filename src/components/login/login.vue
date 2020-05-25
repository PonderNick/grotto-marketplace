<template>
  <div class="container">
    <div class="login-content">
      <div class="row h-100">
        <div class="col-3"></div>
        <div class="col-6 my-auto form-wrapper">
          <div v-show="is.awaiting.login" class="login-form">
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
                  <input type="text" v-model="user.username" class="form-control" placeholder="Username..." autocomplete="on">
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
                  <input type="password" v-model="user.password" class="form-control" placeholder="Password..." autocomplete="on">
                </div>
              </div>
              <div class="error-message" v-if="error.login">
                <p>{{error.message}}</p>
              </div>
              <div class="confirm-email-message" v-if="is.awaiting.emailConfirmation">
                <p>Please click the verfication link sent to your email</p>
              </div>
              <div class="login-button">
                <button title="goToReset" type="button" class="btn btn-link no-side-padding" v-on:click="forgotPassword()">Forgot Password?</button>
                <br/>
                <button title="goToSignup" type="button" class="btn btn-dark" v-on:click="createAccount()">Create Account <i class="fas fa-plus"></i></button>
                &nbsp;
                <button type="button" class="btn btn-outline-dark" v-on:click="login()">Log in <i class="fa fa-paper-plane"></i></button>
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
                  <input type="text" v-model="user.signUp.username" class="form-control" placeholder="Username..." autocomplete="on">
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
                  <input type="email" v-model="user.signUp.email" class="form-control" placeholder="Email..." autocomplete="on">
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
                  <input type="password" v-model="user.signUp.password" class="form-control" placeholder="Password..." autocomplete="on">
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
                  <input type="password" v-model="user.signUp.confirmPassword" class="form-control" placeholder="Confirm password..." autocomplete="on">
                </div>
              </div>
              <div class="error-message" v-if="error.creatingAccount">
                <p>{{error.message}}</p>
              </div>
              <div class="login-button">
                <button type="button" class="btn btn-outline-dark" v-on:click="signUp()">Sign Up <i class="fas fa-user-plus"></i></button>
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
                <div v-if="is.awaiting.resetCode">
                  <div class="form-group">
                    <label>Email address</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-envelope"></i>
                        </span> 
                      </div>
                      <input type="email" v-model="user.reset.email" class="form-control" placeholder="Email..." autocomplete="on">
                    </div>
                  </div>
                  <div v-if="error.verify" class="error-message">
                    <p>{{error.message}}</p>
                  </div>
                  <div class="login-button">
                    <button type="button" class="btn btn-outline-dark" v-on:click="sendVerification()">Send verification code <i class="fas fa-paper-plane"></i></button>
                  </div>
                </div>
              </div>
              <div v-if="!is.awaiting.resetCode">
                <div class="form-group">
                  <label>Verification Code</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-key"></i>
                        </span> 
                      </div>
                    <input type="text" v-model="user.reset.verificationCode" class="form-control" placeholder="Verification code..." autocomplete="on">
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
                    <input type="password" v-model="user.reset.password" class="form-control" placeholder="Password..." autocomplete="on">
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
                    <input type="password" v-model="user.reset.confirmPassword" class="form-control" placeholder="Confirm password..." autocomplete="on">
                  </div>
                </div>
                <div v-if="error.reset" class="error-message">
                  <p>{{error.message}}</p>
                </div>
                <div class="login-button">
                  <button type="button" class="btn btn-outline-dark" v-on:click="resetPassword()">Reset Password <i class="fas fa-user-plus"></i></button>
                </div>
              </div>
            </form>
          </div>
          <div v-show="has.resetPassword" class="password-changed-form">
            <div class="row password-changed-form-header">
              <i title="backToLogin" class="fa fa-arrow-left" v-on:click="backToLogin()"></i>
            </div>
            <div class="row h-100">
              <div class="col-12 my-auto">
                <img src="../../assets/llama.png" alt="llama.png">
                <h3>Your password has been successfully changed!</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Auth } from 'aws-amplify';
import store from '../../store.js';

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
        creatingAccount: false,
        resettingPassword: false,
        awaiting: {
          login: true,
          emailConfirmation: false,
          resetCode: true,
        }
      },
      has: {
        resetPassword: false,
      },
      error: {
        login: false,
        creatingAccount: false,
        verify: false,
        reset: false,
        message: '',
      },
    }
  },
  computed: {
    ...mapState({
      loggedIn: state => state.is.loggedIn,
    })
  },
  methods: {
    login() {
      let username = this.user.username;
      let password = this.user.password;

      return Auth.signIn({
        username,
        password,
      })
      .then(() => {
        store.commit('setAuth');
        this.$router.push('/welcome');
      })
      .catch((error) => {
        this.error.login = true;
        this.error.message = error.message;
      });
    },
    signUp() {
      let username = this.user.signUp.username;
      let email = this.user.signUp.email;
      let password = this.user.signUp.password;
      this.clearErrors();

      return this.signUpValidations()
      .then(() => {
        return Auth.signUp({
          username,
          password,
          attributes: {
            email: email
          }
        })
        .then(() => {
          this.is.awaiting.emailConfirmation = true;
          this.backToLogin();
        })
        .catch((error) => {
          this.error.creatingAccount = true;
          this.error.message = error.message;
        });
      })
      .catch((error) => {
        this.error.creatingAccount = true;
        this.error.message = error;
      });
      //successful signup
      //failed signup
    },
    signUpValidations() {
      if (this.user.signUp.username === '') {
        return Promise.reject('Please enter a username.');
      }

      if (this.user.signUp.email === '') {
        return Promise.reject('Please enter an email.');
      }

      if (this.user.signUp.password !== this.user.signUp.confirmPassword) {
       return Promise.reject('Passwords do not match, please re-enter your password');
      }

      if (this.user.signUp.password.length < 8) {
        return Promise.reject('Your password should contain more than eight characters');
      }

      if (!this.user.signUp.password.match(/\d/g)) {
        return Promise.reject('Your password should contain at least one number');
      }

      if (!this.user.signUp.password.match(/[!@#$%^&*(),.?"':;{}|<>+=-]/g)) {
        return Promise.reject('Your password should contain at least one special character');
      }

      if (!this.user.signUp.password.match(/[A-Z]/g)) {
        return Promise.reject('Your password should contain at least one upper case letter');
      }

      if (!this.user.signUp.password.match(/[a-z]/g)) {
        return Promise.reject('Your password should contain at least one lower case letter');
      }

      return Promise.resolve();
    },
    sendVerification() {
      return Auth.forgotPassword(this.user.reset.email)
      .then(() => {
        this.is.awaiting.resetCode = false;
      })
      .catch((error) => {
        this.error.verify = true;
        this.error.message = error.message
      });
    },
    resetPassword() {
      return this.resetPasswordValidations()
      .then(() => {
        return Auth.forgotPasswordSubmit(
          this.user.reset.email,
          this.user.reset.verificationCode,
          this.user.reset.password
        )
        .then(() => {
          this.is.resettingPassword = false;
          this.has.resetPassword = true;
        })
        .catch((error) => {
          this.error.reset = true;
          this.error.message = error.message;
        });
      })
      .catch((error) => {
        this.error.reset = true;
        this.error.message = error;
      });
    },
    resetPasswordValidations() {
      if (this.user.reset.verificationCode === '') {
        return Promise.reject('Please enter a your verification code.');
      }

      if (this.user.reset.password !== this.user.reset.confirmPassword) {
       return Promise.reject('Passwords do not match, please re-enter your password');
      }

      if (this.user.reset.password.length < 8) {
        return Promise.reject('Your password should contain more than eight characters');
      }

      if (!this.user.reset.password.match(/\d/g)) {
        return Promise.reject('Your password should contain at least one number');
      }

      if (!this.user.reset.password.match(/[!@#$%^&*(),.?"':;{}|<>+=-]/g)) {
        return Promise.reject('Your password should contain at least one special character');
      }

      if (!this.user.reset.password.match(/[A-Z]/g)) {
        return Promise.reject('Your password should contain at least one upper case letter');
      }

      if (!this.user.reset.password.match(/[a-z]/g)) {
        return Promise.reject('Your password should contain at least one lower case letter');
      }

      return Promise.resolve();
    },
    forgotPassword() {
      this.is.awaiting.login = false;
      this.is.resettingPassword = true;
      this.triggerAnimation();
    },
    createAccount() {
      this.is.awaiting.login = false;
      this.is.creatingAccount = true;
      this.triggerAnimation();
    },
    clearValues() {
      this.user.username = '';
      this.user.password = '';
      this.user.signUp.username = '';
      this.user.signUp.email = '';
      this.user.signUp.password = '';
      this.user.signUp.confirmPassword = '';
      this.user.reset.email = '';
      this.user.reset.verificationCode = '';
      this.user.reset.password = '';
      this.user.reset.confirmPassword = '';
    },
    clearErrors() {
      this.error.login = false;
      this.error.creatingAccount = false;
      this.error.verify = false;
      this.error.message = '';
    },
    backToLogin() { 
      this.is.awaiting.login = true;
      this.is.creatingAccount = false;
      this.is.resettingPassword = false;
      this.has.resetPassword = false;
      this.triggerAnimation();
      this.clearValues();
      this.clearErrors();
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

.password-changed-form-header i {
  float: left;
  margin-top: 13px;
  margin-left: 15px;
}

i:hover {
  opacity: 0.2;
  cursor: pointer;
}

.sign-up-form,
.reset-password-form {
  background-color: none;
  text-align: left;
  padding: 20px;
}

.password-changed-form {
  text-align: center;
  padding: 20px;
  height: 100%;
}

.no-side-padding {
  padding-left: 0px;
  padding-right: 0px;
}

.fade-in-trigger {
  animation-name: fade-in;
  animation-duration: 2s;
}

.error-message {
  text-align: right;
  color: red;
}

.confirm-email-message {
  text-align: right;
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