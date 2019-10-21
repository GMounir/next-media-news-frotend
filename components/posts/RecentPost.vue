<template>
  <div class="card next-media-card">
    <div
      class="card-image"
      v-if="getThumbnailUrlImageAsLargeForm"
    >
      <figure class="image is-3by3">
        <img :src="getThumbnailUrlImageAsLargeForm" :alt="post.title">
      </figure>
    </div>
    <div class="card-content next-media-card-content">
      <div class="content">
        <span class="tag is-danger is-large next-media-tag">{{ getCategoryTitle }}</span>

        <h1>
          <a href="#">
            {{ post.title_plain }}
          </a>
        </h1>
        <br>
        <time :datetime="postedAtHumanformatted">{{ postedAtHumanformatted }}</time>
      </div>
    </div>
  </div>
</template>

<script>
  import postMixin from '@/components/posts/mixins/post'

  export default {
    mixins: [postMixin]
  }
</script>

<style lang="scss">
  .next-media-card {
    box-shadow: none;
  }

  .next-media-card-content {
    position: relative;
    padding-left: 0;
    padding-right: 0;

    .next-media-tag {
      position: absolute;
      top: -16px;
      right: 0;
    }

  }
</style>
