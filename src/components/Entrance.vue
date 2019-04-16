<template>
  <div class="app-content fixed-bg vertical-center-wrap full-width">
    <div class="vertical-center">
      <div v-html="$t('signUpPrompt')" class="message"></div>

      <prompt-down class="full-width" :white="true"></prompt-down>
      <div class="entrance">
        <img class="prompt-aside windmill" src="../assets/concentric-sq-i.png">
        <a href="https://www.hackx.org/competitions/hackxsjtu2019" style="color: white;text-decoration: none;">{{ $t('signUp') }}</a>
        <img class="prompt-aside windmill-ccw" src="../assets/concentric-sq-i.png">
      </div>
      </div>
  </div>
</template>

<script>
import PromptDown from './PromptDown.vue'
import CaptionLogo from './CaptionLogo.vue'

export default {
  name: 'entrance',
  components: { PromptDown, CaptionLogo }
}
</script>

<style scoped>
  .fixed-bg {
    background-image: url('../assets/bg-i.png');
    background-color: #000;
    color: #fff;
  }
  .entrance {
    font-size: 30px;
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
