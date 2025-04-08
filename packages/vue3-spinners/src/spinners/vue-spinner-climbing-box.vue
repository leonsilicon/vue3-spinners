<script lang="ts">
export default { name: 'VueSpinnerClimbingBox' };
</script>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '../utils/props.js';
import { useSize } from '../utils/size.js';

const { color, size: sizeProp } = defineProps(useSpinnerProps({ size: 15 }));

const size = $(useSize(() => sizeProp))

const containerStyle = $computed(
	(): CSSProperties => ({
		position: 'relative',
		width: '7.1em',
		height: '7.1em',
	})
);

const wrapperStyle = $computed(
	(): CSSProperties => ({
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: '-2.7em',
		marginLeft: '-2.7em',
		width: '5.4em',
		height: '5.4em',
		fontSize: size.string,
	})
);

const boxStyle = $computed(
	(): CSSProperties => ({
		position: 'absolute',
		left: '0',
		bottom: '-0.1em',
		height: '1em',
		width: '1em',
		backgroundColor: 'transparent',
		borderRadius: '15%',
		border: `0.25em solid ${color}`,
		transform: 'translate(0, -1em) rotate(-45deg)',
		animationFillMode: 'both',
		animation: 'vue-spinner-climbing-box 2.5s infinite cubic-bezier(0.79, 0, 0.47, 0.97)',
	})
);

const hillStyle = $computed(
	(): CSSProperties => ({
		position: 'absolute',
		width: '7.1em',
		height: '7.1em',
		top: '1.7em',
		left: '1.7em',
		borderLeft: `0.25em solid ${color}`,
		transform: 'rotate(45deg)',
	})
);
</script>

<template>
	<div :style="containerStyle">
		<div :style="wrapperStyle">
			<div :style="boxStyle"></div>
			<div :style="hillStyle"></div>
		</div>
	</div>
</template>

<style>
@keyframes vue-spinner-climbing-box {
	0% {
		transform: translate(0, -1em) rotate(-45deg);
	}
	5% {
		transform: translate(0, -1em) rotate(-50deg);
	}
	20% {
		transform: translate(1em, -2em) rotate(47deg);
	}
	25% {
		transform: translate(1em, -2em) rotate(45deg);
	}
	30% {
		transform: translate(1em, -2em) rotate(40deg);
	}
	45% {
		transform: translate(2em, -3em) rotate(137deg);
	}
	50% {
		transform: translate(2em, -3em) rotate(135deg);
	}
	55% {
		transform: translate(2em, -3em) rotate(130deg);
	}
	70% {
		transform: translate(3em, -4em) rotate(217deg);
	}
	75% {
		transform: translate(3em, -4em) rotate(220deg);
	}
	100% {
		transform: translate(0, -1em) rotate(-225deg);
	}
}
</style>
