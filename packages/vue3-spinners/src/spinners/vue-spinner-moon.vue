<script lang="ts">
export default { name: 'VueSpinnerMoon' };
</script>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

import { useSpinnerProps } from '~/utils/props.js';
import { useSizeProp } from '~/utils/size.js';

const { color, size: sizeProp } = defineProps(useSpinnerProps({ size: 60 }));
const {
	value: sizeValue,
	unit: sizeUnit,
	string: sizeString,
} = $(useSizeProp(() => sizeProp));

const moonSize = (size: number) => size / 7;

const wrapperStyle = $computed(
	(): CSSProperties => ({
		position: 'relative',
		width: `${sizeValue + moonSize(sizeValue) * 2}${sizeUnit}`,
		height: `${sizeValue + moonSize(sizeValue) * 2}${sizeUnit}`,
		animation: 'moon 0.6s linear 0s infinite normal forwards running',
		boxSizing: 'content-box',
	})
);

const moonStyle = $computed(
	(): CSSProperties => ({
		position: 'absolute',
		top: `${sizeValue / 2 - moonSize(sizeValue)}${sizeUnit}`,
		backgroundColor: color,
		opacity: 0.8,
		animation: 'moon 0.6s linear 0s infinite normal forwards running',
		boxSizing: 'content-box',
		width: sizeString,
		height: sizeString,
		borderRadius: '100%',
	})
);

const ringStyle = $computed(
	(): CSSProperties => ({
		borderWidth: `${moonSize(sizeValue)}${sizeUnit}`,
		borderStyle: 'solid',
		borderColor: color,
		borderImage: 'initial',
		opacity: '0.1',
		boxSizing: 'content-box',
		width: sizeString,
		height: sizeString,
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
@keyframes moon {
	100% {
		transform: rotate(360deg);
	}
}
</style>
