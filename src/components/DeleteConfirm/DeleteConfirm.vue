<template>
  <app-modal>
    <div class="confirm">
      <h3 class="confirm__message">
        Are you sure you want to delete this city?
      </h3>
  
      <div class="confirm__buttons">
        <app-button @click="cancelDeleteCity" class="confirm__button">
          Cancel
        </app-button>
  
        <app-button
          class="confirm__button confirm__button_delete"
          @click="handleDeleteCity"
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
    methods: {
      cancelRemoveCity() {
        alert('In the future, this button will cancel the city deletion');
      },

      handleRemoveCity() {
        alert('In the future, this button will delete the city');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

  .confirm {
    max-width: 400px;
    width: 100%;

    &__message {
      margin: 20px 0 60px;

      text-align: center;
      font-size: $font_size;
      font-weight: 400;
    }

    &__buttons {
      @include flex_end;
      gap: 12px;
    }

    div > &__button {
      border: none;
      background: $color_gray;
      color: $color_main;
      
      &:hover {
        background: $color_gray;
        color: $color_secondary;
      }

      &_delete {
        width: 40px;
        color: $color_secondary;
        background: $color_red_dark;
        
        &:hover {
          background: $color_red;
          border: none;
        }
      }
    }
  }
</style>
