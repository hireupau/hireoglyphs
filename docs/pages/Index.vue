<script>
import Icons from '~/components/Icons.vue'
import Search from '~/components/Search.vue'
import icons from '~/static/icons.json'

export default {
  name: 'Index',
  icons,
  components: {
    Icons,
    Search
  },
  data () {
    return {
      icons
    }
  }
}
</script>

<template>
  <main aria-labelledby="page-title">
    <div class="container">
      <h1 id="page-title">
        Icons
      </h1>
      <Search />
      <Icons :icons="icons" />
    </div>
  </main>
</template>
