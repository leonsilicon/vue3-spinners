# vue3-spinners

Spinner components for Vue 3.

These components were exported from Quasar's spinner components (<https://quasar.dev/vue-components/spinners>), so thank you to the Quasar team for making such an amazing UI library!

Online demo: <https://leonzalion.github.io/vue3-spinners>

## Installation

```shell
npm install vue3-spinners
```

## Usage

In `main.ts`:

```typescript
import 'vue3-spinners/spinners.css';

// ... your app initialization code goes here
```

```vue
<script>
import { VSpinner } from 'vue3-spinners';

export default {
  components: { VSpinner }
};
</script>

<template>
  <v-spinner size='20' />
</template>
```

Using `<script setup>` (recommended):

```vue
<script setup>
import { VSpinner } from 'vue3-spinners';
</script>

<template>
  <v-spinner size='20' />
</template>
```

## Props

### size

Type: `string | number`
\
Default: `1em`

The size of the spinner.

### color

Type: `string`
\
Default: `currentColor`

The color of the spinner.

## Why not use Quasar directly?

Unfortunately, there are a few Quasar styles that conflict with those of TailwindCSS (e.g. `bg-white` and `bg-black`) that the Quasar team is [not planning on changing](https://github.com/quasarframework/quasar/issues/6775#issuecomment-865974606). Many of Quasar's components depend on these styles, so it's not possible to simply omit Quasar's CSS. Thus, I couldn't use Quasar for my project which heavily depends on WindiCSS, a superset of TailwindCSS. But, Quasar's UI components are some of the best out there, especially the spinners, so the best solution I could think of is exporting these spinners into a package independent of Quasar's CSS.
