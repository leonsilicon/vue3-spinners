<template>
	<div class="wrapper">
		<div
			v-for="n in 2"
			:key="n"
			class="circle"
			:style="getCircleStyle(n)"
		></div>
	</div>
</template>

<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';

const { size, color } = defineProps(useSpinnerProps({ size: 60 }));

const getCircleStyle = (version: number) => ({
	animation: `bounce 2.1s ${version === 1 ? `1s` : `0s`} infinite ease-in-out`,
});
</script>

<style scoped>
@keyframes bounce {
	0%,
	100% {
		transform: scale(0);
	}
	50% {
		transform: scale(1);
	}
}

.wrapper {
	position: relative;
	width: v-bind(size);
	height: v-bind(size);
}

.circle {
	position: absolute;
	width: v-bind(size);
	height: v-bind(size);
	background-color: v-bind(color);
	border-radius: 100%;
	opacity: 0.6;
	top: 0;
	left: 0;
	animation-fill-mode: both;
}
</style>
