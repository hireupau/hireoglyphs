<script>
import icons from '~/static/icons.json'

export default {
  name: 'Icons',
  icons,
  data () {
    return {
      icons
    }
  }
}
</script>

<template>
  <ul class="icons">
    <li
      v-for="icon in icons"
      :key="icon"
      class="icon"
    >
      <pre>{{ icon }}</pre>
    </li>
  </ul>
</template>
