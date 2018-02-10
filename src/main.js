// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'
import VueRouter from 'vue-router'
import swal from 'sweetalert2'
import { mapGetters } from 'vuex'
import { store } from './store/index.js'
import axios from 'axios'
import { axiosConfig } from '../config/axios.config'
const config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'en',
  dictionary: null,
  strict: true
}
Vue.prototype.$axios = axios.create(axiosConfig)
Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VeeValidate, config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  computed: {
    ...mapGetters({
      userDataError: 'userDataError'
    })
  },
  watch: {
    userDataError () {
      // redirect to login if user data fails
      if (this.userDataError) {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          showConfirmButton: false
        })
        setTimeout(() => {
          window.location.href = '/'
        }, 1500)
      }
    }
  },
  components: { App },
  template: '<App/>'
})
