<script lang="ts">
export default { name: 'VueSpinnerFade' };
</script>

<script setup lang="ts">
import zip from 'just-zip-it';
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '~/utils/props.js';
import { characterRange, range } from '~/utils/rgba.js';
import { useSize } from '~/utils/size.js';

const {
	color,
	height: heightProp,
	width: widthProp,
	margin: marginProp,
	radius: radiusProp,
} = defineProps(
	useSpinnerProps({
		color: '#000000',
		height: '15px',
		width: '5px',
		margin: '2px',
		radius: '2px',
	})
);

const height = $(useSize(() => heightProp));
const width = $(useSize(() => widthProp));
const margin = $(useSize(() => marginProp));
const radius = $(useSize(() => radiusProp));

const rad = 20;
const quarter = rad / 2 + rad / 5.5;

const rows = zip(characterRange(`a`, `i`).split(``), range(9, 1));

const wrapperStyle: CSSProperties = {
	top: `${rad}px`,
	left: `${rad}px`,
	width: `${rad * 3}px`,
	height: `${rad * 3}px`,
	position: 'relative',
	fontSize: 0,
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

const getBarStyle = (variation: string, version: number): CSSProperties => ({
	position: 'absolute',
	width: width.string,
	height: height.string,
	margin: margin.string,
	backgroundColor: color,
	borderRadius: radius.string,
	transition: '2s',
	animationFillMode: 'both',
	animation: `vue-spinner-fade 1.2s ${version * 0.12}s infinite ease-in-out`,
	...styles[variation as keyof typeof styles],
});
</script>

<template>
	<div :style="wrapperStyle">
		<div
			v-for="(row, i) in rows"
			:key="i"
			:style="getBarStyle(row[0], i)"
		></div>
	</div>
</template>

<style>
@keyframes vue-spinner-fade {
	50% {
		opacity: 0.3;
	}

	100% {
		opacity: 1;
	}
}
</style>
