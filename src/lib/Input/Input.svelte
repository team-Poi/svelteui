<script lang="ts">
	import type Color from '../types/Color';
	export let placeholder = '';
	export let className = '';
	export let color: Color = 'PRIMARY';
	export let style = '';
	export let wrapperStyle = '';
	export let LAYER: 'FIRST' | 'SECOND' | 'THIRD' = 'THIRD';

	let enabled = false;
</script>

<div
	class={'input-wrapper' + (enabled ? ' enabled' : '')}
	style={`--BG: var(--LAYER_BACKGROUND-${LAYER}); ${wrapperStyle || ''}`}
>
	<input
		class={`input ${className || ''}`}
		{style}
		{placeholder}
		on:change={(e) => {
			if (e.currentTarget.value.length > 0) enabled = true;
		}}
		on:keydown={(e) => {
			if (e.currentTarget.value.length > 0) enabled = true;
		}}
		on:keyup={(e) => {
			if (e.currentTarget.value.length > 0) enabled = true;
		}}
		on:focus={(e) => {
			enabled = true;
		}}
		on:blur={(e) => {
			if (e.currentTarget.value.length == 0) enabled = false;
		}}
	/>
	<label class="label" for="name" style={`color : var(--COLORS-${color})`}>
		{placeholder}
	</label>
</div>

<style lang="scss">
	.input-wrapper {
		position: relative;
		user-select: none;
		color: white !important;
		background-color: var(--BG);
		border-radius: var(--RADIUS-NORMAL);
		height: calc(1.2rem + 1rem + 0.7rem);
	}

	.input {
		position: absolute;
		left: 0px;
		right: 0px;
		bottom: 0px;
		height: 1rem;
		width: 100%;
		padding: 0.7rem;
		background: none;
		border: none;
		outline: none;
		font-size: 0.96rem;
		color: var(--COLORS-TEXT);

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
		color: var(--COLORS-TEXT);
		pointer-events: none;
		transform-origin: left center;
		transition: 250ms;
		position: absolute;
	}

	.enabled > .label {
		transform: scale(0.75);
		top: 0%;
	}
</style>
