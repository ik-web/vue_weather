<template>
  <app-modal>
    <div class="confirm">
      <h3 class="confirm__message">
        Are you sure you want to remove this city?
      </h3>
  
      <div class="confirm__buttons">
        <app-button @click="onCancel" class="confirm__button">
          Cancel
        </app-button>
  
        <app-button
          class="confirm__button confirm__button_delete"
          @click="onRemove"
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
      onCancel: {
        type: Function,
        required: true
      },

      onRemove: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './DeleteConfirm.scss';
</style>
