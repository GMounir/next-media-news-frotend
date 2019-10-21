<template>
  <nav class="next-media-navbar" role="navigation" aria-label="main navigation">
    <div class="next-media-navbar__brand">
      <div class="next-media-navbar__brand__logo">
        <nuxt-link :to="{ name: 'index' }">
          <img
            class="next-media-navbar__brand__logo__img"
            src="@/assets/img/logo.svg"
            alt="Next media logo"
          >
        </nuxt-link>
      </div>
    </div>

    <a
      class="next-media-navbar__menu"
      href="#"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 34"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Menu Button</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><rect class="cls-1" width="48" height="6"/><rect class="cls-1" x="13" y="14" width="35" height="6"/><rect class="cls-1" x="24" y="28" width="24" height="6"/></g></g></svg>
    </a>
  </nav>
</template>
