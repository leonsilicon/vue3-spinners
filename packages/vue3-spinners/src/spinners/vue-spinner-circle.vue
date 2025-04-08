<script lang="ts">
export default { name: 'VueSpinnerCircle' };
</script>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '../utils/props.js';
import { useSize } from '../utils/size.js';

const { size: sizeProp, color } = defineProps(useSpinnerProps({ size: 50 }));
const size = $(useSize(() => sizeProp));

const getRingStyle = (version: number): CSSProperties => ({
	position: 'absolute',
	border: `1px solid ${color}`,
	borderRadius: '100%',
	transition: '2s',
	borderBottom: 'none',
	borderRight: 'none',
	animationFillMode: '',
	height: `${size.value * (1 - version / 10)}${size.unit}`,
	width: `${size.value * (1 - version / 10)}${size.unit}`,
	top: `${version * 0.7 * 2.5}%`,
	left: `${version * 0.35 * 2.5}%`,
	animation: `vue-spinner-circle 1s ${version * 0.2}s infinite linear`,
});

const wrapperStyle = $computed(
	(): CSSProperties => ({
		position: 'relative',
		width: size.string,
		height: size.string,
	})
);
</script>

<template>
	<div :style="wrapperStyle">
		<div v-for="i in 5" :key="i" :style="getRingStyle(i)"></div>
	</div>
</template>

<style>
@keyframes vue-spinner-circle {
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
