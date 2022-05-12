<template>
	<div class="wrapper">
		<div class="moon"></div>
		<div class="ring"></div>
	</div>
</template>

<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';
import { useSizeProp } from '~/utils/size.js';

const { color, size: sizeProp } = defineProps(useSpinnerProps({ size: 60 }));
const { value: sizeValue } = $(useSizeProp(() => sizeProp));

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
	width: calc(v-bind('size') + v-bind('moonSize(sizeValue) + unit') * 2);
	height: calc(v-bind('size') + v-bind('moonSize(sizeValue) + unit') * 2);
	animation: moon 0.6s linear 0s infinite normal forwards running;
	box-sizing: content-box;
}

.moon {
	position: absolute;
	top: calc(v-bind('size') / 2 - v-bind('moonSize(sizeValue) + unit') / 2);
	background-color: v-bind(color);
	opacity: 0.8;
	animation: moon 0.6s linear 0s infinite normal forwards running;
	box-sizing: content-box;
	width: v-bind(size);
	height: v-bind(size);
	border-radius: 100%;
}

.ring {
	border-width: v-bind('moonSize(sizeValue) + unit');
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
