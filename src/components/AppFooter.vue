<template>
  <div class="wrapper fixed-bg">
    <div class="column">
      <div>
        <p v-html="$t('rightStatement')"></p>
      </div>
    </div>
    <div class="column">
      <div>
        <img src="../assets/qrcode.png"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style scoped>
.wrapper {
  display: flex;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 300px;
}
img {
  height: 200px;
}
</style>
