<template>
  <div>
    <div class="title">FAQ</div>
    <div v-for="q in questions">
        <div>
          <div> {{ q[0] }} </div>
          <div> {{ q[1] }} </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'faq',
  computed: {
    questions () {
      let t = this.$t('faqTitles')
      let a = this.$t('faqAnswers')
      return Array.from(Object.keys(t), ind => [t[ind], a[ind]])
    }
  }
}
</script>

<style scoped>
</style>
