<template>
  <nav class="next-media-sub-navbar" role="navigation" aria-label="sub navigation">
    <ul class="next-media-sub-navbar__list">
      <li class="next-media-sub-navbar__list__item">
        <a href="#">
          <img src="@/assets/img/home-icon.svg" alt="">
        </a>
      </li>

      <Menu
        v-for="menu in menus"
        :key="menu.id"
        :menu="menu"
      />
    </ul>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        menus: 'menus'
      })
    },

    components: {
      Menu: () => import ('@/components/common/Menu.vue')
    }
  }
</script>
