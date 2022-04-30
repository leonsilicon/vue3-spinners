import parseUnit from 'parse-unit';
import type { ComputedGetter } from 'vue';
import { computed } from 'vue';

export function useSize(sizeGetter: ComputedGetter<string | number>) {
	return computed(() => {
		const [value, unit] = parseUnit(sizeGetter());
		return {
			value,
			unit,
		};
	});
}
