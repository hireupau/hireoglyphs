<script>
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    symbolId () {
      return `#svg--${this.icon}`
    }
  }
}
</script>

<template>
  <div class="icon">
    <svg width="24" height="24">
      <use v-bind="{ 'xlink:href': require('../assets/sprite.svg') + symbolId }" />
    </svg>
    <pre>{{ icon }}</pre>
  </div>
</template>
