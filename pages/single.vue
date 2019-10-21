<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column">
          <Post :post="currentRecentPost" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    layout: 'single',

    async asyncData({ query, app, store }) {
      let response

      let postId = query.id || 178

      try {
        response = await app.$axios.get(`/get_post/?id=${postId}`)

        await store.dispatch('posts/getRecentPosts')

        await store.commit('posts/SET_CURRENT_POST', response.data.post)

      } catch (e) {
        //
      }

    },

    computed: {
      ...mapGetters({
        currentRecentPost: 'posts/currentRecentPost'
      })
    },

    components: {
      Post: () => import ('@/components/posts/Post.vue'),
    }
  }
</script>


<style lang="scss">
  .article {
    &__content {
      position: relative;

      .next-media-tag {
        position: absolute;
        top: -14px;
        right: 0;
      }

      &__media {
        clear: both;
      }
    }
  }

</style>
