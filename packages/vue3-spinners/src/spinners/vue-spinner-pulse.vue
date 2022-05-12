<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';

const {
	color,
	size,
	margin,
} = defineProps(useSpinnerProps({ size: '15px', margin: '2px' }))


const getCircleStyle = (version: number) => ({
	animation: `pulse 0.75s ${
		version * 0.12
	}s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)`,
});
</script>

<template>
	<div>
		<div
			v-for="n in 3"
			:key="n"
			class="circle"
			:style="getCircleStyle(n + 1)"
		></div>
	</div>
</template>

<style>
@keyframes pulse {
	0% {
		transform: scale(1);
		opacity: 1;
	}
	45% {
		transform: scale(0.1);
		opacity: 0.7;
	}
	80% {
		transform: scale(1);
		opacity: 1;
	}
}

.circle {
	display: inline-block;
	width: v-bind(size);
	height: v-bind(size);
	margin: v-bind(margin);
	border-radius: 100%;
	background-color: v-bind(color);
	animation-fill-mode: both;
}
</style>
