<template>
  <nuxt-link
    @click.native="clicked"
    :event="event"

    :disabled="disabled"

    :to="to"
  >
    <slot>
      {{ text }}
    </slot>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      text: {
        required: false,
        type: String,
        default: ''
      },
      disabled: {
        required: false,
        type: Boolean,
        default: false
      },
      to: {
        type: Object,
        default() {
          return { name: '/' }
        }
      },
      event: {
        type: String,
        required: false,
        default: 'click'
      }
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
