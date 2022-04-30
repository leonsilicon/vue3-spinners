<script setup lang="ts">
const { color = '#000000', size = '15px' } = defineProps<{
	color?: string;
	size?: string;
}>();

// 1.5 4.5 7.5
const distance = [1, 3, 5];

const getCircleStyle = (version: number) => ({
	animation: `propagate${version} 1.5s infinite`,
});

const getDistance = (index: number) => `${distance[index]!}rem`;
</script>

<template>
	<div class="wrapper">
		<div
			v-for="n in 6"
			:key="n"
			class="circle"
			:style="getCircleStyle(n)"
		></div>
	</div>
</template>

<style scoped>
@keyframes propagate0 {
	25% {
		transform: translateX(v-bind('-getDistance(0)')) scale(0.75);
	}
	50% {
		transform: translateX(v-bind('-getDistance(1)')) scale(0.6);
	}
	75% {
		transform: translateX(v-bind('-getDistance(2)')) scale(0.5);
	}
	95% {
		transform: translateX(0rem) scale(1);
	}
}

@keyframes propagate1 {
	25% {
		transform: translateX(v-bind('-getDistance(0)')) scale(0.75);
	}
	50% {
		transform: translateX(v-bind('getDistance(1)')) scale(0.6);
	}
	75% {
		transform: translateX(v-bind('getDistance(1)')) scale(0.6);
	}
	95% {
		transform: translateX(0rem) scale(1);
	}
}

@keyframes propagate2 {
	25% {
		transform: translateX(v-bind('-getDistance(0)')) scale(0.75);
	}
	75% {
		transform: translateX(v-bind('-getDistance(0)')) scale(0.75);
	}
	95% {
		transform: translateX(0rem) scale(1);
	}
}

@keyframes propagate3 {
	25% {
		transform: translateX(v-bind('getDistance(0)')) scale(0.75);
	}
	75% {
		transform: translateX(v-bind('getDistance(0)')) scale(0.75);
	}
	95% {
		transform: translateX(0rem) scale(1);
	}
}

@keyframes propagate4 {
	25% {
		transform: translateX(v-bind('getDistance(0)')) scale(0.75);
	}
	50% {
		transform: translateX(v-bind('getDistance(1)')) scale(0.6);
	}
	75% {
		transform: translateX(v-bind('getDistance(1)')) scale(0.6);
	}
	95% {
		transform: translateX(0rem) scale(1);
	}
}

@keyframes propagate5 {
	25% {
		transform: translateX(v-bind('getDistance(0)')) scale(0.75);
	}
	50% {
		transform: translateX(v-bind('getDistance(1)')) scale(0.6);
	}
	75% {
		transform: translateX(v-bind('getDistance(2)')) scale(0.5);
	}
	95% {
		transform: translateX(0rem) scale(1);
	}
}

.wrapper {
	position: relative;
}

.circle {
	position: absolute;
	width: v-bind(size);
	height: v-bind(size);
	border-radius: 50%;
	background: v-bind(color);
	font-size: v-bind('size / 3');
	animation-fill-mode: forwards;
}
</style>
