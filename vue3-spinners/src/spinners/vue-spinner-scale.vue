<script setup lang="ts">
const {
	color = '#000000',
	height = '35px',
	width = '4px',
	radius = '2px',
	margin = '2px',
} = defineProps<{
	color?: string;
	height?: string;
	width?: string;
	radius?: string;
	margin?: string;
}>();

const getBarStyle = (version: number) => ({
	animation: `scale 1s cubic-bezier(0.2, 0.68, 0.18, 1.08) ${
		version * 0.1
	}s infinite normal both running`,
});
</script>

<template>
	<div>
		<div v-for="n in 5" :key="n" class="bar" :style="getBarStyle(n + 1)"></div>
	</div>
</template>

<style>
@keyframes scale {
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

.bar {
	display: inline-block;
	width: v-bind(width);
	height: v-bind(height);
	margin: v-bind(margin);
	border-radius: v-bind(radius);
	background-color: v-bind(color);
}
</style>
