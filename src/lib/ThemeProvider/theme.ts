const THEME = {
	BACKGROUND: '#161616',
	COLORS: {
		TEXT: '#FDFDFD',
		PRIMARY: '#0275FF',
		PRIMARY_LIGHTER: '#8DDCff',

		SECONDARY: '#9353d3',
		SECONDARY_LIGHTER: '#C9A9E9',

		SUCCESS: '#26E054',
		SUCCESS_LIGHTER: '#74DFA2',

		WARNING: '#F1C40F',
		WARNING_LIGHTER: '#FCFC72',

		ERROR: '#E74B3C',
		ERROR_LIGHTER: '#FF968C',

		INFO: '#3498DB',
		INFO_LIGHTER: '#96D5FF'
	},
	LAYER_BACKGROUND: {
		FIRST: '#1A1A1A',
		SECOND: '#1F1F1F',
		THIRD: '#282828'
	},
	SHADOW: {
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
		BACKGROUND: '#2B2C2E',
		PLACEHOLDER: '#8D8D8D'
	},
	FILTER: {
		BLUR: 'blur(9px)'
	},
	RADIUS: {
		NORMAL: '5px',
		HEAVY: '8px',
		HEAVIER: '1rem',
		ROUND: '50%',
		MAXIMUM: '9999px'
	}
};

export default THEME;
