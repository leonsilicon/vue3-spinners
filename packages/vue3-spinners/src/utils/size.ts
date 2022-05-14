import parseUnit from 'parse-unit';
import type { ComputedGetter } from 'vue';
import { computed } from 'vue';

export function useSizeProp(sizeGetter: ComputedGetter<string | number>) {
	return computed(() => {
		const sizeProp = sizeGetter();
		let [value, unit] = parseUnit(String(sizeProp));
		unit ??= 'px';

		return {
			value,
			unit,
			string: `${value}${unit}`,
		};
	});
}
