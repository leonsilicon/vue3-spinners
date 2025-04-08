<script lang="ts">
export default { name: 'VueSpinnerRing' };
</script>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '../utils/props.js';
import { useSize } from '../utils/size.js';

const { color, size: sizeProp } = defineProps(
	useSpinnerProps({ size: '60px' })
);
const size = $(useSize(() => sizeProp));

const getRingStyle = (version: number): CSSProperties => ({
	position: 'absolute',
	top: '0',
	left: '0',
	width: size.string,
	height: size.string,
	border: `${size.value / 10}${size.unit} solid ${color}`,
	borderRadius: '100%',
	opacity: '0.4',
	animationFillMode: 'forwards',
	perspective: '800px',
	animation: `${
		version === 1 ? 'vue-spinner-right' : 'vue-spinner-left'
	} 2s 0s infinite linear`,
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
		<div v-for="n in 2" :key="n" :style="getRingStyle(n)"></div>
	</div>
</template>

<style>
@keyframes vue-spinner-right {
	0% {
		transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
	}
}

@keyframes vue-spinner-left {
	0% {
		transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
	}
}
</style>
