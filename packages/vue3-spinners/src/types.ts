import type { spinnerProps } from '~/utils/use-spinner.js';

declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		VueSpinner: DefineComponent<typeof spinnerProps>;
		VueSpinnerAudio: DefineComponent<typeof spinnerProps>;
		VueSpinnerBall: DefineComponent<typeof spinnerProps>;
		VueSpinnerBars: DefineComponent<typeof spinnerProps>;
		VueSpinnerBox: DefineComponent<typeof spinnerProps>;
		VueSpinnerClock: DefineComponent<typeof spinnerProps>;
		VueSpinnerComment: DefineComponent<typeof spinnerProps>;
		VueSpinnerCore: DefineComponent<typeof spinnerProps>;
		VueSpinnerDots: DefineComponent<typeof spinnerProps>;
		VueSpinnerFacebook: DefineComponent<typeof spinnerProps>;
		VueSpinnerGears: DefineComponent<typeof spinnerProps>;
		VueSpinnerGrid: DefineComponent<typeof spinnerProps>;
		VueSpinnerHearts: DefineComponent<typeof spinnerProps>;
		VueSpinnerHourglass: DefineComponent<typeof spinnerProps>;
		VueSpinnerInfinity: DefineComponent<typeof spinnerProps>;
		VueSpinnerIos: DefineComponent<typeof spinnerProps>;
		VueSpinnerOrbit: DefineComponent<typeof spinnerProps>;
		VueSpinnerOval: DefineComponent<typeof spinnerProps>;
		VueSpinnerPie: DefineComponent<typeof spinnerProps>;
		VueSpinnerPuff: DefineComponent<typeof spinnerProps>;
		VueSpinnerRadio: DefineComponent<typeof spinnerProps>;
		VueSpinnerRings: DefineComponent<typeof spinnerProps>;
		VueSpinnerTail: DefineComponent<typeof spinnerProps>;
	}
}
