<script>
import Icons from '~/components/Icons.vue'
import Search from '~/components/Search.vue'

export default {
  name: 'Index',
  components: {
    Icons,
    Search
  }
}
</script>

<template>
  <main aria-labelledby="page-title">
    <div class="container">
      <h1 id="page-title">
        Icons
      </h1>
      <svg width="24" height="24">
        <use xlink:href="~assets/glyphs.svg#instagram" />
      </svg>
      <svg width="24" height="24">
        <use xlink:href="~assets/sprite.svg#svg--arrow-bar-in-down" />
      </svg>
      <Search />
      <Icons />
    </div>
  </main>
</template>
