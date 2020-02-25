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
    },
    downloadUrl () {
      return `~assets/icons/${this.icon}.svg`
    }
  },
  methods: {
    copyToClipboard (event) {
      if (!navigator.clipboard) {
        return
      }

      const value = event.target.dataset.icon
      navigator.clipboard.writeText(value)
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
    <button
      ref="copy"
      :data-icon="icon"
      @click="copyToClipboard"
    >
      Copy to clipboard
    </button>
    <a
      :href="downloadUrl"
      download
    >
      Download SVG
    </a>
  </div>
</template>
