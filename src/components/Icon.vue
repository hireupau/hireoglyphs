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
      symbolId() {
        return `#icons--${this.icon.id}`;
      },
      viewUrl() {
        return `https://raw.githubusercontent.com/hireupau/hireoglyphs/master/icons/${this.icon.file}`;
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
        <use v-bind="{ 'xlink:href': require('../../sprite.svg') + symbolId }" />
      </svg>
      <pre>{{ icon.id }}</pre>
    </div>
    <div class="icon-actions">
      <button
        ref="copy"
        class="icon-copy"
        v-bind:data-icon="icon.id"
        v-on:click="copyToClipboard"
      >
        Copy<span class="visually-hidden"> to clipboard</span>
      </button>
      <a
        class="icon-view"
        v-bind:href="viewUrl"
      >
        View src
      </a>
    </div>
  </div>
</template>
