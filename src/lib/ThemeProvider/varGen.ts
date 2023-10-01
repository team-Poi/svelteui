import type Color from '../types/Color';

export default function varGen(color: Color) {
	return `--color: var(--COLORS-${color}); --color-lighter: var(--COLORS-${color}_LIGHTER); --color-darker: var(--COLORS-${color}_DARKER);`;
}

export function varGenComponent(color: Color | 'NORMAL') {
	if (color == 'NORMAL')
		return `--color-lighter: var(--COMPONENT-BACKGROUND); --color: var(--COMPONENT-PLACEHOLDER); --color-darker: var(--COMPONENT-PLACEHOLDER_DARKER);`;
	return `--color: var(--COLORS-${color}); --color-lighter: var(--COLORS-${color}_LIGHTER); --color-darker: var(--COLORS-${color}_DARKER);`;
}
