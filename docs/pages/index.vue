<script>
  import Fuse from 'fuse.js';
  import Icons from '../components/icons.vue';
  import icons from '../static/icons.json';

  export default {
    icons,
    components: {
      Icons,
    },
    data() {
      return {
        color: '#003454',
        input: '',
        icons,
        size: 24,
      };
    },
    computed: {
      filtered() {
        const string = this.input.toLowerCase();
        if (!string) {
          return this.icons;
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
            'aliases',
          ],
        };
        const fuse = new Fuse(this.icons, options);
        return fuse.search(string);
      },
      placeholder() {
        return `Search ${this.icons.length} icons`;
      },
      style() {
        return `color: ${this.color}`;
      },
    },
  };
</script>

<template>
  <main
    aria-labelledby="page-title"
    v-bind:style="style"
  >
    <div class="container">
      <h1 id="page-title">
        Icons
      </h1>
      <form
        action="#"
        method="get"
      >
        <p class="field">
          <label for="search">Search</label>
          <input
            id="search"
            v-model.trim="input"
            type="search"
            class="input-search"
            v-bind:placeholder="placeholder"
          />
        </p>
        <fieldset>
          <legend>Settings</legend>
          <div class="fieldset-fields">
            <p class="field">
              <label for="size">Size</label>
              <input
                id="size"
                v-model.number="size"
                type="number"
                inputmode="numeric"
                min="8"
                max="96"
                step="4"
              />
            </p>
            <p class="field">
              <label for="color">Color</label>
              <input
                id="color"
                v-model="color"
                type="color"
                min="8"
                max="96"
                step="4"
              />
            </p>
          </div>
        </fieldset>
      </form>
      <Icons
        v-bind:icons="filtered"
        v-bind:size="size"
      />
    </div>
  </main>
</template>
