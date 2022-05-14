<script setup lang="ts">
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '~/utils/props.js';
import { useSizeProp } from '~/utils/size.js';

const {
	size: sizeProp,
	color,
	margin,
} = defineProps(useSpinnerProps({ size: '25px', margin: '2px' }));

const {
	value: sizeValue,
	unit: sizeUnit,
	string: sizeString,
} = $(useSizeProp(() => sizeProp));

const s1 = (size: string) => `${size} solid transparent`;
const s2 = (size: string, color: string) => `${size} solid ${color}`;

const getPacmanStyle = (version: number): CSSProperties => ({
	position: 'absolute',
	width: 0,
	height: 0,
	borderTop: version === 0 ? s1(sizeString) : s2(sizeString, color),
	borderLeft: s2(sizeString, color),
	borderBottom: version === 0 ? s2(sizeString, color) : s1(sizeString),
	borderRight: s1(sizeString),
	borderRadius: sizeString,
	animation: `pacman${version} ease-in-out 0.8s infinite normal both running`,
});

const getBallStyle = (version: number): CSSProperties => ({
	position: 'absolute',
	top: sizeString,
	left: `${sizeValue * 4}${sizeUnit}`,
	width: `${sizeValue / 2.5}${sizeUnit}`,
	height: `${sizeValue / 2.5}${sizeUnit}`,
	margin,
	borderRadius: '100%',
	backgroundColor: color,
	transform: `translate(0, ${-sizeValue / 4}${sizeUnit})`,
	animation: `ballAnim 1s linear ${
		version * 0.25
	}s infinite normal both running`,
});

const wrapperStyle = $computed(
	(): CSSProperties => ({
		position: 'relative',
		width: sizeString,
		height: sizeString,
		fontSize: 0,
	})
);
</script>

<template>
	<div :style="wrapperStyle">
		<div :style="getPacmanStyle(0)"></div>
		<div :style="getPacmanStyle(1)"></div>
		<div v-for="n in 4" :key="n" :style="getBallStyle(n + 2)"></div>
	</div>
</template>

<style>
@keyframes pacman1 {
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(-44deg);
	}
}

@keyframes pacman2 {
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(44deg);
	}
}

@keyframes ballAnim {
	75% {
		opacity: 0.7;
	}
	100% {
		transform: translate(calc(-4 * v-bind('size')), calc(-1 * v-bind('size') / 4));
	}
}
</style>
