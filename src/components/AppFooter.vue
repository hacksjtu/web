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
.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
img {
  height: 200px;
}

@media screen and (min-width: 600px) {
  .wrapper {
    display: flex;
  }
  .column {
    width: 50%;
    height: 300px;
  }
}
@media screen and (max-width: 600px) {
  .column {
    height: 200px;
  }
}
</style>
