  export default {
    props: {
      post: {
        required: true,
        type: Object
      }
    },

    computed: {
      postedAtHumanformatted() {
        // TODO have to be at the first init for global usage
        moment.locale('ar_ma')

        return moment(this.post.date).format('Do MMM YYYY')
      },

      getCategoryTitle () {
        // Is the tag have one category or more then one!!
        return _.get(this.post, 'categories[0].title')
      },

      getThumbnailUrlImageAsLargeForm () {
        return _.get(this.post, 'thumbnail_images.large.url', false)
      }
    },
  }
