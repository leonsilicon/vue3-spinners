<script lang="ts">
export default { name: 'VueSpinnerBar' };
</script>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '~/utils/props.js';
import { calculateRgba } from '~/utils/rgba.js';
import { useSize } from '~/utils/size.js';

const {
	color,
	width: widthProp,
	height: heightProp,
} = defineProps(useSpinnerProps({ height: 4, width: 100 }));

const width = $(useSize(() => widthProp));
const height = $(useSize(() => heightProp));

const wrapperStyle = $computed(
	(): CSSProperties => ({
		position: 'relative',
		width: width.string,
		height: height.string,
		overflow: 'hidden',
		backgroundColor: calculateRgba(color, 0.2),
		backgroundClip: 'padding-box',
	})
);

const getBarStyle = (version: number): CSSProperties => ({
	position: 'absolute',
	height: height.string,
	overflow: 'hidden',
	backgroundColor: color,
	backgroundClip: 'padding-box',
	display: 'block',
	borderRadius: '2px',
	willChange: 'left, right',
	animationFillMode: 'forwards',
	animation: ` ${
		version === 1 ? 'vue-spinner-long' : 'vue-spinner-short'
	} 2.1s ${version === 2 ? `1.15s` : ``} ${
		version === 1
			? `cubic-bezier(0.65, 0.815, 0.735, 0.395)`
			: `cubic-bezier(0.165, 0.84, 0.44, 1)`
	} infinite`,
});
</script>

<template>
	<div :style="wrapperStyle">
		<div v-for="n in 2" :key="n" :style="getBarStyle(n)"></div>
	</div>
</template>

<style>
@keyframes vue-spinner-long {
	0% {
		left: -35%;
		right: 100%;
	}
	60% {
		left: 100%;
		right: -90%;
	}
	100% {
		left: 100%;
		right: -90%;
	}
}

@keyframes vue-spinner-short {
	0% {
		left: -200%;
		right: 100%;
	}
	60% {
		left: 107%;
		right: -8%;
	}
	100% {
		left: 107%;
		right: -8%;
	}
}
</style>
