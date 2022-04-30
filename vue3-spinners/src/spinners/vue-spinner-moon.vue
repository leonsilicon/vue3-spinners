<template>
	<div class="wrapper">
		<div class="moon"></div>
		<div class="ring"></div>
	</div>
</template>

<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';

const { color, size } = defineProps(useSpinnerProps({ size: 60 }));

const moonSize = (size: number) => (size / 7).toFixed(5);
</script>

<style scoped>
@keyframes moon {
	100% {
		transform: rotate(360deg);
	}
}

.wrapper {
	position: relative;
	width: v-bind('size + moonSize(size) * 2');
	height: v-bind('size + moonSize(size) * 2');
	animation: moon 0.6s linear 0s infinite normal forwards running;
	box-sizing: content-box;
}

.moon {
	position: absolute;
	top: v-bind('size / 2 - moonSize(size) / 2');
	background-color: v-bind(color);
	opacity: 0.8;
	animation: moon 0.6s linear 0s infinite normal forwards running;
	box-sizing: content-box;
	width: v-bind(size);
	height: v-bind(size);
	border-radius: 100%;
}

.ring {
	border-width: v-bind('moonSize(size) + "px"');
	border-style: solid;
	border-color: v-bind('color');
	border-image: initial;
	opacity: 0.1;
	box-sizing: content-box;
	width: v-bind(size);
	height: v-bind(size);
	border-radius: 100%;
}
</style>
