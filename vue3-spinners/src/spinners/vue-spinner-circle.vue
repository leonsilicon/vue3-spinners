<template>
	<div class="wrapper">
		<div v-for="i in 5" :key="i" class="ring" :style="getRingStyle(i)"></div>
	</div>
</template>

<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';
import { useSize } from '~/utils/size.js';

const { size, color } = defineProps(useSpinnerProps({ size: 50 }));
const { unit, value } = $(useSize(() => size));

const getRingStyle = (version: number) => ({
	height: `${value * (1 - version / 10)}${unit}`,
	width: `${value * (1 - version / 10)}${unit}`,
	top: `${version * 0.7 * 2.5}%`,
	left: `${version * 0.35 * 2.5}%`,
	animation: `circle 1s ${version * 0.2}s infinite linear`,
});
</script>
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

.wrapper {
	position: relative;
	width: v-bind(size);
	height: v-bind(size);
}

.ring {
	position: absolute;
	border: 1px solid v-bind(color);
	border-radius: 100%;
	transition: 2s;
	border-bottom: none;
	border-right: none;
	animation-fill-mode: '';
}
</style>
