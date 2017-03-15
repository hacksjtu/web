<template>
  <div class="fixed-bg">
    <div class="title"> {{ $t('views')[4] }} </div>
    <div v-for="(category, icons) in sponsors">
      <div class="title">{{ $t(category) }}</div>
      <div v-for="(href, img) in icons">
        <a :href="href" target="_blank">
          <img :src="img">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sponsors',
  props: ['sponsors']
}
</script>

<style>

</style>
