<script lang="ts">
export default { name: 'VueSpinnerMoon' };
</script>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '~/utils/props.js';
import { useSize } from '~/utils/size.js';

const { color, size: sizeProp } = defineProps(useSpinnerProps({ size: 60 }));
const size = $(useSize(() => sizeProp));

const moonSize = (size: number) => size / 7;

const wrapperStyle = $computed(
	(): CSSProperties => ({
		position: 'relative',
		width: `${size.value + moonSize(size.value) * 2}${size.unit}`,
		height: `${size.value + moonSize(size.value) * 2}${size.unit}`,
		animation:
			'vue-spinner-moon 0.6s linear 0s infinite normal forwards running',
		boxSizing: 'content-box',
	})
);

const moonStyle = $computed(
	(): CSSProperties => ({
		position: 'absolute',
		top: `${size.value / 2 - moonSize(size.value)}${size.unit}`,
		backgroundColor: color,
		opacity: '0.8',
		animation:
			'vue-spinner-moon 0.6s linear 0s infinite normal forwards running',
		boxSizing: 'content-box',
		width: `${moonSize(size.value)}${size.unit}`,
		height: `${moonSize(size.value)}${size.unit}`,
		borderRadius: '100%',
	})
);

const ringStyle = $computed(
	(): CSSProperties => ({
		borderWidth: `${moonSize(size.value)}${size.unit}`,
		borderStyle: 'solid',
		borderColor: color,
		borderImage: 'initial',
		opacity: '0.1',
		boxSizing: 'content-box',
		width: size.string,
		height: size.string,
		borderRadius: '100%',
	})
);
</script>

<template>
	<div :style="wrapperStyle">
		<div :style="moonStyle"></div>
		<div :style="ringStyle"></div>
	</div>
</template>

<style>
@keyframes vue-spinner-moon {
	100% {
		transform: rotate(360deg);
	}
}
</style>
