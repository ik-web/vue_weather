<template>
  <div class="layout">
    <div class="container">
      <div class="layout__inner">
        <nav class="layout__tabs">
          <router-link
            v-for="page in pages"
            :key="page.name"
            :to="page.path"
            :class="page.name === pageName
              ? 'layout__tab layout__tab_active'
              : 'layout__tab'"
          >
            {{ page.name }}
          </router-link>
        </nav>

        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "app-layout",
    props: {
      pageName: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        pages: [
          {
            name: 'Home',
            path: '/'
          },
          {
            name: 'Favorite',
            path: '/favorite'
          }
        ]
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';
  .layout {
    padding: 60px 0 20px;

    &__inner {
      position: relative;
      height: 100%;
      padding: $padding_block;
      border: 1px solid $color_gray;
      border-radius: 0 0 $block_rounded $block_rounded;
    }

    &__tabs {
      position: absolute;
      top: -40px;
      left: 0;
      z-index: 5;
      transform: translateX(-2px);
      display: flex;
      align-items: center;
    }

    &__tab {
      transform: translateX(1px);
      @include flex_center;
      height: 40px;
      padding: 0 16px;
      color: $color_gray_light;
      border: 1px solid $color_gray;
      border-radius: $block_rounded $block_rounded 0 0;
      
      &:first-of-type {
        transform: translateX(1px);
      }
      
      &_active {
        color: $color_main;
        border-bottom: 1px solid $color_secondary;
      }
    }
  }
</style>