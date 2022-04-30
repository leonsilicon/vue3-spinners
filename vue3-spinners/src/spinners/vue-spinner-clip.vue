<template>
	<div class="ring"></div>
</template>

<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';

const { color, size } = defineProps(useSpinnerProps({ size: 35 }));
</script>

<style scoped>
@keyframes clip {
	0% {
		transform: rotate(0deg) scale(1);
	}
	50% {
		transform: rotate(180deg) scale(0.8);
	}
	100% {
		transform: rotate(360deg) scale(1);
	}
}

.ring {
	background: transparent !important;
	width: v-bind(size);
	height: v-bind(size);
	border-radius: 100%;
	border: 2px solid;
	border-color: v-bind(color);
	border-bottom-color: transparent;
	display: inline-block;
	animation: clip 0.75s 0s infinite linear;
	animation-fill-mode: both;
}
</style>
