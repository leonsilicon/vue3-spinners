<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';

const {
	color, size, margin
} = defineProps(useSpinnerProps({ size: '15px', margin: '2px' }));

const getCircleStyle = (version: number) => ({
	animation: `sync 0.6s ease-in-out ${
		version * 0.07
	}s infinite normal both running`,
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
@keyframes sync {
	33% {
		transform: translateY(10px);
	}
	66% {
		transform: translateY(-10px);
	}
	100% {
		transform: translateY(0);
	}
}

.circle {
	display: inline-block;
	width: v-bind(size);
	height: v-bind(size);
	margin: v-bind(margin);
	border-radius: 100%;
	background-color: v-bind(color);
	box-sizing: content-box;
}
</style>
