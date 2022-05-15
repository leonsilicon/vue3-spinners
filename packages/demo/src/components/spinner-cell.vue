<script setup lang="ts">
const { name } = defineProps<{
	name: string;
}>();
</script>

<template>
	<div class="column items-center gap-2">
		<div>{{ name }}</div>
		<slot></slot>
	</div>
</template>
