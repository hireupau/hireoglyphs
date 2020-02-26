<script>
export default {
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
      return `${this.$route.path}${this.icon}.svg`
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
    <div class="icon-inner">
      <svg class="icon-svg" width="24" height="24">
        <use v-bind="{ 'xlink:href': require('../static/sprite.svg') + symbolId }" />
      </svg>
      <pre>{{ icon }}</pre>
    </div>
    <div class="icon-actions">
      <button
        ref="copy"
        class="icon-copy"
        :data-icon="icon"
        @click="copyToClipboard"
      >
        Copy<span class="visually-hidden"> to clipboard</span>
      </button>
      <a
        class="icon-download"
        :href="downloadUrl"
        download
      >
        Download
      </a>
    </div>
  </div>
</template>
