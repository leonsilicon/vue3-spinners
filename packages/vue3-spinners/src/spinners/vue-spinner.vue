<script lang="ts">
import { defineComponent, h } from 'vue';

import useSpinner, { spinnerProps } from '~/utils/use-spinner.js';

export default defineComponent({
	name: 'VueSpinner',

	props: {
		...spinnerProps,

		thickness: {
			type: Number,
			default: 5,
		},
	},

	setup(props) {
		const { cSize, classes, style } = useSpinner(props);

		return () =>
			h(
				'svg',
				{
					style: style.value,
					class: classes.value + ' vue-spinner-mat',
					width: cSize.value,
					height: cSize.value,
					viewBox: '25 25 50 50',
				},
				[
					h('circle', {
						class: 'path',
						cx: '50',
						cy: '50',
						r: '20',
						fill: 'none',
						stroke: 'currentColor',
						'stroke-width': props.thickness,
						'stroke-miterlimit': '10',
					}),
				]
			);
	},
});
</script>

<style>
.vue-spinner-mat {
	animation: v-spin 2s linear infinite;
	transform-origin: center center;
}

.vue-spinner-mat .path {
	stroke-dasharray: 1, 200;
	stroke-dashoffset: 0;
	animation: v-mat-dash 1.5s ease-in-out infinite;
}

@keyframes v-spin {
	0% {
		transform: rotate3d(0, 0, 1, 0deg);
	}
	25% {
		transform: rotate3d(0, 0, 1, 90deg);
	}
	50% {
		transform: rotate3d(0, 0, 1, 180deg);
	}
	75% {
		transform: rotate3d(0, 0, 1, 270deg);
	}
	100% {
		transform: rotate3d(0, 0, 1, 359deg);
	}
}

@keyframes v-mat-dash {
	0% {
		stroke-dasharray: 1, 200;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 89, 200;
		stroke-dashoffset: -35px;
	}
	100% {
		stroke-dasharray: 89, 200;
		stroke-dashoffset: -124px;
	}
}
</style>
