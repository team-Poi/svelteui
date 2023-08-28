<script lang="ts">
	import type Color from '../types/Color';

	export let progress = 0,
		color: Color = 'PRIMARY',
		size: 'NORMAL' | 'BIG' | 'SMALL' = 'NORMAL';
	export let width: string = '20rem';
	let sizecss: string = '--height: .7rem';
	sizecss = { NORMAL: '--height: .7rem', BIG: '--height: 1rem', SMALL: '--height: 0.35rem' }[size];

	export let wrapperCSS = '';
	export let progressBackgroundCSS = '';
	export let progressFilledCSS = '';
</script>

<div class="wrapper" style:width style={wrapperCSS}>
	<div
		class="progress"
		style={`--gridient: var(--GRIDIENT-${color}); ${sizecss}; ${progressBackgroundCSS}`}
	>
		<div class="inp" style={`--val: ${Math.min(Math.max(0, progress), 1)}; ${progressFilledCSS}`} />
	</div>
</div>

<style>
	.wrapper {
		padding: 5px;
	}
	.progress {
		z-index: 1;
		width: var(--width);
		height: var(--height);
		border-radius: var(--RADIUS-MAXIMUM);
		background: var(--COMPONENT-BACKGROUND);
		box-shadow: var(--SHADOW-NORMAL);
		border: 1.5px solid rgba(128, 128, 128, 0.15);
	}
	.inp {
		z-index: 2;
		width: calc(100% * var(--val));
		background-size: calc(100% * 1 / var(--val)) !important;
		background: var(--gridient);
		height: var(--height);
		border-radius: var(--RADIUS-MAXIMUM);
		transition: 0.7s ease;
	}
</style>
