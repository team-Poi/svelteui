<script lang="ts">
	import { varGenComponent } from '../ThemeProvider/varGen';
	import type Color from '../types/Color';
	export let placeholder = '';
	export let className = '';
	export let color: Color | 'NORMAL' = 'NORMAL';
	export let style = '';
	export let wrapperStyle = '';
	export let readonly = false;
	export let value = '';
	export let TYPE: 'text' | 'password' | 'number' = 'text';
	export let minLength: number | null = null;
	export let maxLength: number | null = null;

	let enabled = false;

	export let onKeyDown: (e: KeyboardEvent) => any = () => {};
	export let onKeyUp: (e: KeyboardEvent) => any = () => {};
	export let onFocus: (e: FocusEvent) => any = () => {};
	export let onBlur: (e: FocusEvent) => any = () => {};
	export let onChange: (e: Event) => any = () => {};

	function typeAction(node: HTMLInputElement) {
		node.type = TYPE;
	}
</script>

<div
	class={'input-wrapper' + (enabled ? ' enabled' : '')}
	style={`${varGenComponent(
		color
	)} --bg: var(--color-lighter); --fg: var(--color); --darker: var(--color-darker); ${
		wrapperStyle || ''
	}`}
>
	<input
		class={`input ${className || ''}`}
		{style}
		{placeholder}
		maxlength={maxLength}
		minlength={minLength}
		{readonly}
		bind:value
		use:typeAction
		on:change={(e) => {
			onChange(e);
			if (e.currentTarget.value.length > 0) enabled = true;
		}}
		on:keydown={(e) => {
			onKeyDown(e);
			if (e.currentTarget.value.length > 0) enabled = true;
		}}
		on:keyup={(e) => {
			onKeyUp(e);
			if (e.currentTarget.value.length > 0) enabled = true;
		}}
		on:focus={(e) => {
			onFocus(e);
			enabled = true;
		}}
		on:blur={(e) => {
			onBlur(e);
			if (e.currentTarget.value.length == 0) enabled = false;
		}}
	/>
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class="label">
		{placeholder}
	</label>
</div>

<style lang="scss">
	.input-wrapper {
		position: relative;
		user-select: none;
		color: white !important;
		background-color: var(--bg);
		border-radius: var(--RADIUS-NORMAL);
		height: calc(1.2rem + 1rem + 0.7rem);
	}

	.input {
		position: absolute;
		left: 0px;
		right: 0px;
		bottom: 0px;
		height: calc(1rem + 0.7rem * 2);
		box-sizing: border-box;
		width: 100%;
		padding: 0.7rem;
		background: none;
		border: none;
		outline: none;
		font-size: 0.96rem;
		color: var(--darker);

		&::placeholder {
			color: transparent;
		}

		&::-webkit-contacts-auto-fill-button {
			visibility: hidden;
			pointer-events: none;
			position: absolute;
		}
	}

	.label {
		top: 50%;
		transform: translateY(-50%);
		left: 10px;
		pointer-events: none;
		transform-origin: left center;
		transition: 250ms;
		position: absolute;
		color: var(--fg);
		pointer-events: none;
		user-select: none;
	}

	.enabled > .label {
		transform: scale(0.75);
		top: 0%;
	}
</style>
