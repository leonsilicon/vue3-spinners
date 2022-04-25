<template>
	<div>
		<div
			class="circle"
			v-for="n in 3"
			:key="n"
			:style="getCircleStyle(n)"
		></div>
	</div>
</template>

<script setup lang="ts">
const {
	color = '#000000',
	size = 15,
	margin = '2px',
} = defineProps<{
	color: string;
	size: number | string;
	margin: string;
}>();

const getCircleStyle = (version: number) => ({
	animation: `beat 0.7s ${version % 2 ? `0s` : `0.35s`} infinite linear`,
});
</script>

<style scoped>
.circle {
	display: inline-block;
	background-color: v-bind(color);
	width: v-bind(size);
	height: v-bind(size);
	margin: v-bind(margin);
	border-radius: 100%;
	animation-fill-mode: both;
}

@keyframes beat {
	50% {
		transform: scale(0.75);
		opacity: 0.2;
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
}
</style>
