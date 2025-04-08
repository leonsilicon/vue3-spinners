<script lang="ts">
export default { name: 'VueSpinnerClip' };
</script>

<template>
	<div :style="ringStyle"></div>
</template>

<script setup lang="ts">
import { useSpinnerProps } from '../utils/props.js';
import { useSize } from '../utils/size.js';

const { color, size: sizeProp } = defineProps(useSpinnerProps({ size: 35 }));

const size = $(useSize(() => sizeProp));

const ringStyle = $computed(() => ({
	background: 'transparent !important',
	width: size.string,
	height: size.string,
	borderRadius: '100%',
	border: `2px solid ${color}`,
	borderBottomColor: 'transparent',
	display: 'inline-block',
	animation: 'vue-spinner-clip 0.75s 0s infinite linear',
	animationFillMode: 'both',
}));
</script>

<style>
@keyframes vue-spinner-clip {
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
