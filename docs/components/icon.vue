<script>
  export default {
    props: {
      icon: {
        type: Object,
        required: true,
      },
      size: {
        type: Number,
        default: 24,
      },
    },
    computed: {
      name() {
        return `${this.icon.folder}--${this.icon.id}`;
      },
      symbolId() {
        return `#svg--${this.name}`;
      },
      downloadUrl() {
        return `${this.$router.options.base}svg/${this.icon.folder}/${this.icon.id}.svg`;
      },
    },
    methods: {
      copyToClipboard(event) {
        if (!navigator.clipboard) {
          return;
        }

        const value = event.target.dataset.icon;
        navigator.clipboard.writeText(value);
      },
    },
  };
</script>

<template>
  <div class="icon">
    <div class="icon-inner">
      <svg
        class="icon-svg"
        v-bind:height="size"
        v-bind:width="size"
      >
        <use v-bind="{ 'xlink:href': require('../static/sprite.svg') + symbolId }" />
      </svg>
      <pre>{{ name }}</pre>
    </div>
    <div class="icon-actions">
      <button
        ref="copy"
        class="icon-copy"
        v-bind:data-icon="name"
        v-on:click="copyToClipboard"
      >
        Copy<span class="visually-hidden"> to clipboard</span>
      </button>
      <a
        class="icon-download"
        v-bind:href="downloadUrl"
        download
      >
        Download
      </a>
    </div>
  </div>
</template>
