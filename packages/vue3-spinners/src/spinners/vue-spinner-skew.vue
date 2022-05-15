<script lang="ts">
export default { name: 'VueSpinnerSkew' };
</script>

<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';
import { useSize } from '~/utils/size.js';

const { color, size: sizeProp } = defineProps(
	useSpinnerProps({ size: '20px' })
);
const size = $(useSize(() => sizeProp));

const triangleStyle = $computed(() => ({
	display: 'inline-block',
	width: 0,
	height: 0,
	borderLeft: `${size.string} solid transparent`,
	borderRight: `${size.string} solid transparent`,
	borderBottom: `${size.string} solid ${color}`,
	animation: `vue-spinner-skew 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9)`,
	animationFillMode: 'both',
}));
</script>

<template>
	<div :style="triangleStyle"></div>
</template>

<style>
@keyframes vue-spinner-skew {
	25% {
		transform: perspective(100px) rotateX(180deg) rotateY(0);
	}
	50% {
		transform: perspective(100px) rotateX(180deg) rotateY(180deg);
	}
	75% {
		transform: perspective(100px) rotateX(0) rotateY(180deg);
	}
	100% {
		transform: perspective(100px) rotateX(0) rotateY(0);
	}
}
</style>
