<template>
  <div class="app-content">
    <div class="title"> {{ $t('views')[0] }}</div>
    <div class="vertical-center-wrap article-wrap">
      <div style="text-align:justify;">
        <div :class="{'cross-border-lbb': !isMobile}">
<!--          <div :class="{'cross-border-rbb': !isMobile}">-->
<!--            <div :class="{'cross-border-rb': !isMobile}">-->
            <div v-html="$t('aboutus')" class="cross-border article"
                 :class="{ 'cross-border-lb': !isMobile}"
            >
            </div>
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
    </div>

    <!--    <caption-logo class="caption-logo slide-bottom full-width mobile-hidden"></caption-logo>-->
  </div>
</template>

<script>
  import CaptionLogo from './CaptionLogo.vue'

  export default {
    name: 'about-us',
    components: {CaptionLogo},
    props: ['isMobile']
  }
</script>

<style scoped>
  .article-wrap {
    width: 80%;
    max-width: 1000px;
    line-height: 25px;
    margin: 10px auto 0;
    padding-bottom: 100px;
    height: 50vh;
  }

  .caption-logo {
    height: 100px;
  }
</style>
