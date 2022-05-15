<script lang="ts">
export default { name: 'VueSpinnerDot' };
</script>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '~/utils/props.js';
import { useSizeProp } from '~/utils/size.js';

const { color, size } = defineProps(useSpinnerProps({ size: 60 }));
const {
	string: sizeString,
	value: sizeValue,
	unit: sizeUnit,
} = $(useSizeProp(() => size));

const getCircleStyle = (version: number): CSSProperties => ({
	position: 'absolute',
	height: `${sizeValue / 2}${sizeUnit}`,
	width: `${sizeValue / 2}${sizeUnit}`,
	backgroundColor: color,
	borderRadius: '100%',
	animationFillMode: 'forwards',
	top: version % 2 ? '0' : 'auto',
	bottom: version % 2 ? `auto` : `0`,
	animation: `bounce 2s ${version === 2 ? `-1s` : `0s`} infinite linear`,
});

const wrapperStyle = $computed(
	(): CSSProperties => ({
		position: 'relative',
		width: sizeString,
		height: sizeString,
		animationFillMode: 'forwards',
		animation: 'rotate 2s 0s infinite linear',
	})
);
</script>

<template>
	<div :style="wrapperStyle">
		<div v-for="n in 2" :key="n" :style="getCircleStyle(n)"></div>
	</div>
</template>

<style>
@keyframes rotate {
	100% {
		transform: rotate(360deg);
	}
}

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
