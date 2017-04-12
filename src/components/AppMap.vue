<template>
  <div class="wrap">
    <div v-if="!isMobile">
      <div v-if="showMask" class="mask clickable" @click="showMask = false">
        <p class="prompt" v-html="$t('address')"></p>
      </div>

      <iframe width='560' height='400' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://lbs.amap.com/console/show/map/?0_560_440_121.441456_31.025138&=%E4%B8%8A%E6%B5%B7%E4%BA%A4%E9%80%9A%E5%A4%A7%E5%AD%A6%E9%97%B5%E8%A1%8C%E6%A0%A1%E5%8C%BA%20%E7%94%B5%E5%AD%90%E4%BF%A1%E6%81%AF%E4%B8%8E%E7%94%B5%E6%B0%94%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2&=%E4%B8%8A%E6%B5%B7%E4%BA%A4%E9%80%9A%E5%A4%A7%E5%AD%A6%E9%97%B5%E8%A1%8C%E6%A0%A1%E5%8C%BA%20%E7%94%B5%E5%AD%90%E4%BF%A1%E6%81%AF%E4%B8%8E%E7%94%B5%E6%B0%94%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2&=&=&=%E4%B8%8A%E6%B5%B7%E4%BA%A4%E9%80%9A%E5%A4%A7%E5%AD%A6%E9%97%B5%E8%A1%8C%E6%A0%A1%E5%8C%BA%E7%94%B5%E5%AD%90%E4%BF%A1%E6%81%AF%E4%B8%8E%E7%94%B5%E6%B0%94%E5%B7%A5%E7%A8%8B%E5%AD%A6%E9%99%A2'></iframe>

    </div>

    <div v-else>
      <div class="map-mobile">
        <p class="prompt" v-html="$t('address')"></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-map',
    props: ['isMobile'],
    data () {
      return {
        showMask: true
      }
    }
  }

</script>

<style scoped>
  .wrap {
    position: relative;
  }

  .mask {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 80%;
    height: 402px;
    top: 0;
    left: 10%;
  }

  .prompt {
    color: #fff;
    position: absolute;
    font-size: 25px;
    line-height: 50px;
    bottom: 5px;
    width: 100%;
  }

  .map-mobile {
    width: 100%;
    min-height: 300px;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('../assets/map.jpg')
  }

  @media screen and (min-width: 600px) {
    .prompt {
      font-size: 25px;
      line-height: 50px;
    }
  }

  @media screen and (max-width: 600px) {
    .prompt {
      font-size: 17px;
      line-height: 25px;
    }
  }

</style>
