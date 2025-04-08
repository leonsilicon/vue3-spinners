/* eslint-disable @typescript-eslint/consistent-type-imports */

import type { spinnerProps } from './utils/use-spinner.js';

declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		VueSpinner: DefineComponent<typeof spinnerProps>;
		VueSpinnerAudio: DefineComponent<typeof spinnerProps>;
		VueSpinnerBall: DefineComponent<typeof spinnerProps>;
		VueSpinnerBar: typeof import('./spinners/vue-spinner-bar.vue');
		VueSpinnerBars: DefineComponent<typeof spinnerProps>;
		VueSpinnerBeat: typeof import('./spinners/vue-spinner-beat.vue');
		VueSpinnerBox: DefineComponent<typeof spinnerProps>;
		VueSpinnerCircle: typeof import('./spinners/vue-spinner-circle.vue');
		VueSpinnerClimbingBox: typeof import('./spinners/vue-spinner-climbing-box.vue');
		VueSpinnerClip: typeof import('./spinners/vue-spinner-clip.vue');
		VueSpinnerClock: DefineComponent<typeof spinnerProps>;
		VueSpinnerComment: DefineComponent<typeof spinnerProps>;
		VueSpinnerCore: DefineComponent<typeof spinnerProps>;
		VueSpinnerDot: typeof import('./spinners/vue-spinner-dot.vue');
		VueSpinnerDots: DefineComponent<typeof spinnerProps>;
		VueSpinnerFade: typeof import('./spinners/vue-spinner-fade.vue');
		VueSpinnerFacebook: DefineComponent<typeof spinnerProps>;
		VueSpinnerGears: DefineComponent<typeof spinnerProps>;
		VueSpinnerGrid: DefineComponent<typeof spinnerProps>;
		VueSpinnerGridPop: typeof import('./spinners/vue-spinner-grid-pop.vue');
		VueSpinnerHearts: DefineComponent<typeof spinnerProps>;
		VueSpinnerHourglass: DefineComponent<typeof spinnerProps>;
		VueSpinnerInfinity: DefineComponent<typeof spinnerProps>;
		VueSpinnerIos: DefineComponent<typeof spinnerProps>;
		VueSpinnerMoon: typeof import('./spinners/vue-spinner-moon.vue');
		VueSpinnerOrbit: DefineComponent<typeof spinnerProps>;
		VueSpinnerOval: DefineComponent<typeof spinnerProps>;
		VueSpinnerPacman: typeof import('./spinners/vue-spinner-pacman.vue');
		VueSpinnerPie: DefineComponent<typeof spinnerProps>;
		VueSpinnerPropagate: typeof import('./spinners/vue-spinner-propagate.vue');
		VueSpinnerPuff: DefineComponent<typeof spinnerProps>;
		VueSpinnerPulse: typeof import('./spinners/vue-spinner-pulse.vue');
		VueSpinnerRadio: DefineComponent<typeof spinnerProps>;
		VueSpinnerRing: typeof import('./spinners/vue-spinner-ring.vue');
		VueSpinnerRings: DefineComponent<typeof spinnerProps>;
		VueSpinnerRise: typeof import('./spinners/vue-spinner-rise.vue');
		VueSpinnerRotate: typeof import('./spinners/vue-spinner-rotate.vue');
		VueSpinnerScale: typeof import('./spinners/vue-spinner-scale.vue');
		VueSpinnerSkew: typeof import('./spinners/vue-spinner-skew.vue');
		VueSpinnerSquare: typeof import('./spinners/vue-spinner-square.vue');
		VueSpinnerSync: typeof import('./spinners/vue-spinner-sync.vue');
		VueSpinnerTail: DefineComponent<typeof spinnerProps>;
	}
}
