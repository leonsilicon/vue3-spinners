import type { DefineComponent } from 'vue';

import type { spinnerProps } from '~/utils/use-spinner.js';

declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		VSpinner: DefineComponent<typeof spinnerProps>;
		VSpinnerAudio: DefineComponent<typeof spinnerProps>;
		VSpinnerBall: DefineComponent<typeof spinnerProps>;
		VSpinnerBars: DefineComponent<typeof spinnerProps>;
		VSpinnerBox: DefineComponent<typeof spinnerProps>;
		VSpinnerClock: DefineComponent<typeof spinnerProps>;
		VSpinnerComment: DefineComponent<typeof spinnerProps>;
		VSpinnerCore: DefineComponent<typeof spinnerProps>;
		VSpinnerDots: DefineComponent<typeof spinnerProps>;
		VSpinnerFacebook: DefineComponent<typeof spinnerProps>;
		VSpinnerGears: DefineComponent<typeof spinnerProps>;
		VSpinnerGrid: DefineComponent<typeof spinnerProps>;
		VSpinnerHearts: DefineComponent<typeof spinnerProps>;
		VSpinnerHourglass: DefineComponent<typeof spinnerProps>;
		VSpinnerInfinity: DefineComponent<typeof spinnerProps>;
		VSpinnerIos: DefineComponent<typeof spinnerProps>;
		VSpinnerOrbit: DefineComponent<typeof spinnerProps>;
		VSpinnerOval: DefineComponent<typeof spinnerProps>;
		VSpinnerPie: DefineComponent<typeof spinnerProps>;
		VSpinnerPuff: DefineComponent<typeof spinnerProps>;
		VSpinnerRadio: DefineComponent<typeof spinnerProps>;
		VSpinnerRings: DefineComponent<typeof spinnerProps>;
		VSpinnerTail: DefineComponent<typeof spinnerProps>;
	}
}
