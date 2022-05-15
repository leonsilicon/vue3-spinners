<script lang="ts">
export default { name: 'VueSpinnerPacman' };
</script>

<script setup lang="ts">
import range from 'just-range';
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '~/utils/props.js';
import { useSize } from '~/utils/size.js';

const {
	size: sizeProp,
	color,
	margin: marginProp,
} = defineProps(useSpinnerProps({ size: '25px', margin: '2px' }));

const size = $(useSize(() => sizeProp));
const margin = $(useSize(() => marginProp));

const s1 = (sizeString: string) => `${sizeString} solid transparent`;
const s2 = (sizeString: string, color: string) =>
	`${sizeString} solid ${color}`;

const getPacmanStyle = (version: number): CSSProperties => ({
	position: 'absolute',
	width: 0,
	height: 0,
	borderTop: version === 0 ? s1(size.string) : s2(size.string, color),
	borderLeft: s2(size.string, color),
	borderBottom: version === 0 ? s2(size.string, color) : s1(size.string),
	borderRight: s1(size.string),
	borderRadius: size.string,
	animation: `vue-spinner-pacman${version} ease-in-out 0.8s infinite normal both running`,
});

const getBallStyle = (version: number): CSSProperties => ({
	position: 'absolute',
	top: size.string,
	left: `${size.value * 4}${size.unit}`,
	width: `${size.value / 2.5}${size.unit}`,
	height: `${size.value / 2.5}${size.unit}`,
	margin: margin.string,
	borderRadius: '100%',
	backgroundColor: color,
	transform: `translate(0, ${-size.value / 4}${size.unit})`,
	animation: `vue-spinner-pacman-ball-animation 1s linear ${
		version * 0.25
	}s infinite normal both running`,
});

const wrapperStyle = $computed(
	(): CSSProperties => ({
		position: 'relative',
		width: size.string,
		height: size.string,
		fontSize: 0,
	})
);
</script>

<template>
	<div :style="wrapperStyle">
		<div :style="getPacmanStyle(0)"></div>
		<div :style="getPacmanStyle(1)"></div>
		<div v-for="n of range(2, 7)" :key="n" :style="getBallStyle(n)"></div>
	</div>
</template>

<style>
@keyframes vue-spinner-pacman0 {
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(-44deg);
	}
}

@keyframes vue-spinner-pacman1 {
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(44deg);
	}
}

@keyframes vue-spinner-pacman-ball-animation {
	75% {
		opacity: 0.7;
	}
	100% {
		transform: translate(
			calc(-4 * v-bind('size')),
			calc(-1 * v-bind('size') / 4)
		);
	}
}
</style>
