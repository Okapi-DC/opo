import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from './bootstrap'
import * as VueGoogleMaps from "vue2-google-maps";

import './style/custom.scss'
import VueKinesis from 'vue-kinesis'


import Vuelidate from 'vuelidate'


Vue.use(Vuelidate)
Vue.use(VueKinesis)



Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyD3s1bm04ITcXHd-LQqUSR5MiPDgUr-rmA",
    libraries: "places" // necessary for places input
  }

});


new Vue({
  router,
  store,
  bootstrap,


  render: h => h(App),
}).$mount('#app')

