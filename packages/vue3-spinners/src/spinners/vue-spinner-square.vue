<script lang="ts">
export default { name: 'VueSpinnerSquare' };
</script>

<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';
import { useSizeProp } from '~/utils/size.js';

const { color, size } = defineProps(useSpinnerProps({ size: '50px' }));

const { string: sizeString } = $(useSizeProp(() => size));

const squareStyle = $computed(() => ({
	display: 'inline-block',
	width: sizeString,
	height: sizeString,
	backgroundColor: color,
	animation: 'square 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9)',
	animationFillMode: 'both',
}));
</script>

<template>
	<div :style="squareStyle"></div>
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
</style>
