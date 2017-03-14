<template>
  <div class="prompt-down">
    <div class="floating-shadow" >
      <img src="../assets/diamond.png">
    </div>
    <img src="../assets/prompt-v2.png">
  </div>
</template>

<script>
export default {
  name: 'prompt-down'
}
</script>

<style scoped>
  .prompt-down {
    height: 15vh;
    margin-bottom: 10vh;
    position: relative;
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
    z-index: 0;
    transition: transform, .5s;
    animation: jump .7s ease-in-out alternate infinite;
  }

  .floating-shadow:hover {
    transform: translateY(-10px);
  }

  @keyframes jump {
    from {top: -10px;}
    to {top: -15px;}
  }
</style>
