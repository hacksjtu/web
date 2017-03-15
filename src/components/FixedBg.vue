<template>
  <div class="fixed-bg"></div>
</template>

<script>
export default {
  name: 'fixed-bg'
}
</script>

<style>
.fixed-bg {
    opacity: 0.2;
    
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100vw;
    height: 100vh;
    
    background-image: url('../assets/logo.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}
</style>
