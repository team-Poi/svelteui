<script lang="ts">
	import { varGenComponent } from '../ThemeProvider/varGen';
	import type Color from '../types/Color';

	export let placeholder = '';
	export let value = '';
	export let color: Color | 'NORMAL' = 'NORMAL';
	export let wrapperStyle = '';
	export let textareaStyle = '';
	export let readonly = false;
</script>

<div class="wrapper" style={varGenComponent(color) + wrapperStyle}>
	{#if placeholder != ''}
		<div class="plholder">{placeholder}</div>
	{/if}
	<textarea bind:value style={textareaStyle} {readonly} />
</div>

<style>
	.wrapper {
		background: var(--color-lighter);
		border-radius: var(--RADIUS-NORMAL);
		border: none;
		outline: none;
		padding: var(--GAP-THIN);
		box-shadow: var(--SHADOW-LIGHTER);
	}
	textarea {
		background: transparent;
		width: 100%;
		outline: none;
		border: none;
		border-radius: var(--RADIUS-NORMAL);
		font-family: LINESeedKR, var(--Font-base);
		color: var(--color-darker);
		resize: vertical;
	}
	.plholder {
		font-size: 0.9rem;
		color: var(--color);
		line-height: 1;
	}
</style>
