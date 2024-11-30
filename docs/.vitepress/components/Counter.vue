<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="counter">
    <button 
      class="counter-button"
      @click="count++"
    >
      Count is: {{ count }}
    </button>
    <p class="counter-desc">Click the button to increment the counter</p>
  </div>
</template>

<style scoped>
.counter {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  text-align: center;
}

.counter-button {
  background-color: var(--vp-c-brand);
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.counter-button:hover {
  background-color: var(--vp-c-brand-dark);
}

.counter-desc {
  margin-top: 8px;
  color: var(--vp-c-text-2);
  font-size: 0.9em;
}
</style>