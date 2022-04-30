<script setup lang="ts">
const {
	color = '#000000',
	size = '20px',
	margin = '2px',
} = defineProps<{
	color?: string;
	size?: string;
	margin?: string;
}>();

const getCircleStyle = (side: number) => ({
	left: `${side ? -28 : 25}px`,
});
</script>

<template>
	<div class="wrapper">
		<div v-for="n in 2" :key="n" :style="getCircleStyle(n)"></div>
	</div>
</template>

<style scoped>
@keyframes rotate {
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(180deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

.wrapper {
	position: relative;
	display: inline-block;
	animation: rotate 1s 0s infinite cubic-bezier(0.7, -0.13, 0.22, 0.86);
	animation-fill-mode: both;
	width: v-bind(size);
	height: v-bind(size);
	margin: v-bind(margin);
	border-radius: 100%;
	background-color: v-bind(color);
}

.circle {
	position: absolute;
	top: 0;
	opacity: 0.8;
	width: v-bind(size);
	height: v-bind(size);
	margin: v-bind(margin);
	border-radius: 100%;
	background-color: v-bind(color);
}
</style>
