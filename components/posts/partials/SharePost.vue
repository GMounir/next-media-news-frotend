<template>
  <div class="article__content__media buttons are-medium is-centered">
    <button class="button is-large has-text-white article__content__media__twitter">
      <span>غرد (23)</span>
      &nbsp;
      <span class="icon">
        <i class="fab fa-twitter"></i>
      </span>
    </button>

    <button class="button is-large has-text-white article__content__media__facebook">
      <span class="">شارك (23) </span>
      &nbsp;
      <span class="icon">
        <i class="fab fa-facebook-f"></i>
      </span>
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        required: true,
        type: Object
      }
    }
  }
</script>

<style lang="scss">
  .article__content__media {
    &__facebook {
      background-color: #496399;
    }

    &__twitter {
      background-color: #2fb1e3;
    }
  }
</style>
