<script>
import Icons from '~/components/icons.vue'
import icons from '~/static/icons.json'

export default {
  icons,
  components: {
    Icons
  },
  data () {
    return {
      input: '',
      icons
    }
  },
  computed: {
    filtered () {
      const string = this.input.toLowerCase()
      if (!string) {
        return this.icons
      }
      return this.icons.filter((item) => {
        let pos = 0
        let target = item
        return [...string].every((s) => {
          target = target.substr(pos)
          pos = target.indexOf(s) + 1
          return pos > 0
        })
      })
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
      <form action="#" method="get">
        <label for="search">Search</label>
        <input
          id="search"
          v-model.trim="input"
          type="search"
          placeholder="arrow-left"
        >
      </form>
      <Icons :icons="filtered" />
    </div>
  </main>
</template>
