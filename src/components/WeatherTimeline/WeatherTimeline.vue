<template>
  <div>
    <h2 class="timeline">
      Weather timeline
    </h2>
  </div>
</template>

<script>
  export default {
    name: 'weather-timeline'
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

  .timeline {
    @include block_border;
    min-height: 280px;
    padding: $padding_block;
    box-shadow: $box-shadow;
  }
</style>
