# vue3-spinners

[![npm version](https://img.shields.io/npm/v/vue3-spinners)](https://npmjs.com/package/vue3-spinners)

Spinner components for Vue 3.

These components were exported from Quasar's spinner components (<https://quasar.dev/vue-components/spinners>) and from [vue-spinners](https://github.com/Saeris/vue-spinners) (which itself was a port of [react-spinners](https://github.com/davidhu2000/react-spinners)) so the authors of these libraries deserve all of the credit for these amazing spinner animations!

## Online Demo

To see all the spinners in action, press the following link: <https://leonzalion.github.io/vue3-spinners>

<p align="center">
  <img src="https://raw.githubusercontent.com/leonzalion/vue3-spinners/main/packages/assets/images/spinners.gif" />
</p>

## Installation

```shell
npm install vue3-spinners
```

## Usage

In `main.ts`, import the necessary CSS file:

```typescript
import 'vue3-spinners/spinners.css';

// ... your app initialization code goes here
```

Then, import the spinners in your Vue component:

```vue
<script>
import {
  VueSpinner,
  // ...
} from 'vue3-spinners';

export default {
  components: {
    VueSpinner,
    // ...
  },
};
</script>

<template>
  <VueSpinner size="20" color="red" />
  <!-- ... -->
</template>
```

Using `<script setup>` (recommended):

```vue
<script setup>
import {
  VueSpinner,
  // ...
} from 'vue3-spinners';
</script>

<template>
  <VueSpinner size="20" color="red" />
  <!-- ... -->
</template>
```

If you want the spinners to be available globally without needing to import them manually, add the following to your app's entrypoint:

```typescript
import { createApp } from 'vue';
import App from './app.vue';
import { VueSpinnersPlugin } from 'vue3-spinners';

const app = createApp(App);
app.use(VueSpinnersPlugin);
// ...
```

## Props

### color

Type: `string`\
Default: `#000000`\
Supported Spinners: _all_

All spinners accept a color property that sets the color of the spinner.

### size

Type: `string | number`\
Default: _varies by spinner_\
Supported Spinners:

- VueSpinner
- VueSpinnerAudio
- VueSpinnerBall
- VueSpinnerBars
- VueSpinnerBeat
- VueSpinnerBounce
- VueSpinnerBox
- VueSpinnerCircle
- VueSpinnerClimbingBox
- VueSpinnerClip
- VueSpinnerClock
- VueSpinnerComment
- VueSpinnerCore
- VueSpinnerDot
- VueSpinnerDots
- VueSpinnerFacebook
- VueSpinnerGears
- VueSpinnerGrid
- VueSpinnerGridPop
- VueSpinnerHearts
- VueSpinnerHourglass
- VueSpinnerInfinity
- VueSpinnerIos
- VueSpinnerMoon
- VueSpinnerOrbit
- VueSpinnerOval
- VueSpinnerPacman
- VueSpinnerPie
- VueSpinnerPropagate
- VueSpinnerPuff
- VueSpinnerPulse
- VueSpinnerRadio
- VueSpinnerRing
- VueSpinnerRings
- VueSpinnerRise
- VueSpinnerRotate
- VueSpinnerSkew
- VueSpinnerSquare
- VueSpinnerSync
- VueSpinnerTail
