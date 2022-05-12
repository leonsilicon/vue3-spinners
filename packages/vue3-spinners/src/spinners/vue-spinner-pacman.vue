<script style lang="ts">
import { useSpinnerProps } from '~/utils/props.js';

const { size: sizeProp, color, margin } = defineProps(
	useSpinnerProps({ size: '25px', margin: '2px' })
);

const size = $(useSizeProp(() => sizeProp));

const s1 = (size: string) => `${size} solid transparent`;
const s2 = (size: string, color: string) => `${size} solid ${color}`;

const getPacmanStyle = (version: number) => ({
	borderTop: version === 0 ? s1(size) : s2(size, color),
	borderLeft: s2(size, color),
	borderBottom: version === 0 ? s2(size, color) : s1(size),
	borderRight: s1(size),
	borderRadius: size,
	animation: `pacman${version} ease-in-out 0.8s infinite normal both running`,
});

const getBallStyle = (version: number) => ({
	animation: `ballAnim 1s linear ${
		version * 0.25
	}s infinite normal both running`,
});
</script>

<template>
	<div class="wrapper">
		<div class="pacman" :style="getPacmanStyle(0)"></div>
		<div class="pacman" :style="getPacmanStyle(1)"></div>
		<div
			v-for="n in 4"
			:key="n"
			class="ball"
			:style="getBallStyle(n + 2)"
		></div>
	</div>
</template>

<style scoped>
@keyframes pacman1 {
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(-44deg);
	}
}

@keyframes pacman2 {
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(44deg);
	}
}

.wrapper {
	position: relative;
	width: v-bind(size);
	height: v-bind(size);
	font-size: 0;
}

.pacman {
	position: absolute;
	width: 0;
	height: 0;
}

@keyframes ballAnim {
	75% {
		opacity: 0.7;
	}
	100% {
		transform: translate(v-bind('-4 * size'), v-bind('-size / 4'));
	}
}

.ball {
	position: absolute;
	top: v-bind(size);
	left: v-bind('size * 4');
	width: v-bind('size / 2.5');
	height: v-bind('size / 2.5');
	margin: v-bind(margin);
	border-radius: 100%;
	background-color: v-bind(color);
	transform: translate(0, v-bind('-size / 4'));
}
</style>
