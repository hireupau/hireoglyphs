<script>
export default {
  props: {
    icon: {
      type: Object,
      required: true
    },
    size: {
      type: Number,
      default: 24
    }
  },
  computed: {
    symbolId () {
      return `#svg--${this.icon.id}`
    },
    downloadUrl () {
      return `${this.$router.options.base}${this.icon.id}.svg`
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
      <svg
        class="icon-svg"
        :height="size"
        :width="size"
      >
        <use v-bind="{ 'xlink:href': require('../static/sprite.svg') + symbolId }" />
      </svg>
      <pre>{{ icon.id }}</pre>
    </div>
    <div class="icon-actions">
      <button
        ref="copy"
        class="icon-copy"
        :data-icon="icon.id"
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
