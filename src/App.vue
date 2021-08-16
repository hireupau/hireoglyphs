<script>
  import Fuse from 'fuse.js';
  import Icons from './components/Icons.vue';
  import icons from '../icons.json';

  export default {
    icons,
    components: {
      Icons,
    },
    data() {
      return {
        color: '#131b39',
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
  <div
    class="root"
    v-bind:style="style"
  >
    <div class="container">
      <header>
        <h1 id="page-title">
          Hireoglyphs
        </h1>
        <nav class="links">
          <a href="https://github.com/hireupau/hireoglyphs/archive/refs/heads/master.zip">
            Download
          </a>
          <a href="https://github.com/hireupau/hireoglyphs">
            GitHub
          </a>
        </nav>
      </header>
      <main
        aria-labelledby="page-title"
      >
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
                />
              </p>
            </div>
          </fieldset>
        </form>
        <Icons
          v-bind:icons="filtered"
          v-bind:size="size"
        />
      </main>
    </div>
  </div>
</template>
