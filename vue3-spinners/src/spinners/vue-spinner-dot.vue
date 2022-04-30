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

const { color, size } = defineProps(useSpinnerProps({ size: 60 }));

const getCircleStyle = (version: number) => ({
	top: version % 2 ? '0' : 'auto',
	bottom: version % 2 ? `auto` : `0`,
	animation: `bounce 2s ${version === 2 ? `-1s` : `0s`} infinite linear`,
});
</script>

<style scoped>
@keyframes rotate {
	100% {
		transform: rotate(360deg);
	}
}

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
	animation-fill-mode: forwards;
	animation: rotate 2s 0s infinite linear;
}

.circle {
	position: absolute;
	height: calc(v-bind(size) / 2);
	width: calc(v-bind(size) / 2);
	background-color: v-bind(color);
	border-radius: 100%;
	animation-fill-mode: forwards;
}
</style>
