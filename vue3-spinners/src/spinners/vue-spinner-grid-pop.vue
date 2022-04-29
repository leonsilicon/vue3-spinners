<template>
	<div class='wrapper'>
		<div v-for='n in 9' :key='n' :style='getCircleStyle(random(100))'></div>
	</div>
</template>

<script setup lang='ts'>
const random = top => Math.random() * top;

const { color = '#000000', size = 15, margin = '2px' } = defineProps<{
	color: string;
	size: number;
	margin: string;
}>();

const wrapperWidth = $computed(() => parseFloat(size) * 3 + parseFloat(margin) * 6);

const getCircleStyle = (rand: number) => ({
	animation: `@grid ${rand / 100 + 0.6}s ${rand / 100 - 0.2}s infinite ease`
});

<style scoped>
@keyframes {
  0% {transform: scale(1)}
  50% {transform: scale(0.5); opacity: 0.7}
  100% {transform: scale(1);opacity: 1}
}

.wrapper {
	width: v-bind(wrapperWidth);
	font-size: 0;
}

.circle {
  display: inline-block;
  background-color: v-bind(color);
  width: v-bind(size);
  height: v-bind(size);
  margin: v-bind(margin);
  border-radius: 100%;
  animation-fill-mode: both;
  animation: ${({ rand }) => `${grid} ${rand / 100 + 0.6}s ${rand / 100 - 0.2}s infinite ease`};
}
</style>
