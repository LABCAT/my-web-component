class t extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["message"];
  }
  connectedCallback() {
    this.render(), this.setupAccentColor();
  }
  attributeChangedCallback(e, n, c) {
    e === "message" && this.render();
  }
  setupAccentColor() {
    const e = window.getComputedStyle(document.body).getPropertyValue("accent-color") || "blue";
    document.documentElement.style.setProperty("--browser-accent-color", e);
  }
  render() {
    const e = this.getAttribute("message") || "Hello from Web Component!";
    this.shadowRoot.innerHTML = `
      <style>
        .my-component {
          color: var(--my-component-color, var(--browser-accent-color, blue));
        }
      </style>
      <div class="my-component">${e}</div>
    `;
  }
}
customElements.define("my-component", t);
