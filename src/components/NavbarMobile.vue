<template>
  <nav class="app-nav">
    <span @click="$emit('toggleLocale')"> 中 | En </span>
    <div class="nav-collapse clickable" 
      @click="showNav = !showNav"
    >
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <transition name="fade">
      <ul v-if="showNav">
        <li v-for="ind in 5"> 
          <img class="prompt-aside" src="../assets/concentric-sq.png">
          <span class="clickable" @click="showNav = !showNav;$emit('slide', ind-1)">{{ $t('views')[ind-1] }}</span>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'navbar-mobile',
  props: ['views'],
  data () {
    return {
      showNav: false
    }
  },
  methods: {
    toggleNav () {
      this.showNav = !this.showNav
    }
  }
}

</script>

<style scoped>
.app-nav {
  position: fixed;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  font-size: 20px;
  z-index: 100;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: right;
  background-color: #fdfdfd;
  box-shadow: 0 10px 50px #aaa;
}
.nav-collapse {
  margin-right: 30px;
  margin-left: 30px;
  margin-top: 2px;
  display: inline-block;
  vertical-align: bottom;
}
.bar {
  width: 25px;
  height: 5px;
  background-color: #888;
  margin-top: 3px;
  border-radius: 2px;
}
ul {
  background-color: rgba(250, 250, 250, .6);
  
  position: absolute;
  right: 0px;
  top: 50px;
  list-style-type: none;
  
  padding: 0;
  margin: 0;
  
  text-shadow: 1px 1px #fff;
  font-size: 18px;
}
li {
  padding: 10px 10px 10px 20px;
  border-radius: 5px;
  text-align: left;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
