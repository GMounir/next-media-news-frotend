<template>
  <div class="article">
    <div class="article__image">
      <figure
        class="image is-3by3"
        v-if="getThumbnailUrlImageAsLargeForm"
      >
        <img :src="getThumbnailUrlImageAsLargeForm" :alt="post.title">
      </figure>
    </div>
    <div class="article__content">
      <span class="tag is-danger is-large next-media-tag">{{ getCategoryTitle }}</span>

      <div class="article__content__title">
        <h1 class="title is-1 pt-1">{{ post.title }}</h1>
      </div>

      <time
        class="is-pulled-right is-size-5 mt-1 mb-1"
        :datetime="postedAtHumanformatted"
      >{{ postedAtHumanformatted }}
      </time>

      <SharePost :post="post"/>


      <div
        class="article__content__body mt-1 mb-1 is-size-2"
        v-html="post.content"
      >
      </div>

      <SharePost :post="post"/>
    </div>
  </div>
</template>

<script>
  import postMixin from '@/components/posts/mixins/post'

  export default {
    mixins: [postMixin],

    components: {
      SharePost: () => import ('@/components/posts/partials/SharePost.vue')
    }
  }
</script>

<style>
  iframe {
    width:640px;
    height:360px;
  }
</style>
