<template>
  <div class="timeline">
    <h2>
      Weather timeline
    </h2>
  </div>
</template>

<script>
  export default {
    name: 'time-line'
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

  .timeline {
    @include flex_center;
    height: 100%;
  }
</style>
