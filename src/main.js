import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTelInputVuetify from 'vue-tel-input-vuetify/lib';

Vue.use(VueTelInputVuetify, {
  vuetify,
});

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("App");


