<template>
	<div class="wrapper">
		<div v-for="n in 2" :key="n" class="lines" :style="getLinesStyle(n)"></div>
	</div>
</template>

<script setup lang="ts">
import { useSpinnerProps } from '~/utils/props.js';
import { calculateRgba } from '~/utils/rgba.js';

const { color, size } = defineProps(useSpinnerProps({ size: 50 }));

const thickness = (size: number) => size / 5;
const lat = (size: number) => (size - thickness(size)) / 2;
const offset = (size: number) => lat(size) - thickness(size);
const getColor = (color: string) => calculateRgba(color, 0.75);

const getLinesStyle = (version: number) => ({
	animation: `${
		version === 1 ? 'before' : 'after'
	} 2s infinite normal none running`,
});
</script>

<style scoped>
@keyframes before {
	0% {
		width: v-bind('thickness(size)');
		box-shadow: v-bind('lat(size)') v-bind('-offset(size)') v-bind('getColor(color)'), v-bind('-lat(size)') v-bind('offset(size) + "px"') v-bind('getColor(color)');
	}
  35% {
		width: v-bind(size);
		box-shadow: 0 v-bind('-offset(size) + "px"') v-bind('getColor(color)'), 0 v-bind('offset(size) + "px"') v-bind('getColor(color)');
	}
  70% {
		width: v-bind('thickness(size) + "px"');
		box-shadow: v-bind('-lat(size) + "px"') v-bind('-offset(size) + "px"') v-bind('getColor(color)', v-bind('lat(size) + "px"') v-bind('offset(size) + "px"') v-bind('getColor(color)');
	}
  100% {
		box-shadow: v-bind('lat(size) + "px"') v-bind('-offset(size) + "px"') v-bind('getColor(color)'), v-bind('-lat(size) + "px"') v-bind('offset(size) + "px"') v-bind('getColor(color)');
	}
}

@keyframes after {
  0% {
		height: v-bind('thickness(size) + "px"');
		box-shadow: v-bind('offset(size) + "px"') v-bind('lat(size) + "px"') v-bind('getColor(color)'), v-bind('-offset(size) + "px"') v-bind('-lat(size) + "px"') v-bind('getColor(color)');
	}

  35% {
		height: v-bind(size);
		box-shadow: v-bind('offset(size) + "px"') 0 v-bind('getColor(color)'), v-bind('-offset(size) + "px"') 0 v-bind('getColor(color)');
	}

  70% {
		height: v-bind('thickness(size) + "px"');
		box-shadow: v-bind('offset(size) + "px"') v-bind('-lat(size) + "px"') v-bind('getColor(color)'), v-bind('-offset(size) + "px"') v-bind('-lat(size) + "px"') v-bind('getColor(color)');
	}

  100% {
		box-shadow: v-bind('offset(size) + "px"') v-bind('lat(size) + "px"') v-bind('getColor(color)'), v-bind('-offset(size) + "px"') v-bind('-lat(size) + "px"') v-bind('getColor(color)');
	}
}

.wrapper {
  position: relative;
  width: v-size(size);
  height: v-bind(size);
  transform: rotate(165deg);
}

.lines {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: v-bind(size / 5);
  height: v-bind(size / 5);
  border-radius: v-bind(size / 10);
  transform: translate(-50%, -50%);
  content: '';
}
</style>
