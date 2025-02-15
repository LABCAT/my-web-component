class MyAccordion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
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

    this.shadowRoot.innerHTML = `
      <style>
        .accordion__item {
          margin: 10px 0;
        }
        .accordion__summary {
          font-size: 18px;
          cursor: pointer;
          background-color: #f1f1f1;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }
        .accordion__summary:hover {
          background-color: #e0e0e0;
        }
        .accordion__details {
          padding: 10px;
          background-color: #fafafa;
          border: 1px solid #ccc;
          border-top: none;
          transform: translateY(-20px);
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        details[open] .accordion__details {
          transform: translateY(0);
          opacity: 1;
        }
      </style>

      <details class="accordion__item">
        <summary class="accordion__summary">${message}</summary>
        <div class="accordion__details">
          <p>This is the content of the accordion. You can add anything here!</p>
        </div>
      </details>
    `;
  }
}

customElements.define('my-accordion', MyAccordion);
