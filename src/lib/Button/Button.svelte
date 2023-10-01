<script lang="ts">
	import Ripple from '../Ripple/Ripple.svelte';
	import varGen from '../ThemeProvider/varGen';
	import type Color from '../types/Color';

	const buttonProps = {
		class: [$$restProps.class] as unknown as string
	};
	export let className = '',
		color: Color = 'PRIMARY';
	export let disabled = false;

	export let rippleStyle = '';
	export let style = '';
</script>

<Ripple style={'border-radius: var(--RADIUS-HEAVY);' + rippleStyle}>
	<button
		{disabled}
		on:click
		on:mouseover
		on:focus
		on:mouseleave
		{...buttonProps}
		class={'btn ' + (className || '')}
		style={`${varGen(color)}; ${style}`}
	>
		<slot />
	</button>
</Ripple>

<style>
	.btn {
		padding: 0.45rem 1.3rem;
		font-size: 0.98rem;
		border-radius: var(--RADIUS-HEAVY);
		border: 0px;
		outline: none;
		background: var(--color-lighter);
		color: var(--color);
		cursor: pointer;
		transition: var(--TRANSITION-NORMAL);
		border: var(--BORDERSIZE-HEAVY) solid var(--color);
	}
	.btn:disabled {
		opacity: 0.5;
	}
	.btn:not(:disabled):hover {
		box-shadow: var(--SHADOW-LIGHT);
		transform: scale(0.98);
		opacity: 0.9;
	}
	.btn:not(:disabled):active {
		transform: scale(0.9);
		opacity: 1;
	}
</style>
