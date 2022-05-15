<script lang="ts">
export default { name: 'VueSpinnerGridPop' };
</script>

<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';
import { useSize } from '~/utils/size.js';

const random = (top: number) => Math.random() * top;

const {
	color,
	size: sizeProp,
	margin: marginProp,
} = defineProps(useSpinnerProps({ size: 15, margin: '2px' }));

const size = $(useSize(() => sizeProp));
const margin = $(useSize(() => marginProp));

const wrapperWidth = $computed(() => size.value * 3 + margin.value * 6);

const getCircleStyle = (rand: number) => ({
	display: 'inline-block',
	backgroundColor: color,
	width: size.string,
	height: size.string,
	margin: margin.string,
	borderRadius: '100%',
	animationFillMode: 'both',
	animation: `vue-spinner-grid ${rand / 100 + 0.6}s ${
		rand / 100 - 0.2
	}s infinite ease`,
});

const wrapperStyle = $computed(() => ({
	width: `${wrapperWidth}px`,
	fontSize: 0,
}));
</script>

<template>
	<div :style="wrapperStyle">
		<div v-for="n in 9" :key="n" :style="getCircleStyle(random(100))"></div>
	</div>
</template>

<style>
@keyframes vue-spinner-grid {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(0.5);
		opacity: 0.7;
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
}
</style>
