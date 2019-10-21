<template>
  <nav class="next-media-navbar" role="navigation" aria-label="main navigation">
    <ul class="next-media-navbar__swipe-items">
      <li
        class="next-media-navbar__swipe-items__control"
        v-for="post in recentPosts"
        :key="post.id"
      >
        <a
          class="next-media-navbar__swipe-items__control__button"
          :class="{ 'next-media-navbar__swipe-items__control__button--active': post.id == currentRecentPost.id }"
          @click.prevent="swipePost(post)"
          href="#">
          <span class="next-media-navbar__swipe-items__control__button__icon"></span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        recentPosts: 'posts/recentPosts',
        currentRecentPost: 'posts/currentRecentPost'
      })
    },

    methods: {
      ...mapMutations({
        setCurrentPost: 'posts/SET_CURRENT_POST'
      }),

      swipePost (post) {
        this.setCurrentPost(post)
      }
    }
  }
</script>
