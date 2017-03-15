<template>
  <div class="prompt-down">
    <div class="floating-shadow" :class="{ white }" >
      <img v-if="white" src="../assets/diamond-i.png">
      <img v-else src="../assets/diamond.png">
    </div>
    <img v-if="white" src="../assets/diamonds-i.png">
    <img v-else src="../assets/diamonds.png">
  </div>
</template>

<script>
export default {
  name: 'prompt-down',
  props: {
    white: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .prompt-down {
    height: 15vh;
    margin-bottom: 10vh;
    position: relative;
    transition: transform, .5s;
  }
  .prompt-down:hover {
    transform: translateY(5px);
  }

  img {
    max-height: 100%;
    max-width: 100%;
  }

  .floating-shadow {
    position: absolute;
    height: 100%;
    width: 100%;
    top: -10px;
    opacity: 0.2;
    z-index: 10;
    transition: transform, .5s;
    animation: jump .7s ease-in-out alternate infinite;
  }
  .floating-shadow.white {
    opacity: 0.5;
  }

  .floating-shadow:hover {
    transform: translateY(-10px);
  }

  @keyframes jump {
    from {top: -10px;}
    to {top: -15px;}
  }
</style>
