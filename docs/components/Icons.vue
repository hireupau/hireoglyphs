<script>
import Icon from '~/components/Icon.vue'
import icons from '~/static/icons.json'

export default {
  name: 'Icons',
  icons,
  components: {
    Icon
  },
  data () {
    return {
      icons
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
