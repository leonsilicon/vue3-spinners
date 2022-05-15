<script lang="ts">
export default { name: 'VueSpinnerDot' };
</script>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '~/utils/props.js';
import { useSize } from '~/utils/size.js';

const { color, size: sizeProp } = defineProps(useSpinnerProps({ size: 60 }));
const size = $(useSize(() => sizeProp));

const getCircleStyle = (version: number): CSSProperties => ({
	position: 'absolute',
	height: `${size.value / 2}${size.unit}`,
	width: `${size.value / 2}${size.unit}`,
	backgroundColor: color,
	borderRadius: '100%',
	animationFillMode: 'forwards',
	top: version % 2 ? '0' : 'auto',
	bottom: version % 2 ? `auto` : `0`,
	animation: `vue-spinner-bounce 2s ${
		version === 2 ? `-1s` : `0s`
	} infinite linear`,
});

const wrapperStyle = $computed(
	(): CSSProperties => ({
		position: 'relative',
		width: size.string,
		height: size.string,
		animationFillMode: 'forwards',
		animation: 'vue-spinner-rotate 2s 0s infinite linear',
	})
);
</script>

<template>
	<div :style="wrapperStyle">
		<div v-for="n in 2" :key="n" :style="getCircleStyle(n)"></div>
	</div>
</template>

<style>
@keyframes vue-spinner-rotate {
	100% {
		transform: rotate(360deg);
	}
}

@keyframes vue-spinner-bounce {
	0%,
	100% {
		transform: scale(0);
	}
	50% {
		transform: scale(1);
	}
}
</style>
