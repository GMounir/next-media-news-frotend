<template>
  <li class="next-media-sub-navbar__list__item">
    <a
      href="#"
      :title="menu.label"
    >
      {{ menu.label }}
    </a>
  </li>
</template>

<script>
  export default {
    props: {
      menu: {
        required: true,
        type: Object
      }
    }
  }
</script>
