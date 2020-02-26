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
      <Icon :icon="icon" />
    </li>
  </ul>
</template>
