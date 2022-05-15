<script setup lang="ts">
import {
	VueSpinner,
	VueSpinnerAudio,
	VueSpinnerBall,
	VueSpinnerBar,
	VueSpinnerBars,
	VueSpinnerBeat,
	VueSpinnerBounce,
	VueSpinnerBox,
	VueSpinnerCircle,
	VueSpinnerClimbingBox,
	VueSpinnerClip,
	VueSpinnerClock,
	VueSpinnerComment,
	VueSpinnerCore,
	VueSpinnerDot,
	VueSpinnerDots,
	VueSpinnerFacebook,
	VueSpinnerFade,
	VueSpinnerGears,
	VueSpinnerGrid,
	VueSpinnerGridPop,
	VueSpinnerHearts,
	VueSpinnerHourglass,
	VueSpinnerInfinity,
	VueSpinnerIos,
	VueSpinnerMoon,
	VueSpinnerOrbit,
	VueSpinnerOval,
	VueSpinnerPacman,
	VueSpinnerPie,
	VueSpinnerPropagate,
	VueSpinnerPuff,
	VueSpinnerPulse,
	VueSpinnerRadio,
	VueSpinnerRing,
	VueSpinnerRings,
	VueSpinnerRise,
	VueSpinnerRotate,
	VueSpinnerScale,
	VueSpinnerSkew,
	VueSpinnerSquare,
	VueSpinnerSync,
	VueSpinnerTail,
} from 'vue3-spinners';

import SpinnerCell from './components/spinner-cell.vue';
import SpinnerCellComponent from './components/spinner-cell-component.vue';

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
			<template
				v-for="quasarSpinnerComponent of quasarSpinners"
				:key="quasarSpinnerComponent.name"
			>
				<SpinnerCellComponent
					:component="quasarSpinnerComponent"
					:component-props="{ size: spinnerSize, color: spinnerColor }"
				/>
			</template>
			<SpinnerCell name="VueSpinnerBar">
				<VueSpinnerBar :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerBeat">
				<VueSpinnerBeat :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerBounce">
				<VueSpinnerBounce :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerCircle">
				<VueSpinnerCircle :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerClimbingBox">
				<VueSpinnerClimbingBox :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerClip">
				<VueSpinnerClip :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerDot">
				<VueSpinnerDot :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerFade">
				<VueSpinnerFade :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerGridPop">
				<VueSpinnerGridPop :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerMoon">
				<VueSpinnerMoon :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerPacman">
				<VueSpinnerPacman :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerPropagate">
				<VueSpinnerPropagate :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerPulse">
				<VueSpinnerPulse :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerRing">
				<VueSpinnerRing :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerRise">
				<VueSpinnerRise :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerRotate">
				<VueSpinnerRotate :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerScale">
				<VueSpinnerScale :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerSkew">
				<VueSpinnerSkew :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerSquare">
				<VueSpinnerSquare :color="spinnerColor" />
			</SpinnerCell>
			<SpinnerCell name="VueSpinnerSync">
				<VueSpinnerSync :color="spinnerColor" />
			</SpinnerCell>
		</div>
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
