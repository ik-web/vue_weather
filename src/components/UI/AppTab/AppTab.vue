<template>
  <div :class="linkClasses">
    {{ tab.name }}
  </div>
</template>

<script>
  export default {
    name: 'app-tab',
    props: {
      tab: {
        type: Object,
        required: true
      },
      activeTab: {
        type: Boolean
      },
      color: {
        type: String
      }
    },

    computed: {
      linkClasses() {
        if (this.activeTab) {
          if (this.color) {
            return `tab tab_active tab_${this.color}`
          }

          return 'tab tab_active'
        }

        if (this.color) {
          return `tab tab_${this.color}`
        }

        return 'tab'
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import './AppTab.scss';
</style>
