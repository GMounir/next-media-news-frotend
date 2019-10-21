<template>
  <header class="next-media-main-single-header">
    <SwipeArticles />

    <SubNavigation />
  </header>
</template>

<script>
  export default {
    components: {
      SwipeArticles: () => import('@/components/posts/partials/SwipeArticles.vue'),
      SubNavigation: () => import('@/layouts/partials/single/SubNavigation.vue')
    }
  }
</script>

<style lang="scss">
  .next-media-main-single-header {
    position: relative;
    background-image: linear-gradient(to right top, #6d2f8f, #7b308f, #89328f, #96348f, #a2378e);
    background-color: #6d2f8f;

    height: 188px;
    min-height: 188px;


    .next-media-navbar {

      &__swipe-items {
        display: flex;
        justify-content: center;

        padding: 20px;

        &__control {

          &__button {
            display: block;
            margin: 0 8px 0 8px;

            &__icon {
              opacity: .6;
              width: 20px;
              height: 20px;
              display: block;
              border-radius: 50%;
              background-color: #fff;
            }

            &--active > span {
              opacity: 1;
              background-color: #fff;
            }
          }
        }
      }
    }

    .next-media-sub-navbar__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin: 34px;
    }

    .next-media-sub-navbar {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;

      background: #fff;
      border-bottom: 1px solid #dfdfdf;

      max-height: 130px;
      height: 130px;

      &__logo img{
        transform: translateX(50%);
      }

      a {
        display: block;
      }

      &__menu svg {

        width: 48px;
        .cls-1 {
          fill: #818181;
        }
      }
    }
  }
</style>
