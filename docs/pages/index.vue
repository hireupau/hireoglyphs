<script>
import Fuse from 'fuse.js'
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
      icons,
      size: 24
    }
  },
  computed: {
    filtered () {
      const string = this.input.toLowerCase()
      if (!string) {
        return this.icons
      }
      const options = {
        shouldSort: true,
        threshold: 0.25,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          'id',
          'aliases'
        ]
      }
      const fuse = new Fuse(this.icons, options)
      return fuse.search(string)
    },
    placeholder () {
      return `Search ${this.icons.length} icons`
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
          class="input-search"
          :placeholder="placeholder"
        >
        <fieldset>
          <legend>Settings</legend>
          <label for="size">Size</label>
          <input
            id="size"
            v-model.number="size"
            type="number"
            min="8"
            max="96"
            step="4"
          >
        </fieldset>
      </form>
      <Icons
        :icons="filtered"
        :size="size"
      />
    </div>
  </main>
</template>
