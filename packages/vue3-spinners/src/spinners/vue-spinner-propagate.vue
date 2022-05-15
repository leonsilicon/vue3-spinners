<script lang="ts">
export default { name: 'VueSpinnerPropagate' };
</script>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '~/utils/props.js';
import { useSize } from '~/utils/size.js';

const { color, size } = defineProps(
	useSpinnerProps({
		size: '15px',
	})
);

const {
	string: sizeString,
	unit: sizeUnit,
	value: sizeValue,
} = $(useSize(() => size));

// 1.5 4.5 7.5
const distance = [1, 3, 5];

const getCircleStyle = (version: number): CSSProperties => ({
	position: 'absolute',
	width: sizeString,
	height: sizeString,
	borderRadius: '50%',
	background: color,
	fontSize: `${sizeValue / 3}${sizeUnit}`,
	animationFillMode: 'forwards',
	animation: `propagate${version} 1.5s infinite`,
});

const getDistance = (index: number) => `${distance[index]!}rem`;

const wrapperStyle = $computed(
	(): CSSProperties => ({
		position: 'relative',
	})
);
</script>

<template>
	<div :style="wrapperStyle">
		<div v-for="n in 6" :key="n" :style="getCircleStyle(n)"></div>
	</div>
</template>

<style>
@keyframes propagate0 {
	25% {
		transform: translateX(v-bind('-getDistance(0)')) scale(0.75);
	}
	50% {
		transform: translateX(v-bind('-getDistance(1)')) scale(0.6);
	}
	75% {
		transform: translateX(v-bind('-getDistance(2)')) scale(0.5);
	}
	95% {
		transform: translateX(0rem) scale(1);
	}
}

@keyframes propagate1 {
	25% {
		transform: translateX(v-bind('-getDistance(0)')) scale(0.75);
	}
	50% {
		transform: translateX(v-bind('getDistance(1)')) scale(0.6);
	}
	75% {
		transform: translateX(v-bind('getDistance(1)')) scale(0.6);
	}
	95% {
		transform: translateX(0rem) scale(1);
	}
}

@keyframes propagate2 {
	25% {
		transform: translateX(v-bind('-getDistance(0)')) scale(0.75);
	}
	75% {
		transform: translateX(v-bind('-getDistance(0)')) scale(0.75);
	}
	95% {
		transform: translateX(0rem) scale(1);
	}
}

@keyframes propagate3 {
	25% {
		transform: translateX(v-bind('getDistance(0)')) scale(0.75);
	}
	75% {
		transform: translateX(v-bind('getDistance(0)')) scale(0.75);
	}
	95% {
		transform: translateX(0rem) scale(1);
	}
}

@keyframes propagate4 {
	25% {
		transform: translateX(v-bind('getDistance(0)')) scale(0.75);
	}
	50% {
		transform: translateX(v-bind('getDistance(1)')) scale(0.6);
	}
	75% {
		transform: translateX(v-bind('getDistance(1)')) scale(0.6);
	}
	95% {
		transform: translateX(0rem) scale(1);
	}
}

@keyframes propagate5 {
	25% {
		transform: translateX(v-bind('getDistance(0)')) scale(0.75);
	}
	50% {
		transform: translateX(v-bind('getDistance(1)')) scale(0.6);
	}
	75% {
		transform: translateX(v-bind('getDistance(2)')) scale(0.5);
	}
	95% {
		transform: translateX(0rem) scale(1);
	}
}
</style>
