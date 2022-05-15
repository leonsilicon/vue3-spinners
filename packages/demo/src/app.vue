<script setup lang="ts">
import {
	VueSpinner,
	VueSpinnerAudio,
	VueSpinnerBall,
	VueSpinnerBars,
	VueSpinnerBar,
	VueSpinnerBeat,
	VueSpinnerBounce,
	VueSpinnerCircle,
	VueSpinnerClimbingBox,
	VueSpinnerClip,
	VueSpinnerDot,
	VueSpinnerFade,
	VueSpinnerGridPop,
	VueSpinnerMoon,
	VueSpinnerPacman,
	VueSpinnerPropagate,
	VueSpinnerPulse,
	VueSpinnerRing,
	VueSpinnerRise,
	VueSpinnerRotate,
	VueSpinnerScale,
	VueSpinnerSkew,
	VueSpinnerSquare,
	VueSpinnerSync,
	VueSpinnerBox,
	VueSpinnerClock,
	VueSpinnerComment,
	VueSpinnerCore,
	VueSpinnerDots,
	VueSpinnerFacebook,
	VueSpinnerGears,
	VueSpinnerGrid,
	VueSpinnerHearts,
	VueSpinnerHourglass,
	VueSpinnerInfinity,
	VueSpinnerIos,
	VueSpinnerOrbit,
	VueSpinnerOval,
	VueSpinnerPie,
	VueSpinnerPuff,
	VueSpinnerRadio,
	VueSpinnerRings,
	VueSpinnerTail,
} from 'vue3-spinners';
import SpinnerCell from './components/spinner-cell.vue';

const quasarSpinners = [
	VueSpinner,
	VueSpinnerAudio,
	VueSpinnerBall,
	VueSpinnerBars,
	VueSpinnerBox,
	VueSpinnerClock,
	VueSpinnerComment,
	VueSpinnerCore,
	VueSpinnerDots,
	VueSpinnerFacebook,
	VueSpinnerGears,
	VueSpinnerGrid,
	VueSpinnerHearts,
	VueSpinnerHourglass,
	VueSpinnerInfinity,
	VueSpinnerIos,
	VueSpinnerOrbit,
	VueSpinnerOval,
	VueSpinnerPie,
	VueSpinnerPuff,
	VueSpinnerRadio,
	VueSpinnerRings,
	VueSpinnerTail,
];

const spinnerSize = $ref(40);
const spinnerColor = $ref('black');
</script>

<template>
	<div class="p-8 column">
		<div class="text-3xl font-bold text-center mb-3">vue3-spinners</div>
		<div class="grid grid-cols-[1fr,max-content] gap-1 self-center">
			<div class="font-bold">Change the spinner's color:</div>
			<input v-model="spinnerColor" type="color" />
			<div class="font-bold">Change the spinner's size:</div>
			<input
				v-model.number="spinnerSize"
				class="border-1 rounded-md w-12 pl-1"
				type="number"
			/>
		</div>
		<div class="grid grid-cols-4 gap-5 mt-4">
			<div v-for="quasarSpinnerComponent of quasarSpinners">
				<SpinnerCell
					:component="quasarSpinnerComponent"
					:component-props="{ size: spinnerSize, color: spinnerColor }"
				/>
			</div>
			<VueSpinnerBar />
			<VueSpinnerBeat />
			<VueSpinnerBounce />
			<VueSpinnerCircle />
			<VueSpinnerClimbingBox />
			<VueSpinnerClip />
			<VueSpinnerDot />
			<VueSpinnerFade />
			<VueSpinnerGridPop />
			<VueSpinnerMoon />
			<VueSpinnerPacman />
			<VueSpinnerPropagate />
			<VueSpinnerPulse />
			<VueSpinnerRing />
			<VueSpinnerRise />
			<VueSpinnerRotate />
			<VueSpinnerScale />
			<VueSpinnerSkew />
			<VueSpinnerSquare />
			<VueSpinnerSync />
		</div>
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
