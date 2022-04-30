<script setup lang="ts">
const { color = '#000000', size = '60px' } = defineProps<{
	color?: string;
	size?: string;
}>();

const getRingStyle = (version: number) => ({
	animation: `${version === 1 ? 'right' : 'left'} 2s 0s infinite linear`,
});
</script>

<template>
	<div class="wrapper">
		<div v-for="n in 2" :key="n" class="ring" :style="getRingStyle(n)"></div>
	</div>
</template>

<style scoped>
@keyframes right {
	0% {
		transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
	}
}

@keyframes left {
	0% {
		transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
	}
}

.wrapper {
	position: relative;
	width: v-bind(size);
	height: v-bind(size);
}

.ring {
	position: absolute;
	top: 0;
	left: 0;
	width: v-bind(size);
	height: v-bind(size);
	border: v-bind('size / 10') solid v-bind(color);
	border-radius: 100%;
	opacity: 0.4;
	animation-fill-mode: forwards;
	perspective: 800px;
}
</style>
