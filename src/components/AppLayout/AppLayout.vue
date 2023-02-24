<template>
  <div class="layout">
    <app-header class="layout__header"/>

    <div class="container">
      <app-tabs>
        <app-tab
          v-for="page in pages"
          :tab="page"
          :key="page.id"
          :activeTab="pageName === page.name"
        />
      </app-tabs>
    </div>

    <main class="layout__main">
      <div class="container">
        <div class="layout__mainInner">
          <slot></slot>
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
  @import './AppLayout.scss';
</style>
