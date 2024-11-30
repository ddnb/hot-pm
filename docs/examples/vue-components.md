# Vue Components in Markdown

VitePress allows you to use Vue components directly in your Markdown files.

## Basic Component Usage

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>
```

## Interactive Demo

Here's a live example:

<div class="demo">
  <Counter />
</div>

## Component API

You can also document your component's API:

| Prop    | Type     | Default | Description          |
|---------|----------|---------|---------------------|
| msg     | string   | -       | Display message     |
| theme   | string   | 'light' | Component theme     |
| count   | number   | 0       | Initial count value |