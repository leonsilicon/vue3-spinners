<script lang="ts">
export default { name: 'VueSpinnerScale' };
</script>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '../utils/props.js';
import { useSize } from '../utils/size.js';

const {
	color,
	height: heightProp,
	width: widthProp,
	radius: radiusProp,
	margin: marginProp,
} = defineProps(
	useSpinnerProps({
		height: '35px',
		width: '4px',
		radius: '2px',
		margin: '2px',
	})
);

const width = $(useSize(() => widthProp));
const height = $(useSize(() => heightProp));
const radius = $(useSize(() => radiusProp));
const margin = $(useSize(() => marginProp));

const getBarStyle = (version: number): CSSProperties => ({
	display: 'inline-block',
	width: width.string,
	height: height.string,
	margin: margin.string,
	borderRadius: radius.string,
	backgroundColor: color,
	animation: `vue-spinner-scale 1s cubic-bezier(0.2, 0.68, 0.18, 1.08) ${
		version * 0.1
	}s infinite normal both running`,
});
</script>

<template>
	<div>
		<div v-for="n in 5" :key="n" :style="getBarStyle(n + 1)"></div>
	</div>
</template>

<style>
@keyframes vue-spinner-scale {
	0% {
		transform: scaleY(1);
	}
	50% {
		transform: scaleY(0.4);
	}
	100% {
		transform: scaleY(1);
	}
}
</style>
