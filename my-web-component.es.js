import { onMounted as t, createElementBlock as n, openBlock as c, toDisplayString as m, defineCustomElement as s } from "vue";
const r = { class: "my-component" }, l = {
  __name: "MyComponent",
  props: {
    message: {
      type: String,
      default: "Hello from Web Component!"
    }
  },
  setup(o) {
    return t(() => {
      const e = window.getComputedStyle(document.body).getPropertyValue("accent-color") || "blue";
      document.documentElement.style.setProperty("--browser-accent-color", e);
    }), (e, a) => (c(), n("div", r, m(o.message), 1));
  }
}, p = s(l);
customElements.define("my-component", p);
