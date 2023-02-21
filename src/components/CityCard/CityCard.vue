<template>
  <article class="city">
    <div class="city__content" v-if="city">
      <div class="city__buttons">
        <icon-button class="city__button" title="Close">
          <img src="@/assets/icon/cross.svg" alt="Close card icon">
        </icon-button>
        <icon-button
          class="city__button"
          title="Add to favorite"
          v-if="favoriteButton"
          @click="handleClick"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="#202020"
            :class="isChecked && 'city__favoriteIcon_isChecked'"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        </icon-button>
      </div>
      
      <h3 class="city__name">City name</h3>
      <p class="city__temp">-1°C</p>
      <img
        src="@/assets/icon/logo.svg"
        alt="Weather icon"
        class="city__icon"
      >
    </div>

    <div class="city__empty" v-else>
      <h3>Add city</h3>
      <img
        src="@/assets/icon/add.svg"
        alt="Add new city card icon"
        class="city__icon"
      >
    </div>
  </article>
</template>

<script>
  export default {
    name: 'city-card',
    props: {
      city: {
        type: String
      },
      favoriteButton: {
        type: Boolean
      }
    },
    data() {
      return {
        isChecked: true
      }
    },
    methods: {
      handleClick() {
        this.isChecked = !this.isChecked;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

    .city {
      @include block_border;
      width: 100%;
      height: 280px;
      padding: 10px 12px 16px;
      box-shadow: $box_shadow;
      transition: box-shadow $transition_behavior;
      cursor: pointer;

      &:hover {
        box-shadow: 1px 2px 6px $color_gray_dark;
      }

    &__content {
      @include flex_between;
      flex-direction: column;
      height: 100%;
    }

    &__buttons {
      @include flex_between;
      flex-direction: row-reverse;
      gap: 4px;
      width: 100%;
    }
    
    &__temp {
      font-size: 40px;
      font-weight: 600;
      color: $color_gray;
    }

    &__icon {
      width: 80px;
      height: 80px;
    }

    &__favoriteIcon {
      &_isChecked {
        fill: $color_main;
      }
    }
        
    &__empty {
      @include flex_center;
      flex-direction: column;
      gap: 16px;
      height: 100%;
    }
  }
</style>
