<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';

const { color, size } = defineProps(useSpinnerProps({ size: '50px '}));
</script>

<template>
	<div class="square"></div>
</template>

<style scoped>
@keyframes square {
	25% {
		transform: rotateX(180deg) rotateY(0);
	}
	50% {
		transform: rotateX(180deg) rotateY(180deg);
	}
	75% {
		transform: rotateX(0) rotateY(180deg);
	}
	100% {
		transform: rotateX(0) rotateY(0);
	}
}

.square {
	display: inline-block;
	width: v-bind(size);
	height: v-bind(size);
	background-color: v-bind(color);
	animation: square 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
	animation-fill-mode: both;
}
</style>
