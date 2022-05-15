<script lang="ts">
export default { name: 'VueSpinnerCircle' };
</script>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '~/utils/props.js';
import { useSize } from '~/utils/size.js';

const { size, color } = defineProps(useSpinnerProps({ size: 50 }));
const { unit, value, string: sizeString } = $(useSize(() => size));

const getRingStyle = (version: number): CSSProperties => ({
	position: 'absolute',
	border: `1px solid ${color}`,
	borderRadius: '100%',
	transition: '2s',
	borderBottom: 'none',
	borderRight: 'none',
	animationFillMode: '',
	height: `${value * (1 - version / 10)}${unit}`,
	width: `${value * (1 - version / 10)}${unit}`,
	top: `${version * 0.7 * 2.5}%`,
	left: `${version * 0.35 * 2.5}%`,
	animation: `circle 1s ${version * 0.2}s infinite linear`,
});

const wrapperStyle = $computed(
	(): CSSProperties => ({
		position: 'relative',
		width: sizeString,
		height: sizeString,
	})
);
</script>

<template>
	<div :style="wrapperStyle">
		<div v-for="i in 5" :key="i" :style="getRingStyle(i)"></div>
	</div>
</template>

<style>
@keyframes circle {
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
