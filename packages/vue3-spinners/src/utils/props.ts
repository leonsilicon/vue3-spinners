interface UseSpinnerPropsProps {
	margin?: string;
	size?: string | number;
	height?: string | number;
	width?: string | number;
	radius?: string | number;
}

export function useSpinnerProps<T extends UseSpinnerPropsProps>(props: T) {
	const defaultProps = {
		color: {
			type: String,
			default: '#000000',
		},
	};

	const optionalProps = {
		size: {
			type: [String, Number],
			default: props.size,
		},
		margin: { type: String, default: props.margin },
		height: { type: [String, Number], default: props.height },
		width: { type: [String, Number], default: props.width },
		radius: { type: [String, Number], default: props.radius },
	};

	const actualProps = { ...defaultProps };
	for (const prop of Object.keys(props)) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		actualProps[prop] = optionalProps[prop];
	}

	return actualProps as typeof defaultProps & {
		[K in keyof typeof optionalProps as T[K] extends NonNullable<
			UseSpinnerPropsProps[K]
		>
			? K
			: never]: typeof optionalProps[K];
	};
}
