import type { Plugin } from 'vue';

import {
	VueSpinner,
	VueSpinnerAudio,
	VueSpinnerBall,
	VueSpinnerBars,
	VueSpinnerBox,
	VueSpinnerClock,
	VueSpinnerComment,
	VueSpinnerCore,
	VueSpinnerDots,
	VueSpinnerFacebook,
	VueSpinnerGears,
	VueSpinnerGrid,
	VueSpinnerHearts,
	VueSpinnerHourglass,
	VueSpinnerInfinity,
	VueSpinnerIos,
	VueSpinnerOrbit,
	VueSpinnerOval,
	VueSpinnerPie,
	VueSpinnerPuff,
	VueSpinnerRadio,
	VueSpinnerRings,
	VueSpinnerTail,
} from '~/spinners/index.js';

export const VueSpinnersPlugin: Plugin = {
	install(app) {
		app.component('VueSpinner', VueSpinner);
		app.component('VueSpinnerAudio', VueSpinnerAudio);
		app.component('VueSpinnerBall', VueSpinnerBall);
		app.component('VueSpinnerBars', VueSpinnerBars);
		app.component('VueSpinnerBox', VueSpinnerBox);
		app.component('VueSpinnerClock', VueSpinnerClock);
		app.component('VueSpinnerComment', VueSpinnerComment);
		app.component('VueSpinnerCore', VueSpinnerCore);
		app.component('VueSpinnerDots', VueSpinnerDots);
		app.component('VueSpinnerFacebook', VueSpinnerFacebook);
		app.component('VueSpinnerGears', VueSpinnerGears);
		app.component('VueSpinnerGrid', VueSpinnerGrid);
		app.component('VueSpinnerHearts', VueSpinnerHearts);
		app.component('VueSpinnerHourglass', VueSpinnerHourglass);
		app.component('VueSpinnerInfinity', VueSpinnerInfinity);
		app.component('VueSpinnerIos', VueSpinnerIos);
		app.component('VueSpinnerOrbit', VueSpinnerOrbit);
		app.component('VueSpinnerOval', VueSpinnerOval);
		app.component('VueSpinnerPie', VueSpinnerPie);
		app.component('VueSpinnerPuff', VueSpinnerPuff);
		app.component('VueSpinnerRadio', VueSpinnerRadio);
		app.component('VueSpinnerRings', VueSpinnerRings);
		app.component('VueSpinnerTail', VueSpinnerTail);
	},
};
