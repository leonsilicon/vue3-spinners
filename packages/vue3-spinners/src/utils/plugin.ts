import type { Plugin } from 'vue';

import * as spinnerComponents from '../spinners/index.js';

export const VueSpinnersPlugin: Plugin = {
	install(app) {
		for (const SpinnerComponent of Object.values(spinnerComponents)) {
			app.component(SpinnerComponent.name, SpinnerComponent);
		}
	},
};
