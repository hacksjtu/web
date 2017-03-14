<template>
  <nav class="app-nav">
    <ul>
      <li v-for="(item, ind) in views"> 
        <img v-if="ind > 0" class="prompt-aside" src="../assets/concentric-sq.png">
        <span class="clickable" @click="$emit('slide', ind)">{{ item.title }} </span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  props: ['views', 'fixed']
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
