<template>
  <nav class="app-nav">
    <ul>
      <li>
        <span class="clickable" @click="$emit('toggleLocale')"> 中 | En </span>
      </li>
      <li v-for="ind in 5"> 
        <img class="prompt-aside" src="../assets/concentric-sq.png">
        <span class="clickable" @click="$emit('slide', ind-1)">{{ $t('views')[ind-1] }} </span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  props: ['text']
}
</script>

<style scoped>
.app-nav {
  width: 100%;
  font-size: 20px;
  z-index: 100;
  padding-top: 15px;
  padding-bottom: 10px;
  transition: background-color .2s;
  -webkit-user-select: none;
}
.app-nav.booting-sub-nav-0 { 
  /* css for 'boot' library class */
  background-color: rgba(255, 255, 255, 0.7); 
}
.app-nav > ul{
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.app-nav > ul > li {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
