<script setup lang="ts" name="VueSpinnerBeat">
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '~/utils/props.js';
import { useSize } from '~/utils/size.js';

const {
	color,
	size: sizeProp,
	margin: marginProp,
} = defineProps(useSpinnerProps({ size: 15, margin: '2px' }));

const size = $(useSize(() => sizeProp));
const margin = $(useSize(() => marginProp));

const getCircleStyle = (version: number): CSSProperties => ({
	animation: `vue-spinner-beat 0.7s ${
		version % 2 ? `0s` : `0.35s`
	} infinite linear`,
	display: 'inline-block',
	backgroundColor: color,
	width: size.string,
	height: size.string,
	margin: margin.string,
	borderRadius: '100%',
	animationFillMode: 'both',
});
</script>

<template>
	<div>
		<div v-for="n in 3" :key="n" :style="getCircleStyle(n)"></div>
	</div>
</template>

<style>
@keyframes vue-spinner-beat {
	50% {
		transform: scale(0.75);
		opacity: 0.2;
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
}
</style>
