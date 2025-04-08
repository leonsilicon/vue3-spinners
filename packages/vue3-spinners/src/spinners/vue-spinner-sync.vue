<script lang="ts">
export default { name: 'VueSpinnerBounce' };
</script>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '../utils/props.js';
import { useSize } from '../utils/size.js';

const {
	color,
	size: sizeProp,
	margin: marginProp,
} = defineProps(useSpinnerProps({ size: '15px', margin: '2px' }));

const size = $(useSize(() => sizeProp));
const margin = $(useSize(() => marginProp));

const getCircleStyle = (version: number): CSSProperties => ({
	display: 'inline-block',
	width: size.string,
	height: size.string,
	margin: margin.string,
	borderRadius: '100%',
	backgroundColor: color,
	boxSizing: 'content-box',
	animation: `vue-spinner-sync 0.6s ease-in-out ${
		version * 0.07
	}s infinite normal both running`,
});
</script>

<template>
	<div>
		<div
			v-for="n in 3"
			:key="n"
			class="circle"
			:style="getCircleStyle(n + 1)"
		></div>
	</div>
</template>

<style>
@keyframes vue-spinner-sync {
	33% {
		transform: translateY(10px);
	}
	66% {
		transform: translateY(-10px);
	}
	100% {
		transform: translateY(0);
	}
}
</style>
