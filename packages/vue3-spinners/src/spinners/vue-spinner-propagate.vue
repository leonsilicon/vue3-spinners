<script lang="ts">
export default { name: 'VueSpinnerPropagate' };
</script>

<script setup lang="ts">
import range from 'just-range';
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '~/utils/props.js';
import { useSize } from '~/utils/size.js';

const { color, size: sizeProp } = defineProps(
	useSpinnerProps({
		size: '15px',
	})
);

const size = $(useSize(() => sizeProp));

// 1.5 4.5 7.5
const distance = [1, 3, 5];

const getCircleStyle = (version: number): CSSProperties => ({
	position: 'absolute',
	width: size.string,
	height: size.string,
	borderRadius: '50%',
	background: color,
	fontSize: `${size.value / 3}${size.unit}`,
	animationFillMode: 'forwards',
	animation: `vue-spinner-propagate${version} 1.5s infinite`,
});

const getDistance = (index: number, direction: 'left' | 'right') =>
	`${distance[index]! * (direction === 'left' ? -1 : 1)}rem`;

const wrapperStyle = $computed(
	(): CSSProperties => ({
		position: 'relative',
	})
);
</script>

<template>
	<div :style="wrapperStyle">
		<div v-for="n in range(0, 6)" :key="n" :style="getCircleStyle(n)"></div>
	</div>
</template>

<style>
@keyframes vue-spinner-propagate0 {
	25% {
		transform: translateX(v-bind('getDistance(0, "left")')) scale(0.75);
	}
	50% {
		transform: translateX(v-bind('getDistance(1, "left")')) scale(0.6);
	}
	75% {
		transform: translateX(v-bind('getDistance(2, "left")')) scale(0.5);
	}
	95% {
		transform: translateX(0rem) scale(1);
	}
}

@keyframes vue-spinner-propagate1 {
	25% {
		transform: translateX(v-bind('getDistance(0, "left")')) scale(0.75);
	}
	50% {
		transform: translateX(v-bind('getDistance(1, "left")')) scale(0.6);
	}
	75% {
		transform: translateX(v-bind('getDistance(1, "left")')) scale(0.6);
	}
	95% {
		transform: translateX(0rem) scale(1);
	}
}

@keyframes vue-spinner-propagate2 {
	25% {
		transform: translateX(v-bind('getDistance(0, "left")')) scale(0.75);
	}
	75% {
		transform: translateX(v-bind('getDistance(0, "left")')) scale(0.75);
	}
	95% {
		transform: translateX(0rem) scale(1);
	}
}

@keyframes vue-spinner-propagate3 {
	25% {
		transform: translateX(v-bind('getDistance(0, "right")')) scale(0.75);
	}
	75% {
		transform: translateX(v-bind('getDistance(0, "right")')) scale(0.75);
	}
	95% {
		transform: translateX(0rem) scale(1);
	}
}

@keyframes vue-spinner-propagate4 {
	25% {
		transform: translateX(v-bind('getDistance(0, "right")')) scale(0.75);
	}
	50% {
		transform: translateX(v-bind('getDistance(1, "right")')) scale(0.6);
	}
	75% {
		transform: translateX(v-bind('getDistance(1, "right")')) scale(0.6);
	}
	95% {
		transform: translateX(0rem) scale(1);
	}
}

@keyframes vue-spinner-propagate5 {
	25% {
		transform: translateX(v-bind('getDistance(0, "right")')) scale(0.75);
	}
	50% {
		transform: translateX(v-bind('getDistance(1, "right")')) scale(0.6);
	}
	75% {
		transform: translateX(v-bind('getDistance(2, "right")')) scale(0.5);
	}
	95% {
		transform: translateX(0rem) scale(1);
	}
}
</style>
