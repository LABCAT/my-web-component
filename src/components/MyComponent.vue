<script setup>
import { onMounted } from 'vue';

defineProps({
  message: {
    type: String,
    default: 'Hello from Web Component!'
  }
});

onMounted(() => {
  const accentColor = window.getComputedStyle(document.body).getPropertyValue('accent-color') || 'blue';
  document.documentElement.style.setProperty('--browser-accent-color', accentColor);
});
</script>

<template>
  <div class="my-component">
    {{ message }}
  </div>
</template>

<style lang="scss">
.my-component {
  color: var(--my-component-color, var(--browser-accent-color, blue));
}
</style>
