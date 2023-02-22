<template>
  <nav class="tabs">
    <slot></slot>

    <button :class="addTabClasses" v-if="buttonAddNewTab">
      <svg
        class="tabs__icon"
        height="32px"
        id="Layer_1"
        style="enable-background:new 0 0 32 32;"
        version="1.1"
        viewBox="0 0 32 32"
        width="32px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"/>
      </svg>
    </button>
  </nav>
</template>

<script>
  export default {
    name: 'app-tabs',
    props: {
      buttonAddNewTab: {
        type: Boolean
      },
      color: {
        type: String
      },
    },
    computed: {
      addTabClasses() {
        if (this.color) {
          return `tabs__addTab tabs__addTab_${this.color}`
        }

        return 'tabs__addTab'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

  .tabs {
    display: flex;

    &__addTab {
      @include tab;
      width: 36px;
    }
    
    &__icon {
      display: flex;
      width: 100%;
      height: 100%;
      padding: 0 6px;
      fill: $color_gray_light;
      transition: fill $transition_behavior;
  
      &:hover  {
        fill: $color_gray_dark
      }
    }
  }
</style>
