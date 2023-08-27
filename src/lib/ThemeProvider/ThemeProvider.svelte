<script lang="ts">
	import THEME from './theme';
	type S2S_Object = { [key: string]: string };
	const ANY_THEME = THEME as { [key: string]: string | S2S_Object };
	const cssVarCreater = (name: string, value: string) => {
		return `--${name}: ${value}`;
	};
	const getCSS = () => {
		let css: string[] = [];
		Object.keys(THEME).forEach((THEME_KEY) => {
			if (typeof ANY_THEME[THEME_KEY] == 'string')
				return css.push(cssVarCreater(THEME_KEY, ANY_THEME[THEME_KEY] as string));

			const SUB_THEME = ANY_THEME[THEME_KEY] as S2S_Object;
			Object.keys(SUB_THEME).forEach((SUBKEY) => {
				css.push(cssVarCreater(THEME_KEY + '-' + SUBKEY, SUB_THEME[SUBKEY]));
			});
		});
		css.push('');
		return css.join(';');
	};
</script>

<div style={getCSS()} class="themeProvider">
	<slot />
</div>

<style>
	.themeProvider {
		min-height: 100vh;
		color: var(--COLORS-TEXT);
		background: var(--BACKGROUND);
	}
</style>
