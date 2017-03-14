<template>
  <div class="app-content vertical-center-wrap full-width">
    <div class="vertical-center">
      <!-- <caption-logo class="caption-logo full-width"></caption-logo> -->
      <div v-html="message" class="message"></div>
    
      <prompt-down class="full-width"></prompt-down>
      <div class="entrance">
        <img class="prompt-aside" src="../assets/concentric-sq.png">
        <span class="clickable">申请入口</span>
        <img class="prompt-aside" src="../assets/concentric-sq.png">
      </div>
      </div>
  </div>
</template>

<script>
import PromptDown from './PromptDown.vue'
import CaptionLogo from './CaptionLogo.vue'

export default {
  name: 'entrance',
  components: { PromptDown, CaptionLogo },
  data () {
    return {
      message: '欢迎各类学科学生的报名申请<br>请您填写下方申请入口中的正式申请表'
    }
  }
}
</script>

<style scoped>
  .entrance {
    font-size: 30px;
  }

  .windmill {
    height: 17px;
    animation: windmill 1s linear infinite;
  }
  .windmill-ccw {
    height: 17px;
    animation: windmill-ccw 1s linear infinite;
  }

  @keyframes windmill {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes windmill-ccw {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
  }

  @media screen and (min-width: 600px) {
    .message {
      font-size: 30px;
      margin-bottom: 10vh; 
    }
  }
  @media screen and (max-width: 600px) {
    .message {
      font-size: 20px;
      margin-bottom: 10vh;
    }
  }
</style>
