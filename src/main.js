class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['message'];
  }

  connectedCallback() {
    this.render();
    this.setupAccentColor();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'message') {
      this.render();
    }
  }

  setupAccentColor() {
    const accentColor = window.getComputedStyle(document.body).getPropertyValue('accent-color') || 'blue';
    document.documentElement.style.setProperty('--browser-accent-color', accentColor);
  }

  render() {
    const message = this.getAttribute('message') || 'Hello from Web Component!';
    this.shadowRoot.innerHTML = `
      <style>
        .my-component {
          color: var(--my-component-color, var(--browser-accent-color, blue));
        }
      </style>
      <div class="my-component">${message}</div>
    `;
  }
}

customElements.define('my-component', MyComponent);