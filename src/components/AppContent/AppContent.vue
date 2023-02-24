<template>
  <div class="content">
    <header class="content__header">
      <slot name="header"></slot>
    </header>

    <nav  class="content__nav">
      <slot name="tabs"></slot>
    </nav>

    <section  class="content__section content__section_top">
      <slot name="weatherInfo"></slot>
    </section>

    <section  class="content__section">
      <slot name="timeline"></slot>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'app-content'
  }
</script>

<style lang="scss" scoped>
  @import './AppContent.scss';
</style>