<template>
  <div class="app-content fixed-bg">
    <div class="caption">
      <img class="left mobile-hidden" src="../assets/prompt-h.png">
      <img class="right mobile-hidden" src="../assets/prompt-h.png">
      <caption-logo class="caption-logo center-block"></caption-logo>
    </div>

    <div class="navbar center-block mobile-hidden">
      <img class="left" src="../assets/prompt-h.png">
      <img class="right" src="../assets/prompt-h.png">
      <slot name="navbar"></slot>
    </div>

    <div class="prompt pc-hidden" v-html="$t('banner-prompt')">
      <!-- 2017<br>上海交通大学<br>黑客马拉松 -->
      <!-- {{ text['banner-prompt'] }} -->
    </div>

    <div class="slide-bottom full-width">
      <prompt-down></prompt-down>
    </div>
  </div>
</template>

<script>
import PromptDown from './PromptDown.vue'
import CaptionLogo from './CaptionLogo.vue'

export default {
  name: 'banner',
  props: ['text'],
  components: { PromptDown, CaptionLogo }
}
</script>

<style scoped>
  .fixed-bg {
    background-image: url('../assets/bg.png');
  }
  .caption {
    width: 100%;
    margin-bottom: 50px; 
    position: relative;
  }

  .caption .left {
    position: absolute;
    left: 0;
    width: 40vw;
    transform: translateX(-50%);
  }

  .caption .right {
    position: absolute;
    right: 0;
    width: 40vw;
    transform: translateX(50%) scaleX(-1);
  }

  .navbar {
    height: 100px;
  }

  .navbar .left {
    float: left;
    height: 50px;
  }

  .navbar .right {
    float: right;
    height: 50px;
    transform: scaleX(-1);
  }

  .prompt {
    font-size: 25px;
    line-height: 40px;
    text-shadow: 2px 2px #fff;
  }

  @media screen and (min-width: 600px) {
    .caption {
      padding-top: 15vh;
    }

    .caption-logo {
      width: 40vw;
    }
  }

  @media screen and (max-width: 600px) {
      .caption {
        padding-top: 20vh;
      }
      .caption-logo {
        width: 80vw;
      }
  }

</style>
