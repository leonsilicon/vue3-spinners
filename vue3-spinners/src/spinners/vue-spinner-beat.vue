<template>
	<div>
		<div
			v-for="n in 3"
			:key="n"
			class="circle"
			:style="getCircleStyle(n)"
		></div>
	</div>
</template>

<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';

const { color, size, margin } = defineProps(
	useSpinnerProps({ size: 15, margin: '2px' })
);

const getCircleStyle = (version: number) => ({
	animation: `beat 0.7s ${version % 2 ? `0s` : `0.35s`} infinite linear`,
});
</script>

<style scoped>
.circle {
	display: inline-block;
	background-color: v-bind(color);
	width: v-bind(size);
	height: v-bind(size);
	margin: v-bind(margin);
	border-radius: 100%;
	animation-fill-mode: both;
}

@keyframes beat {
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
