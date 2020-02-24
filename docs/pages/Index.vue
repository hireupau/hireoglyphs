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
  <div class="container">
    <h1>Hello</h1>
    <Search />
    <Icons />
  </div>
</template>
