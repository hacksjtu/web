<template>
  <div id="app">
    <!-- <fixed-bg></fixed-bg> -->
    <navbar-mobile v-if="isMobile"
      :views=views
      @slide="slideTo"
    >
    </navbar-mobile>

    <banner class="js-scroll-anchor">
    
      <navbar v-if="!isMobile" slot="navbar" id="banner-nav"
      @slide="slideTo"
      @toggleLocale="toggleLocale"
      ></navbar>
      <!-- id used for 'boot' library -->
    </banner>

    <about-us class="js-scroll-anchor" :isMobile="isMobile"></about-us>
    <entrance class="js-scroll-anchor"></entrance>
    <timeline class="js-scroll-anchor" :scheduleStrings="$t('schedule')"></timeline>
    <faq class="js-scroll-anchor"></faq>
    <map></map>
    <sponsors class="js-scroll-anchor"></sponsors>
    <app-footer></app-footer>

  </div>
</template>
  
<script>
import boot from 'booting-nav'
import scroll from 'scroll'

import Hello from './components/Hello.vue'
import Banner from './components/Banner.vue'
import Navbar from './components/Navbar.vue'
import NavbarMobile from './components/NavbarMobile.vue'
import AboutUs from './components/AboutUs.vue'
import Entrance from './components/Entrance.vue'
import Timeline from './components/Timeline.vue'
import Faq from './components/FAQ.vue'
import AppMap from './components/AppMap.vue'
import Sponsors from './components/Sponsors.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'app',
  components: {
    Hello, Banner, Navbar, NavbarMobile, Entrance, AboutUs, Timeline, Faq, AppMap, Sponsors, AppFooter
  },
  data () {
    return {
      slide: null,
      isMobile: false
    }
  },
  computed: {
    scrollAnchors () {
      return document.getElementsByClassName('js-scroll-anchor')
    }
  },
  methods: {
    slideTo (ind) {
      scroll.top(document.body, this.scrollAnchors[ind + 1].offsetTop)
    },
    toggleLocale () {
      this.$i18n.locale() === 'cn' ? this.$i18n.set('en') : this.$i18n.set('cn')
    }
  },
  mounted () {
    let isMobile = this.isMobile = window.innerWidth < 600
    if (!isMobile) {
      boot(document.getElementById('banner-nav'))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*height: 100vh;*/
  overflow-x: hidden;
}
</style>
