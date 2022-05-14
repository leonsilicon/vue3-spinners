<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';
import { useSizeProp } from '~/utils/size.js';

const { color, size, margin } = defineProps(
	useSpinnerProps({ size: '15px', margin: '2px' })
);
const { string: sizeString } = $(useSizeProp(() => size));

const riseAmount = 30;

const getCircleStyle = (version: number) => ({
	display: 'inline-block',
	width: sizeString,
	height: sizeString,
	margin,
	borderRadius: '100%',
	backgroundColor: color,
	animationFillMode: 'both',
	animation: `${
		version % 2 === 0 ? 'even' : 'odd'
	} 1s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6)`,
});
</script>

<template>
	<div>
		<div v-for="n in 5" :key="n" :style="getCircleStyle(n)"></div>
	</div>
</template>

<style scoped>
@keyframes even {
	0% {
		transform: scale(1.1);
	}
	25% {
		transform: translateY(v-bind('riseAmount + "px"'));
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

@keyframes odd {
	0% {
		transform: scale(0.4);
	}
	25% {
		transform: translateY(v-bind('-riseAmount + "px"'));
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
