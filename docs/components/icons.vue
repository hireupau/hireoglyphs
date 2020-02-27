<script>
import Icon from '~/components/icon.vue'

export default {
  components: {
    Icon
  },
  props: {
    icons: {
      type: Array,
      required: true
    },
    size: {
      type: Number,
      default: 24
    }
  }
}
</script>

<template>
  <ul class="grid">
    <li
      v-for="icon in icons"
      :key="icon.id"
    >
      <Icon
        :icon="icon"
        :size="size"
      />
    </li>
  </ul>
</template>
