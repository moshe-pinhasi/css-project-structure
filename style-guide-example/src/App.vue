<template>
  <div id="app">

    <section class="section">
      <h1>Fonts</h1>
      <hr />
      <FontSection name="$font-family-roboto" value="'Roboto', sans-serif" />
      <FontSection name="$font-family-monospace" value="monospace" />
    </section>

    <section class="section">
      <h1>Colors</h1>
      <hr />

      <div class="">
        <h4>Main Colors</h4>
        <ColorBox v-for="color in mainColors" 
          :key="color.name"
          :name="color.name" 
          :value="color.val" />

      </div>

      <div class="">
        <h4>Palette</h4>
        <ColorBox v-for="color in palette" 
          :key="color.name"
          :name="color.name" 
          :value="color.val" />

      </div>
      
    </section>

    <section class="section">
      <h1>Heading</h1>
      <hr />
      <HeadCmp tag="H1">Page Title</HeadCmp>
      <HeadCmp tag="H2">Page Section Title</HeadCmp>
      <HeadCmp tag="H3">Card Title</HeadCmp>
      <HeadCmp tag="H4">Card Content Title</HeadCmp>
      <HeadCmp tag="H5">Card Section Title</HeadCmp>
      <HeadCmp tag="H6">Card Section Title</HeadCmp>
    </section>
  </div>
</template>

<script>
import ColorBox from './components/ColorBox.vue'
import FontSection from './components/FontSection.vue'

import {palette, mainColors} from './data/colors.js'

export default {
  name: 'App',
  components: {
    ColorBox,
    FontSection,
  },
  data() {
    return {
      palette,
      mainColors: mainColors.map(color => {
        const res = palette.find(col => col.name === color.val)
        return {...color, val: res.val}
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

hr {
  margin-bottom: 30px;
  max-width: 500px;
}

.section {
  margin: 0 0 40px 0;
}

.head-example {
  display: flex;
  align-items: center;
  margin: 0 0 10px 0;

  .head-name {
    margin: 0 10px 0 0;
  }
}
</style>
