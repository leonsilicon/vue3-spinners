<script setup lang="ts">
const { name } = defineProps<{
	name: string;
}>();
</script>

<template>
	<div class="column items-center gap-2 border-1 rounded-md p-5">
		<div>{{ name }}</div>
		<div class="p-8">
			<slot></slot>
		</div>
	</div>
</template>
