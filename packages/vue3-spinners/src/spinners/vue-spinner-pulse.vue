<script lang="ts">
export default { name: 'VueSpinnerPulse' };
</script>

<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';
import { useSize } from '~/utils/size.js';

const {
	color,
	size: sizeProp,
	margin: marginProp,
} = defineProps(useSpinnerProps({ size: '15px', margin: '2px' }));

const size = $(useSize(() => sizeProp));
const margin = $(useSize(() => marginProp));

const getCircleStyle = (version: number) => ({
	display: 'inline-block',
	width: size.string,
	height: size.string,
	margin: margin.string,
	borderRadius: '100%',
	backgroundColor: color,
	animationFillMode: 'both',
	animation: `vue-spinner-pulse 0.75s ${
		version * 0.12
	}s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)`,
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
@keyframes vue-spinner-pulse {
	0% {
		transform: scale(1);
		opacity: 1;
	}
	45% {
		transform: scale(0.1);
		opacity: 0.7;
	}
	80% {
		transform: scale(1);
		opacity: 1;
	}
}
</style>
