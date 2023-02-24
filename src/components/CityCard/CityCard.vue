<template>
  <div class="city">
    <div class="city__info">
      <h2 class="city__name">{{ currentCity.name }}</h2>
      <p class="city__date">{{ currentDate }}</p>
      <p class="city__temp">{{ weather.temp }}</p>
    </div>

    <div class="city__img">
      <img
        src="@/assets/icon/logo.svg"
        alt="Weather icon"
      >
    </div>

    <div class="city__divider"></div>

    <div class="city__moreInfo">
      More info
    </div>

    <div class="city__buttonContainer">
      <icon-button v-if="buttonFavorite">
        <img src="@/assets/icon/favorite.svg" alt="Toggle favorite city">
      </icon-button>

      <icon-button @click="handleRemoveCity">
        <img src="@/assets/icon/cross.svg" alt="Remove city card">
      </icon-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

  export default {
    name: 'cityCard',
    props: {
      buttonFavorite: {
        type: Boolean
      }
    },

    computed: {
      ...mapState([
        'currentDate',
        'currentCity',
        'weather'
      ]),

      ...mapMutations([
        'setCityIdForRemove'
      ])
    },

    methods: {
      handleRemoveCity() {
        this.$store.commit('setCityIdForRemove');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/utils/vars';
  @import '@/styles/utils/mixins';

  .city {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr auto 4fr;
    justify-items: center;
    align-items: center;
    height: 100%;

    &__info {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    &__name {
      margin-bottom: 10px;
      font-size:  28px;
    }

    &__date {
      color: $color_gray;
      margin-bottom: 28px;
    }

    &__temp {
      font-size:  60px;
      font-weight: 600;
      color: $color_blue;
    }

    &__img {
      width: 100px;
    }

    &__divider {
      width: 1px;
      height: 100%;
      background: $color_gray_light;
    }

    &__buttonContainer {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      gap: 12px;
    }
  }
</style>
