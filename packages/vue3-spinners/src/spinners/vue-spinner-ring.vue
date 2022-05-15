<script lang="ts">
export default { name: 'VueSpinnerRing' };
</script>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '~/utils/props.js';
import { useSizeProp } from '~/utils/size.js';

const { color, size } = defineProps(useSpinnerProps({ size: '60px' }));
const {
	string: sizeString,
	value: sizeValue,
	unit: sizeUnit,
} = $(useSizeProp(() => size));

const getRingStyle = (version: number): CSSProperties => ({
	position: 'absolute',
	top: '0',
	left: '0',
	width: sizeString,
	height: sizeString,
	border: `${sizeValue / 10}${sizeUnit} solid ${color}`,
	borderRadius: '100%',
	opacity: '0.4',
	animationFillMode: 'forwards',
	perspective: '800px',
	animation: `${version === 1 ? 'right' : 'left'} 2s 0s infinite linear`,
});

const wrapperStyle = $computed(
	(): CSSProperties => ({
		position: 'relative',
		width: sizeString,
		height: sizeString,
	})
);
</script>

<template>
	<div :style="wrapperStyle">
		<div v-for="n in 2" :key="n" :style="getRingStyle(n)"></div>
	</div>
</template>

<style scoped>
@keyframes right {
	0% {
		transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
	}
}

@keyframes left {
	0% {
		transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
	}
}
</style>
