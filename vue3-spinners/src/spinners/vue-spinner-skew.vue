<script setup lang="ts">
const { color = '#000000', size = '20px' } = defineProps<{
	color?: string;
	size?: string;
}>();
</script>

<template>
	<div class="square"></div>
</template>

<style scoped>
@keyframes skew {
	25% {
		transform: perspective(100px) rotateX(180deg) rotateY(0);
	}
	50% {
		transform: perspective(100px) rotateX(180deg) rotateY(180deg);
	}
	75% {
		transform: perspective(100px) rotateX(0) rotateY(180deg);
	}
	100% {
		transform: perspective(100px) rotateX(0) rotateY(0);
	}
}

.triangle {
	display: inline-block;
	width: 0;
	height: 0;
	border-left: v-bind(size) solid transparent;
	border-right: v-bind(size) solid transparent;
	border-bottom: v-bind(size) solid v-bind(color);
	animation: skew 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
	animation-fill-mode: both;
}
</style>
