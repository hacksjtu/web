<template>
  <div class="wrap">
    <div v-if="showMask" class="mask clickable" @click="showMask = false">
      <p v-html="$t('address')"></p>
    </div>
    <iframe src="http://map.baidu.com/?s=inf%26uid%3D6b01a78536153104631c67fe" width="80%" height="400px"></iframe>
  </div>
</template>

<script>
export default {
  name: 'app-map',
  data () {
    return {
      showMask: true
    }
  }
}
</script>

<style scoped>
.wrap {
  padding-top: 80px;
  position: relative;
}

.mask {
  position: absolute;
  width: 80%;
  height: 400px;
  top: 80px;
  left: 10%;
  background-color: rgba(0, 0, 0, 0.5);
}

.mask p {
  color: #fff;
  line-height: 50px;
  font-size: 25px;
  position: absolute;
  bottom: 5px;
  width: 100%;
}
</style>
