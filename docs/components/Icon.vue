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
    path () {
      return `~assets/sprite.svg#svg--${this.icon}`
    }
  }
}
</script>

<template>
  <div class="icon">
    <svg width="24" height="24">
      <use :xlink:href="path" />
    </svg>
    <pre>{{ icon }}</pre>
  </div>
</template>
