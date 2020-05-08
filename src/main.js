import Vue from 'vue'
import App from './App.vue'
import router from './router.js';
import Amplify from 'aws-amplify';
import config from '../src/config.json';

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
