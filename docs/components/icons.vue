<script>
  import Icon from './icon.vue';

  export default {
    components: {
      Icon,
    },
    props: {
      icons: {
        type: Array,
        required: true,
      },
      size: {
        type: Number,
        default: 24,
      },
    },
  };
</script>

<template>
  <ul class="grid">
    <li
      v-for="icon in icons"
      v-bind:key="icon.id"
    >
      <Icon
        v-bind:icon="icon"
        v-bind:size="size"
      />
    </li>
  </ul>
</template>
