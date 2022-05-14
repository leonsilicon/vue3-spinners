<script setup lang="ts">
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '~/utils/props.js';
import { useSizeProp } from '~/utils/size.js';

const { size, color } = defineProps(useSpinnerProps({ size: 60 }));
const { string: sizeString } = $(useSizeProp(() => size));

const getCircleStyle = (version: number): CSSProperties => ({
	position: 'absolute',
	width: sizeString,
	height: sizeString,
	backgroundColor: color,
	borderRadius: '100%',
	opacity: 0.6,
	top: 0,
	left: 0,
	animationFillMode: 'both',
	animation: `bounce 2.1s ${version === 1 ? `1s` : `0s`} infinite ease-in-out`,
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
		<div v-for="n in 2" :key="n" :style="getCircleStyle(n)"></div>
	</div>
</template>

<style>
@keyframes bounce {
	0%,
	100% {
		transform: scale(0);
	}
	50% {
		transform: scale(1);
	}
}
</style>
