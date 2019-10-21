<template>
  <div class="load-more">
    <nuxt-link
      :to="to"
      title="Load more"
      class="is-size-3"
      @click.native="clicked"
      :event="event"

      :disabled="disabled"
    >
      <span>
        <i class="fas fa-plus"></i>
      </span>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    props: {
      event: {
        type: String,
        required: false,
        default: 'click'
      },
      disabled: {
        required: false,
        type: Boolean,
        default: false
      },
      to: {
        type: Object,
        default() {
          return { name: '' }
        }
      },
    },

    methods: {
      clicked (e) {
        if (this.disabled) {
          return
        }

        this.$emit('click', e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .load-more {
    display: flex;
    justify-content: center;

    a {
      padding: 40px;
      border-radius: 50%;
      color: #cccccc;
      border: 2px solid #cccccc;
      background-color: transparent;

      width: 117px;
      height: 117px;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: #cccccc;
        color: #fff;
      }
    }
  }
</style>
