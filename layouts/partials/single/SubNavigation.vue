<template>
  <nav class="next-media-sub-navbar" role="navigation" aria-label="sub navigation">
    <div class="next-media-sub-navbar__wrapper">

      <div class="next-media-sub-navbar__menu">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 34"><defs><style>.cls-1{fill:#fff;}</style></defs><title>menu</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><rect class="cls-1" width="48" height="6"/><rect class="cls-1" x="13" y="14" width="35" height="6"/><rect class="cls-1" x="24" y="28" width="24" height="6"/></g></g></svg>
        </a>
      </div>

      <div class="next-media-sub-navbar__logo">
        <nuxt-link :to="{ name: 'index' }">
          <img src="@/assets/img/logo-basic.png" alt="logo">
        </nuxt-link>
      </div>

      <div class="next-media-sub-navbar__return">
        <a href="#" class="next-media-sub-navbar__control_return__button">
          <img src="@/assets/img/return-button.svg" alt="return to home page">
        </a>
      </div>
    </div>
  </nav>
</template>
