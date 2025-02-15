class MyComponent extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['message'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'message') {
      this.render();
    }
  }

  render() {
    const message = this.getAttribute('message') || 'Click to expand';

    this.innerHTML = `
      <style>
        .my-component {
          display: block;
        }
        .my-component__summary {
          font-size: 18px;
          cursor: pointer;
          background-color: #f1f1f1;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }
        .my-component__summary:hover {
          background-color: #e0e0e0;
        }
        .my-component__details {
          padding: 10px;
          background-color: #fafafa;
          border: 1px solid #ccc;
          border-top: none;
          transform: translateY(-20px);
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .my-component[open] .my-component__details {
          transform: translateY(0);
          opacity: 1;
        }
      </style>

      <details class="my-component">
        <summary class="my-component__summary">${message}</summary>
        <div class="my-component__details">
          <p>This is the content of the accordion. You can add anything here!</p>
        </div>
      </details>
    `;
  }
}

customElements.define('my-component', MyComponent);
