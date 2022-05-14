<template>
	<div :style="ringStyle"></div>
</template>

<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';
import { useSizeProp } from '~/utils/size.js';

const { color, size } = defineProps(useSpinnerProps({ size: 35 }));

const { string: sizeString } = $(useSizeProp(() => size));

const ringStyle = $computed(() => ({
	background: 'transparent !important',
	width: sizeString,
	height: sizeString,
	borderRadius: '100%',
	border: `2px solid ${color}`,
	borderBottomColor: 'transparent',
	display: 'inline-block',
	animation: 'clip 0.75s 0s infinite linear',
	animationFillMode: 'both',
}));
</script>

<style>
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
</style>
