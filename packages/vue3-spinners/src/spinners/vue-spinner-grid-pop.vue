<template>
	<div class="wrapper">
		<div v-for="n in 9" :key="n" :style="getCircleStyle(random(100))"></div>
	</div>
</template>

<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';

const random = (top: number) => Math.random() * top;

const { color, size, margin } = defineProps(
	useSpinnerProps({ size: 15, margin: '2px' })
);

const wrapperWidth = $computed(
	() => Number.parseFloat(String(size)) * 3 + Number.parseFloat(margin) * 6
);

const getCircleStyle = (rand: number) => ({
	animation: `grid ${rand / 100 + 0.6}s ${rand / 100 - 0.2}s infinite ease`,
});
</script>

<style scoped>
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

.wrapper {
	width: v-bind(wrapperWidth);
	font-size: 0;
}

.circle {
	display: inline-block;
	background-color: v-bind(color);
	width: v-bind(size);
	height: v-bind(size);
	margin: v-bind(margin);
	border-radius: 100%;
	animation-fill-mode: both;
}
</style>
