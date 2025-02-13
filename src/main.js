import { defineCustomElement } from 'vue';
import MyComponent from './components/MyComponent.vue';

// Convert Vue component to a web component
const MyComponentElement = defineCustomElement(MyComponent);

// Register as a custom element
customElements.define('my-component', MyComponentElement);
