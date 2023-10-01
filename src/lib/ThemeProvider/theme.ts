const LIGHT_THEME = {
	// BACKGROUND: '#161616',
	BACKGROUND: '#F2F2F2',
	LAYER_BACKGROUND: '#FFFFFF',
	OPACITY: {
		LIGHTER: '0.2'
	},
	GAP: {
		MAIN: '1.75rem',
		HALF: 'calc(var(--GAP-MAIN) / 2)',
		THIN: 'calc(var(--GAP-MAIN) / 4)'
	},
	COLORS: {
		// TEXT: '#FDFDFD',
		TEXT: '#000000',

		PRIMARY: '#338EF7',
		PRIMARY_LIGHTER: 'rgba(51, 142, 247, var(--OPACITY-LIGHTER))',
		PRIMARY_DARKER: '#006FEE',

		SECONDARY: '#9353D3',
		SECONDARY_LIGHTER: 'rgba(147, 83, 211, var(--OPACITY-LIGHTER))',
		SECONDARY_DARKER: '#7828C8',

		SUCCESS: '#45D483',
		SUCCESS_LIGHTER: 'rgba(69, 212, 131, var(--OPACITY-LIGHTER))',
		SUCCESS_DARKER: '#17C964',

		WARNING: '#F7B750',
		WARNING_LIGHTER: 'rgba(247, 183, 80, var(--OPACITY-LIGHTER))',
		WARNING_DARKER: '#F5A524',

		ERROR: '#F54180',
		ERROR_LIGHTER: 'rgba(245, 65, 128, var(--OPACITY-LIGHTER))',
		ERROR_DARKER: '#F31260',

		INFO: '#3498DB',
		INFO_LIGHTER: 'rgba(52, 152, 219, var(--OPACITY-LIGHTER))',
		INFO_DARKER: '#0E8AAA'
	},
	SHADOW: {
		LIGHTER: '0px 1px 4px rgba(0, 0, 0, 0.07)',
		LIGHT: '3px 4px 5px rgba(0, 0, 0, 0.1)',
		NORMAL: '3px 4px 5px rgba(0, 0, 0, 0.3)',
		HEAVY: '6px 8px 10px rgba(0, 0, 0, 0.3)'
	},
	GRIDIENT: {
		PRIMARY: 'linear-gradient(50deg, var(--COLORS-PRIMARY) 0%, var(--COLORS-PRIMARY_LIGHTER) 100%)',
		SECONDARY:
			'linear-gradient(70deg, var(--COLORS-SECONDARY) 0%, var(--COLORS-SECONDARY_LIGHTER) 100%)',
		SUCCESS: 'linear-gradient(70deg, var(--COLORS-SUCCESS) 0%, var(--COLORS-SUCCESS_LIGHTER) 100%)',
		ERROR: 'linear-gradient(70deg, var(--COLORS-ERROR) 0%, var(--COLORS-ERROR_LIGHTER) 100%)',
		WARNING: 'linear-gradient(70deg, var(--COLORS-WARNING) 0%, var(--COLORS-WARNING_LIGHTER) 100%)',
		INFO: 'linear-gradient(70deg, var(--COLORS-INFO) 0%, var(--COLORS-INFO_LIGHTER) 100%)'
	},
	TRANSITION: {
		TURTLE: '.8s ease',
		SLOW: '.5s ease-in-out',
		NORMAL: '.25s ease',
		FAST: '.2s ease',
		RABIIT: '.13s'
	},
	COMPONENT: {
		BACKGROUND: '#F4F4F5',
		FOCUSED: '#F2F3F5',
		PLACEHOLDER: '#5D5D66',
		PLACEHOLDER_DARKER: '#1B2326'
	},
	FILTER: {
		BLUR: 'blur(9px)'
	},
	RADIUS: {
		NORMAL: '7px',
		HEAVY: '10px',
		HEAVIER: '12px',
		ROUND: '50%',
		MAXIMUM: '9999px'
	},
	BORDERSIZE: {
		THIN: '0.5px',
		NORMAL: '1px',
		HEAVY: '2px'
	}
};

const DARK_THEME = {
	// BACKGROUND: '#161616',
	BACKGROUND: '#101013',
	LAYER_BACKGROUND: '#191F28',
	OPACITY: {
		LIGHTER: '0.2'
	},
	GAP: {
		MAIN: '1.75rem',
		HALF: 'calc(var(--GAP-MAIN) / 2)',
		THIN: 'calc(var(--GAP-MAIN) / 4)'
	},
	COLORS: {
		// TEXT: '#FDFDFD',
		TEXT: '#ffffff',

		PRIMARY: '#338EF7',
		PRIMARY_LIGHTER: 'rgba(51, 142, 247, var(--OPACITY-LIGHTER))',
		PRIMARY_DARKER: '#006FEE',

		SECONDARY: '#9353D3',
		SECONDARY_LIGHTER: 'rgba(147, 83, 211, var(--OPACITY-LIGHTER))',
		SECONDARY_DARKER: '#7828C8',

		SUCCESS: '#45D483',
		SUCCESS_LIGHTER: 'rgba(69, 212, 131, var(--OPACITY-LIGHTER))',
		SUCCESS_DARKER: '#17C964',

		WARNING: '#F7B750',
		WARNING_LIGHTER: 'rgba(247, 183, 80, var(--OPACITY-LIGHTER))',
		WARNING_DARKER: '#F5A524',

		ERROR: '#F54180',
		ERROR_LIGHTER: 'rgba(245, 65, 128, var(--OPACITY-LIGHTER))',
		ERROR_DARKER: '#F31260',

		INFO: '#3498DB',
		INFO_LIGHTER: 'rgba(52, 152, 219, var(--OPACITY-LIGHTER))',
		INFO_DARKER: '#0E8AAA'
	},
	SHADOW: {
		LIGHT: '3px 4px 5px rgba(0, 0, 0, 0.35)',
		NORMAL: '3px 4px 5px rgba(0, 0, 0, 0.45)',
		HEAVY: '6px 8px 10px rgba(0, 0, 0, 0.55)'
	},
	GRIDIENT: {
		PRIMARY: 'linear-gradient(50deg, var(--COLORS-PRIMARY) 0%, var(--COLORS-PRIMARY_LIGHTER) 100%)',
		SECONDARY:
			'linear-gradient(70deg, var(--COLORS-SECONDARY) 0%, var(--COLORS-SECONDARY_LIGHTER) 100%)',
		SUCCESS: 'linear-gradient(70deg, var(--COLORS-SUCCESS) 0%, var(--COLORS-SUCCESS_LIGHTER) 100%)',
		ERROR: 'linear-gradient(70deg, var(--COLORS-ERROR) 0%, var(--COLORS-ERROR_LIGHTER) 100%)',
		WARNING: 'linear-gradient(70deg, var(--COLORS-WARNING) 0%, var(--COLORS-WARNING_LIGHTER) 100%)',
		INFO: 'linear-gradient(70deg, var(--COLORS-INFO) 0%, var(--COLORS-INFO_LIGHTER) 100%)'
	},
	TRANSITION: {
		TURTLE: '.8s ease',
		SLOW: '.5s ease-in-out',
		NORMAL: '.25s ease',
		FAST: '.2s ease',
		RABIIT: '.13s'
	},
	COMPONENT: {
		BACKGROUND: '#27272A',
		FOCUSED: '#2E333F',
		PLACEHOLDER: '#efefef',
		PLACEHOLDER_DARKER: '#f3f3f3'
	},
	FILTER: {
		BLUR: 'blur(9px)'
	},
	RADIUS: {
		NORMAL: '7px',
		HEAVY: '10px',
		HEAVIER: '12px',
		ROUND: '50%',
		MAXIMUM: '9999px'
	},
	BORDERSIZE: {
		THIN: '0.5px',
		NORMAL: '1px',
		HEAVY: '2px'
	}
};

export const isDarkMode = () =>
	typeof window !== 'undefined' &&
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches;

export function getTHEME() {
	if (typeof localStorage != 'undefined') {
		const theme = localStorage.getItem('theme');
		if (theme != null) {
			if (theme == 'dark') return DARK_THEME;
			return LIGHT_THEME;
		}
	}
	if (typeof window == 'undefined') return LIGHT_THEME;

	if (isDarkMode()) return DARK_THEME;
	return LIGHT_THEME;
}

const callbacks: ((theme: 'dark' | 'light') => void)[] = [];

export function onChangeTheme(callback: (theme: 'dark' | 'light') => void) {
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
		const newColorScheme = e.matches ? 'dark' : 'light';
		callback(newColorScheme);
		callbacks.push(callback);
	});
}

export function setTheme(theme: 'dark' | 'light') {
	callbacks.forEach((c) => c(theme));
	localStorage.setItem('theme', theme);
}

export { LIGHT_THEME, DARK_THEME };
