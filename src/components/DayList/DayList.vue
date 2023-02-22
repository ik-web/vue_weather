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
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';
  .dayList {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    gap: 16px;
    height: 100%;
  }
</style>
