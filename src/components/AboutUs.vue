<template>
  <div class="app-content fixed-bg">
    <div class="title"> {{ $t('views')[0] }} </div>
    <div class="vertical-center-wrap article-wrap">
      <div class="vertical-center">
        <div v-html="$t('aboutus')" class="cross-border article" 
          :class="{ 'cross-border-lb': !isMobile, 'cross-border-lt': isMobile }"
        >
        </div>
      </div>
    </div>
    
    <caption-logo class="caption-logo slide-bottom full-width mobile-hidden"></caption-logo>
  </div>
</template>

<script>
import CaptionLogo from './CaptionLogo.vue'

export default {
  name: 'about-us',
  components: { CaptionLogo },
  props: ['isMobile']
}
</script>

<style scoped>
  .article-wrap {
    width: 80%;
    max-width: 1000px;
    line-height: 25px;
    margin: 10px auto 0;
    height: 50vh;
  }
  .caption-logo {
    height: 100px;
  }
</style>
