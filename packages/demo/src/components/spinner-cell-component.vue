<script setup lang="ts">
import type { Component } from 'vue';

const { component } = defineProps<{
	component: Component;
	componentProps: Record<string, unknown>;
}>();
</script>

<template>
	<div class="column items-center gap-2 border-1 rounded-md p-5">
		<div>{{ component.name }}</div>
		<div class="p-8">
			<component :is="component" v-bind="componentProps"></component>
		</div>
	</div>
</template>
