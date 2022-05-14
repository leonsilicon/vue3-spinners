<script setup lang="ts">
import zip from 'just-zip-it';

import { useSpinnerProps } from '~/utils/props.js';
import { characterRange, range } from '~/utils/rgba.js';

const { color, height, width, margin, radius } = defineProps(
	useSpinnerProps({
		color: '#000000',
		height: '15px',
		width: '5px',
		margin: '2px',
		radius: '2px',
	})
);

const rad = 20;
const quarter = rad / 2 + rad / 5.5;

const rows = zip(characterRange(`a`, `i`).split(``), range(9, 1));

const wrapperStyle = {
	top: `${rad}px`,
	left: `${rad}px`,
	width: `${rad * 3}px`,
	height: `${rad * 3}px`,
};

const styles = {
	a: {
		top: `${rad}px`,
		left: 0,
	},
	b: {
		top: `${quarter}px`,
		left: `${quarter}px`,
		transform: 'rotate(-45deg)',
	},
	c: {
		top: 0,
		left: `${rad}px`,
		transform: 'rotate(90deg)',
	},
	d: {
		top: `${-quarter}px`,
		left: `${quarter}px`,
		transform: 'rotate(45deg)',
	},
	e: {
		top: `${-rad}px`,
		left: 0,
	},
	f: {
		top: `${-quarter}px`,
		left: `${-quarter}px`,
		transform: 'rotate(-45deg)',
	},
	g: {
		top: 0,
		left: `${-rad}px`,
		transform: 'rotate(90deg)',
	},
	h: {
		top: `${quarter}px`,
		left: `${-quarter}px`,
		transform: 'rotate(45deg)',
	},
};

const getBarStyle = (variation: string, version: number) => ({
	animation: `fade 1.2s ${version * 0.12}s infinite ease-in-out`,
	...styles[variation as keyof typeof styles],
});
</script>

<template>
	<div class="wrapper" :style="wrapperStyle">
		<div
			v-for="(row, i) in rows"
			:key="i"
			class="bar"
			:style="getBarStyle(row, i)"
		></div>
	</div>
</template>

<style>
@keyframes fade {
	50% {
		opacity: 0.3
	}

	100% {
		opacity: 1
	}
}

.wrapper {
	position: relative;
	font-size: 0;
}

.bar {
	position: absolute;
	width: v-bind(width);
	height: v-bind(height);
	margin: v-bind(margin);
	background-color: v-bind(color);
	border-radius: v-bind(radius) transition: 2s;
	animation-fill-mode: 'both';
}
</style>