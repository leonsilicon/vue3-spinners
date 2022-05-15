<script lang="ts">
export default { name: 'VueSpinnerRise' };
</script>

<script setup lang="ts">
import range from 'just-range';

import { useSpinnerProps } from '~/utils/props.js';
import { useSize } from '~/utils/size.js';

const {
	color,
	size: sizeProp,
	margin: marginProp,
} = defineProps(useSpinnerProps({ size: '15px', margin: '2px' }));

const size = $(useSize(() => sizeProp));
const margin = $(useSize(() => marginProp));

const riseAmount = 30;

const getCircleStyle = (version: number) => ({
	display: 'inline-block',
	width: size.string,
	height: size.string,
	margin: margin.string,
	borderRadius: '100%',
	backgroundColor: color,
	animationFillMode: 'both',
	animation: `${
		version % 2 === 0 ? 'vue-spinner-even' : 'vue-spinner-odd'
	} 1s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6)`,
});
</script>

<template>
	<div>
		<div v-for="n in range(1, 6)" :key="n" :style="getCircleStyle(n)"></div>
	</div>
</template>

<style>
@keyframes vue-spinner-even {
	0% {
		transform: scale(1.1);
	}
	25% {
		transform: translateY(v-bind('-riseAmount + "px"'));
	}
	50% {
		transform: scale(0.4);
	}
	75% {
		transform: translateY(v-bind('riseAmount + "px"'));
	}
	100% {
		transform: translateY(0) scale(1);
	}
}

@keyframes vue-spinner-odd {
	0% {
		transform: scale(0.4);
	}
	25% {
		transform: translateY(v-bind('riseAmount + "px"'));
	}
	50% {
		transform: scale(1.1);
	}
	75% {
		transform: translateY(v-bind('-riseAmount + "px"'));
	}
	100% {
		transform: translateY(0) scale(0.75);
	}
}
</style>
