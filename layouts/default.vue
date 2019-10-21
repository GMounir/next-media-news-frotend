<template>
  <div>
    <MainHeader />

    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
  export default {
    components: {
      MainHeader: () => import('@/layouts/partials/home/MainHeader.vue')
    }
  }
</script>
