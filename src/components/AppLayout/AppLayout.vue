<template>
  <div class="page">
    <delete-confirm v-if="false"/>
    <app-header class="page__header"/>

    <main class="page__main">
      <div class="container">
        <div class="page__mainInner">
          <app-tabs>
            <app-tab
              v-for="page in pages"
              :tab="page"
              :key="page.id"
              :activeTab="pageName === page.name"
            />
          </app-tabs>

          <div class="page__content">
              <slot></slot>
          </div>
        </div>
      </div>
    </main>
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
            id: 1,
            name: 'Home',
            path: '/',
          },
          {
            id: 2,
            name: 'Favorite',
            path: '/favorite',
          }
        ],
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

  .page {
    display: grid;
    grid-template-rows: auto 1fr;
    min-width: 360px;
    min-height: 100vh;
    padding-bottom: 40px;

    &__header {
      margin-bottom: 20px;
    }
    
    &__mainInner {
      display: grid;
      grid-template-rows: auto 1fr;
      height: 100%;
    }

    &__content {
      padding: 40px;
      background: $color_secondary;
      border: 1px solid $color_gray;
      border-radius: 0 $box_rounded $box_rounded $box_rounded;
    }
  }
</style>