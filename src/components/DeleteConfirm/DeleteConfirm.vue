<template>
  <app-modal>
    <div class="confirm">
      <h3 class="confirm__message">
        Are you sure you want to remove this city?
      </h3>
  
      <div class="confirm__buttons">
        <app-button @click="cancelRemoveCity" class="confirm__button">
          Cancel
        </app-button>
  
        <app-button
          class="confirm__button confirm__button_delete"
          @click="handleRemoveCity"
        >
          <img src="@/assets/icon/delete.svg" alt="Delete icon">
        </app-button>
      </div>
    </div>
  </app-modal>
</template>

<script>

  export default {
    name: 'delete-confirm',
    props: {
      currentCity: {
        type: Object,
        required: true
      }
    },
    methods: {
      cancelRemoveCity() {
        this.$store.commit('city/setCityIdForRemove', false);
      },

      handleRemoveCity() {
        this.$store.commit('city/removeCity');
        this.$router.push(this.currentCity.path);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './DeleteConfirm.scss';
</style>
