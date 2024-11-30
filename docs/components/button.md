# Button Component

The Button component is a versatile element that can be used across your application.

## Basic Usage

```vue
<template>
  <button class="btn">Click me</button>
</template>
```

## Variants

### Primary Button

```vue
<button class="btn btn-primary">Primary</button>
```

### Secondary Button

```vue
<button class="btn btn-secondary">Secondary</button>
```

## API Reference

| Prop     | Type    | Default | Description           |
|----------|---------|---------|------------------------|
| size     | string  | 'md'    | Button size           |
| variant  | string  | 'primary'| Button style variant  |
| disabled | boolean | false   | Disable button state  |