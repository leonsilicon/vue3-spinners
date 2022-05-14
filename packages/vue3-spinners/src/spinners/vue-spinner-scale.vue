<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';

const { color, height, width, radius, margin } = defineProps(
	useSpinnerProps({
		height: '35px',
		width: '4px',
		radius: '2px',
		margin: '2px',
	})
);

const getBarStyle = (version: number) => ({
	display: 'inline-block',
	width,
	height,
	margin,
	borderRadius: radius,
	backgroundColor: color,
	animation: `scale 1s cubic-bezier(0.2, 0.68, 0.18, 1.08) ${
		version * 0.1
	}s infinite normal both running`,
});
</script>

<template>
	<div>
		<div v-for="n in 5" :key="n" :style="getBarStyle(n + 1)"></div>
	</div>
</template>

<style>
@keyframes scale {
	0% {
		transform: scaleY(1);
	}
	50% {
		transform: scaleY(0.4);
	}
	100% {
		transform: scaleY(1);
	}
}
</style>
