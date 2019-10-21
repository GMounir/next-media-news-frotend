<template>
  <header class="next-media-main-header">
    <Navigation />

    <SubNavigation />
  </header>
</template>

<script>
  export default {
    components: {
      Navigation: () => import('@/layouts/partials/home/Navigation.vue'),
      SubNavigation: () => import('@/layouts/partials/home/SubNavigation.vue')
    }
  }
</script>

<style lang="scss">
  .next-media-main-header {
    position: relative;

    background-image: linear-gradient(to right top, #6d2f8f, #7b308f, #89328f, #96348f, #a2378e);
    background-color: #6d2f8f;

    height: 204px;
    min-height: 204px;
  }

  .next-media-navbar {
    &__brand {
      position: absolute;
      top:0;
      left: 50%;

      transform: translate(-50%, 50%);

      img {
        height: 64px;
        max-height: 64px;
      }
    }

    &__menu {
      position: absolute;
      top: 48px;
      right: 40px;

      width: 48px;
      max-width: 48px;

      height: 44px;
      max-height: 44px;
    }
  }

  .next-media-sub-navbar {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;

    border-top: 1px solid #9b4d9c;

    max-height: 80px;
    height: 80px;

    &__list {
      float: right;

      margin-top: 24px;
      margin-right: 52px;

      &__item {
        display: inline-block;

        a {
          padding: 10px;
          color: #bd8cb8;
          font-size: 22px;
          font-weight: 700;

          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
</style>
