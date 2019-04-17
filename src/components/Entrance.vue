<template>
  <div class="app-content fixed-bg">
<!--    <div class="vertical-center">-->
    <div class="message">
      <div v-html="$t('signUpPrompt')"></div>

<!--      <prompt-down class="full-width" :white="true"></prompt-down>-->
<!--      <div class="entrance">-->
<!--        <img class="prompt-aside windmill" src="../assets/concentric-sq-i.png">-->
        <a href="https://www.hackx.org/competitions/hackxsjtu2019" style="color: black;text-decoration: none;">{{ $t('signUp') }}</a>
    </div>
<!--        <img class="prompt-aside windmill-ccw" src="../assets/concentric-sq-i.png">-->
<!--      </div>-->
<!--      </div>-->
  </div>
</template>

<script>
import PromptDown from './PromptDown.vue'
import CaptionLogo from './CaptionLogo.vue'

export default {
  name: 'entrance',
  components: { PromptDown, CaptionLogo },
  props: ['isMobile']
}
</script>

<style scoped>
  /*.fixed-bg {*/
  /*  background-image: url('../assets/bg-i.png');*/
  /*  background-color: #000;*/
  /*  color: #fff;*/
  /*}*/
  .entrance {
    font-size: 30px;
  }

  @media screen and (min-width: 600px) {
    .message {
      font-size: 30px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }
  @media screen and (max-width: 600px) {
    .message {

      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      font-size: 20px;
    }
  }
</style>
