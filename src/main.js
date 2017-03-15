// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n'

import App from './App'
import locales from './i18n'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    i18n: VuexI18n.store
  }
})

Vue.use(VuexI18n.plugin, store)

Vue.config.productionTip = false

Vue.i18n.add('en', locales['en'])
Vue.i18n.add('cn', locales['cn'])
Vue.i18n.set('cn')

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})

import 'normalize.css/normalize.css'
import './app.css'
