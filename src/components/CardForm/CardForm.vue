<template>
  <form class="form">
    <input
      type="text"
      placeholder="Find city"
      class="form__input"
    />

    <app-button class="form__button button_right">
      <img src="@/assets/icon/search.svg" alt="Search icon">
    </app-button>
  </form>
</template>

<script>
  export default {
    name: 'card-form'
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

  .form {
    display: flex;
    
    &__input {
      height: $form_item_size;
      padding: 0 8px;
      border: 1px solid $color_gray;
      border-radius: $box_rounded_left;

      &:focus {
        outline: none;
      }
      
      &::placeholder {
        transition: all $transition_behavior;
      }

      &:focus.form__input::placeholder,
      &:hover.form__input::placeholder {
        color: $color_gray;
      }
  
      &::placeholder {
        color: $color_gray_light;
      }
    }

    .form__button {
      width: 44px;
      border-radius: $box_rounded_right;
    }
  }
</style>
