<script lang="ts">
export default { name: 'VueSpinnerGridPop' };
</script>

<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';
import { useSizeProp } from '~/utils/size.js';

const random = (top: number) => Math.random() * top;

const { color, size, margin } = defineProps(
	useSpinnerProps({ size: 15, margin: '2px' })
);

const { string: sizeString } = $(useSizeProp(() => size));

const wrapperWidth = $computed(
	() => Number.parseFloat(String(size)) * 3 + Number.parseFloat(margin) * 6
);

const getCircleStyle = (rand: number) => ({
	display: 'inline-block',
	backgroundColor: color,
	width: sizeString,
	height: sizeString,
	margin,
	borderRadius: '100%',
	animationFillMode: 'both',
	animation: `grid ${rand / 100 + 0.6}s ${rand / 100 - 0.2}s infinite ease`,
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
@keyframes grid {
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
