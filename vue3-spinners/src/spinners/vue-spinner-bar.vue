<script setup lang="ts">
import { calculateRgba } from '~/utils/rgba.js';

const {
	color = '#000000',
	width = 100,
	height = 4,
} = defineProps<{
	color: string;
	width: string | number;
	height: string | number;
}>();

function getBarStyle(version: number) {
	return {
		animation: ` ${version === 1 ? 'long' : 'short'} 2.1s ${
			version === 2 ? `1.15s` : ``
		} ${
			version === 1
				? `cubic-bezier(0.65, 0.815, 0.735, 0.395)`
				: `cubic-bezier(0.165, 0.84, 0.44, 1)`
		} infinite`,
	};
}
</script>

<template>
	<div class="wrapper">
		<div v-for="n in 2" class="bar" :style="getBarStyle(n)"></div>
	</div>
</template>

<style scoped>
.wrapper {
	position: relative;
	width: v-bind(width);
	height: v-bind(height);
	overflow: hidden;
	background-color: v-bind('calculateRgba(color, 0.2)');
	background-clip: padding-box;
}

@keyframes long {
	0% {
		left: -35%;
		right: 100%;
	}
	60% {
		left: 100%;
		right: -90%;
	}
	100% {
		left: 100%;
		right: -90%;
	}
}

@keyframes short {
	0% {
		left: -200%;
		right: 100%;
	}
	60% {
		left: 107%;
		right: -8%;
	}
	100% {
		left: 107%;
		right: -8%;
	}
}

.bar {
	position: absolute;
	height: v-bind(height);
	overflow: hidden;
	background-color: v-bind(color);
	background-clip: padding-box;
	display: block;
	border-radius: 2px;
	will-change: left, right;
	animation-fill-mode: forwards;
}
</style>
