<script setup lang="ts">
const { component, componentProps } = defineProps<{
	component: any;
	componentProps: Record<string, unknown>;
}>();
</script>

<template>
	<div class="column items-center gap-2">
		<div>{{ component.name }}</div>
		<component :is="component" v-bind="componentProps"></component>
	</div>
</template>
