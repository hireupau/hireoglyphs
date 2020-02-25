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
      <Search />
      <Icons />
    </div>
  </main>
</template>
