<script>
import Icon from '~/components/Icon.vue'

export default {
  name: 'Icons',
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
      :key="icon"
    >
      <Icon :icon="icon" />
    </li>
  </ul>
</template>
