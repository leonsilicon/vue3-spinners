interface UseSpinnerPropsProps {
	margin?: string;
	size?: string | number;
	height?: string | number;
	width?: string | number;
}

export function useSpinnerProps<T extends UseSpinnerPropsProps>({
	size,
	margin,
	height,
	width,
}: T) {
	const defaultProps = {
		color: {
			type: String,
			default: '#000000',
		},
	};

	const optionalProps = {
		size: {
			type: [String, Number],
			default: size,
		},
		margin: { type: String, default: margin },
		height: { type: [String, Number], default: height },
		width: { type: [String, Number], default: width },
	};

	return { ...defaultProps, ...optionalProps } as typeof defaultProps & {
		[K in keyof typeof optionalProps as T[K] extends NonNullable<
			UseSpinnerPropsProps[K]
		>
			? K
			: never]: typeof optionalProps[K];
	};
}
