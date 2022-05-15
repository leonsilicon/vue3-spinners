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
import SpinnerCellComponent from './components/spinner-cell-component.vue';
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
				<SpinnerCellComponent
					:component="quasarSpinnerComponent"
					:component-props="{ size: spinnerSize, color: spinnerColor }"
				/>
			</div>
			<SpinnerCell name="VueSpinnerBar">
				<VueSpinnerBar
					:width="spinnerSize"
					:color="spinnerColor"
					:height="spinnerSize"
				/>
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerBeat">
				<VueSpinnerBeat :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerBounce">
				<VueSpinnerBounce :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerCircle">
				<VueSpinnerCircle :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerClimbingBox">
				<VueSpinnerClimbingBox :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerClip">
				<VueSpinnerClip :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerDot">
				<VueSpinnerDot :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerFade">
				<VueSpinnerFade :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerGridPop">
				<VueSpinnerGridPop :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerMoon">
				<VueSpinnerMoon :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerPacman">
				<VueSpinnerPacman :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerPropagate">
				<VueSpinnerPropagate :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerPulse">
				<VueSpinnerPulse :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerRing">
				<VueSpinnerRing :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerRise">
				<VueSpinnerRise :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerRotate">
				<VueSpinnerRotate :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerScale">
				<VueSpinnerScale :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerSkew">
				<VueSpinnerSkew :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerSquare">
				<VueSpinnerSquare :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerSync">
				<VueSpinnerSync :color="spinnerColor" :size="spinnerSize" />
			</SpinnerCell>
		</div>
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
