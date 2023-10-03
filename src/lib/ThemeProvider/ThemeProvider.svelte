<script lang="ts">
	import { onMount } from 'svelte';
	import { DARK_THEME, LIGHT_THEME, getTHEME, isDarkMode, onChangeTheme } from './theme';
	type S2S_Object = { [key: string]: string };
	const cssVarCreater = (name: string, value: string) => {
		return `--${name}: ${value}`;
	};
	const getCSS = (THEME = getTHEME()) => {
		const ANY_THEME = THEME as { [key: string]: string | S2S_Object };
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

	let t: 'light' | 'dark' = isDarkMode() ? 'dark' : 'light';
	onMount(() => {
		onChangeTheme((x) => {
			t = x;
		});
	});

	export let theme: 'auto' | 'light' | 'dark' = 'auto';
	export let style = '';
</script>

<div
	style={getCSS(
		theme == 'auto'
			? t == 'light'
				? LIGHT_THEME
				: DARK_THEME
			: theme == 'light'
			? LIGHT_THEME
			: DARK_THEME
	) + `--theme: ${t}; ${style}`}
	class={'themeProvider ' + t}
>
	<slot />
</div>

<style>
	.themeProvider {
		color: var(--COLORS-TEXT);
		background: var(--BACKGROUND);
		transition: var(--TRANSITION-NORMAL);
	}
</style>
