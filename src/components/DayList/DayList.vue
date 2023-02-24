<template>
  <ul class="dayList">
    <li v-for="day in days" :key="day.name">
      <day-item :day="day" />
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'day-list',
    props: {
      days: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './DayList.scss';
</style>
