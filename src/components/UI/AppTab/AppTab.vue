<template>
  <router-link
    :to="tab.path"
    :class="linkClass"
  >
    {{ tab.name }}
  </router-link>
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
      linkClass() {
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
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

  .tab {
    @include tab;
    padding: 6px 16px;
  }
</style>
