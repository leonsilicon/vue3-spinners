<script lang="ts">
export default { name: 'VueSpinnerSquare' };
</script>

<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';
import { useSize } from '~/utils/size.js';

const { color, size: sizeProp } = defineProps(
	useSpinnerProps({ size: '50px' })
);

const size = $(useSize(() => sizeProp));

const squareStyle = $computed(() => ({
	display: 'inline-block',
	width: size.string,
	height: size.string,
	backgroundColor: color,
	animation:
		'vue-spinner-square 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9)',
	animationFillMode: 'both',
}));
</script>

<template>
	<div :style="squareStyle"></div>
</template>

<style>
@keyframes vue-spinner-square {
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
</style>
