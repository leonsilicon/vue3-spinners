<script setup lang="ts">
import { CSSProperties } from 'vue';
import { useSpinnerProps } from '~/utils/props.js';
import { useSizeProp } from '~/utils/size.js';

const { color, size, margin } = defineProps(
	useSpinnerProps({ size: 15, margin: '2px' })
);

const { string: sizeString } = $(useSizeProp(() => size));

const getCircleStyle = (version: number): CSSProperties => ({
	animation: `beat 0.7s ${version % 2 ? `0s` : `0.35s`} infinite linear`,
	display: 'inline-block',
	backgroundColor: color,
	width: sizeString,
	height: sizeString,
	margin,
	borderRadius: '100%',
	animationFillMode: 'both',
});
</script>

<template>
	<div>
		<div v-for="n in 3" :key="n" :style="getCircleStyle(n)"></div>
	</div>
</template>

<style scoped>
@keyframes beat {
	50% {
		transform: scale(0.75);
		opacity: 0.2;
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
}
</style>
