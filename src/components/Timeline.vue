<template>
  <div>
    <div v-for="event in schedule">
        <div v-if="event[0] === 'event-lg'"
          class="event-lg"
        >
          {{ event[1] }}
          {{ event[2] }}
        </div>
        <div v-else-if="event[0] === 'event-sm'"
          class="event-sm"
        >
          <span>{{ event[1] }}</span>
          <span class="spot"></span>
          <span class="event-message">{{ event[2] }}</span>
        </div>
        <div v-else-if="event[0].startsWith('span')"
          :class="'time-span time-' + event[0]"
        >
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'timeline',
  props: {
    scheduleStrings: {
      required: true,
      type: Array
    }
  },
  computed: {
    schedule () {
      return Array.from(this.scheduleStrings, str => str.split('|'))
    }
  }
}
</script>

<style scoped>
  .time-span {
    height: 70px;
    width: 7px;
    border-radius: 2px;
    margin: 10px auto; 
  }
  .time-span-working {
    background-color: #c44;
  }
  .event-lg {
    font-size: 30px;
  }
  .spot {
    display: inline-block;
    width: 7px;
    height: 7px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: #fff;
    position: relative;
  }
</style>
