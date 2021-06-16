import Vue from 'vue'

Vue.component('HeadCmp', {
  name: 'head-cmp',
  render(createElement) {
    return createElement(
      // this.tag,   // tag name
      'div',
      {
        attrs: {
          class: 'head-example',
        }
      },
      [
        createElement('div', {
          attrs: {
            class: 'head-name',
          }
        }, this.tag),
        createElement(this.tag, {
          attrs: {
            class: 'head-preview',
          }
        }, this.$slots.default)
      ]

      // this.$slots.default
    );
  },

  props: {
    tag: {
      type: String,
      required: true,
    },
  },
});