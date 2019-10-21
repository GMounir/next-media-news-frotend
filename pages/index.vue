<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column">
          <RecentPost
            v-for="post in posts"
            :key="post.id"
            :post="post"
          />

          <p v-if="!count" class="has-text-centered is-size-2 has-text-grey-light ">No post found</p>
        </div>
      </div>
    </div>

    <div class="container is-fluid">
      <div class="columns">
        <div class="column">
          <!-- we have to make reusable components in app directory -->
          <LoadMoreButton
            @click.prevent="loadMorePosts"
            :disabled="disabled"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        disabled: false,
        posts: [],
        count: 0,
        pages: 0,
      }
    },

    async asyncData({ app }) {
      let response

      try {
        response = await app.$axios.get('/get_recent_posts')
      } catch (e) {
        //
      }

      return {
        posts: _.get(response, 'data.posts', []),
        count: _.get(response, 'data.count', 0),
        pages: _.get(response, 'data.pages', 0),
      }
    },

    methods: {
      async loadMorePosts () {
        let page = 2

        this.disabled = true

        let response = await this.$axios.get(`/get_recent_posts/?page=${page}`)

        this.disabled = false

        this.posts.push(...response.data.posts)
      }
    },

    components: {
      RecentPost: () => import ('@/components/posts/RecentPost.vue'),
      LoadMoreButton: () => import ('@/components/posts/LoadMoreButton.vue'),
    }
  }
</script>
