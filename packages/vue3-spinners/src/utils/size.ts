import parseUnit from 'parse-unit';
import type { ComputedGetter } from 'vue';
import { computed } from 'vue';

export function useSizeProp(sizeGetter: ComputedGetter<string | number>) {
	return computed(() => {
		const sizeProp = sizeGetter();
		const [value, unit] = parseUnit(String(sizeProp));

		return {
			value,
			unit: unit ?? 'px',
			size,
		};
	});
}
