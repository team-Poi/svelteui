<script lang="ts">
	import Ripple from '../Ripple/Ripple.svelte';

	const buttonProps = {
		class: [$$restProps.class] as unknown as string
	};
	export let className = '',
		color: 'PRIMARY' | 'SECONDARY' | 'SUCCESS' | 'INFO' | 'ERROR' | 'WARNING' = 'PRIMARY';
	let bgcolor = `var(--COLORS-${color})`;
	export let disabled = false;

	export let rippleStyle = '';
	export let style = '';
</script>

<Ripple style={rippleStyle}>
	<button
		{disabled}
		on:click
		on:mouseover
		on:focus
		on:mouseleave
		{...buttonProps}
		class={'btn ' + (className || '')}
		style={`--bgcolor: ${bgcolor};${style}`}
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
		color: var(--COLORS-TEXT);
		cursor: pointer;
		background: var(--bgcolor);
		transition: var(--TRANSITION-NORMAL);
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
