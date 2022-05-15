<script lang="ts">
export default { name: 'VueSpinnerRotate' };
</script>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '~/utils/props.js';
import { useSize } from '~/utils/size.js';

const { color, size, margin } = defineProps(
	useSpinnerProps({ size: '20px', margin: '2px' })
);

const { string: sizeString } = $(useSize(() => size));

const wrapperStyle = $computed(
	(): CSSProperties => ({
		position: 'relative',
		display: 'inline-block',
		animation: 'rotate 1s 0s infinite cubic-bezier(0.7, -0.13, 0.22, 0.86)',
		animationFillMode: 'both',
		width: sizeString,
		height: sizeString,
		margin,
		borderRadius: '100%',
		backgroundColor: 'v-bind(color)',
	})
);

const getCircleStyle = (side: number): CSSProperties => ({
	position: 'absolute',
	top: '0',
	opacity: '0.8',
	width: sizeString,
	height: sizeString,
	margin,
	borderRadius: '100%',
	backgroundColor: color,
	left: `${side ? -28 : 25}px`,
});
</script>

<template>
	<div :style="wrapperStyle">
		<div v-for="n in 2" :key="n" :style="getCircleStyle(n)"></div>
	</div>
</template>

<style scoped>
@keyframes rotate {
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(180deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
