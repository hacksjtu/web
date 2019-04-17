<template>
  <div class="fixed-bg faq">
    <div class="title">  {{ $t('views')[3] }} </div>
    <div class="faq-wrapper">
      <div class="column" v-for="(questions, group) in [faq1, faq2]">
        <div class="panel" v-for="(q, ind) in questions">
          <div class="panel-header clickable"
            @click="_toggle(group, ind)"
          >
            {{ q[0] }}
          </div>
          <div :class="{ expanded:faqShow[_real(group, ind)] }" class="panel-body">
            <p> {{ q[1] }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'faq',
  data () {
    return {
      faqShow: []
    }
  },
  computed: {
    questions () {
      let t = this.$t('faqTitles')
      let a = this.$t('faqAnswers')
      return Array.from(Object.keys(t), ind => [t[ind], a[ind]])
    },
    faq1 () {
      let q = this.questions
      let l = parseInt(q.length / 2)
      return q.slice(0, l)
    },
    faq2 () {
      let q = this.questions
      let l = parseInt(q.length / 2)
      return q.slice(l)
    }
  },
  methods: {
    _real (group, ind) {
      return (group === 1 ? 0 : this.faq1.length) + ind
    },
    _toggle (group, ind) {
      let i = this._real(group, ind)
      this.$set(this.faqShow, i, !this.faqShow[i])
    }
  },
  mounted () {
    this.faqShow = Array.from(this.questions, _ => false)
  }
}
</script>

<style scoped>
  .faq {
    min-height: 110vh;
  }
  .faq-wrapper {
    margin-left: 30px;
    margin-right: 30px;
    padding-bottom: 80px;
  }
  .panel {
    border: 3px solid rgba(200, 200, 200, 0.3);
    box-shadow: 3px 3px 6px #777;
    margin: 10px;
    border-radius: 10px;
    text-shadow: 1px 1px 0 #fff;
    transition: box-shadow .3s;
  }
  .panel:hover {
    box-shadow: 3px 3px 20px #666;
  }
  .panel-header {
    padding: 10px;
    font-size: 20px;
    border-bottom: 1px solid #ddd;
  }
  .panel-body {
    max-height: 0;
    overflow: hidden;
    transition: all .5s ease-in-out
  }
  .panel-body p {
    padding-left: 20px;
    padding-right: 20px;
    line-height: 25px;
  }
  .panel-body.expanded {
    max-height: 500px;
  }

  @media screen and (min-width: 600px) {
    .faq-wrapper {
      display: flex;
      justify-content: center;
    }
    .column { width: 45%; }
  }
  @media screen and (max-width: 600px) {
    .column { width: 100%; }
  }
</style>
