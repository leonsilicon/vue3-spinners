import type { ExtractPropTypes } from 'vue';
import { computed } from 'vue';

export const spinnerProps = {
	size: {
		type: [Number, String],
		default: '1em',
	},
	color: String,
};

export default function useSpinner(
	props: ExtractPropTypes<typeof spinnerProps>
) {
	return {
		cSize: computed(() => props.size),
		classes: computed(() => 'vue-spinner'),
		style: computed(() => ({ color: props.color })),
	};
}
