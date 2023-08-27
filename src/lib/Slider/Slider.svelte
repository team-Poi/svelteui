<script lang="ts">
	import { onMount } from 'svelte';
	import Progress from '../Progress/Progress.svelte';
	import type Color from '../types/Color';

	export let min = 0;
	export let max = 100;
	export let value = max / 2;

	export let size: 'NORMAL' | 'BIG' | 'SMALL' = 'NORMAL';
	export let color: Color;

	export let width: string = '20rem';
	let sizecss: string = '--height: 1rem';
	sizecss = { NORMAL: '--height: 1rem', BIG: '--height: 2rem', SMALL: '--height: 0.6rem' }[size];

	let selected = false;

	let supportsPassive = false;
	try {
		(window.addEventListener as any)(
			'test',
			null,
			Object.defineProperty({}, 'passive', {
				get: function () {
					supportsPassive = true;
				}
			})
		);
	} catch (e) {}

	let wheelOpt = supportsPassive ? { passive: false } : false;
	let wheelEvent: any =
		typeof document !== 'undefined' && 'onwheel' in document.createElement('div')
			? 'wheel'
			: 'mousewheel';

	const mouseMove = (
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLDivElement;
		}
	) => {
		if (!selected) return;

		const rect = e.currentTarget.getBoundingClientRect();
		const percent = (e.clientX - rect.left) / rect.width;
		const nval = percent * (max - min) + min;
		value = Math.min(Math.max(nval, min), max);
	};

	const onMouseUp = (e: MouseEvent) => {
		e.preventDefault();
		selected = false;
	};

	const onWheel = (e: Event) => {
		if (selected) e.preventDefault();
	};

	onMount(() => {
		window.addEventListener('mouseup', onMouseUp);
		window.addEventListener('pointerup', onMouseUp);
		window.addEventListener(wheelEvent, onWheel, wheelOpt);
		window.addEventListener('touchmove', onWheel, wheelOpt);

		return () => {
			window.removeEventListener('mouseup', onMouseUp);
			window.removeEventListener('pointerup', onMouseUp);
			window.removeEventListener(wheelEvent, onWheel);
			window.removeEventListener('touchmove', onWheel);
		};
	});

	export let wrapperCSS = '';
	export let containerCSS = '';
	export let progressWrapperCSS = '';
	export let progressFilledCSS = '';
	export let progressBackgroundCSS = '';
	export let cursorCSS = '';
</script>

<div class="wrapper" style={wrapperCSS}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="container" on:mousemove={mouseMove} on:pointermove={mouseMove} style={containerCSS}>
		<Progress
			progress={(value - min) / (max - min)}
			{size}
			{color}
			{width}
			wrapperCSS={'padding: 0px; ' + progressWrapperCSS}
			progressFilledCSS={'transition: none; ' + progressFilledCSS}
			{progressBackgroundCSS}
		/>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="round"
			style:left={(((value - min) / (max - min)) * 100).toString() + '%'}
			style={sizecss + cursorCSS}
			on:pointerdown={(e) => (selected = true)}
			on:pointerup={(e) => (selected = false)}
			on:mousedown={(e) => {
				selected = true;
				e.stopPropagation();
				e.preventDefault();
			}}
			on:mouseup={(e) => {
				selected = false;
				e.stopPropagation();
				e.preventDefault();
			}}
		/>
	</div>
</div>

<style>
	.wrapper {
		padding: 1rem;
	}
	.container {
		position: relative;
		width: fit-content;
		height: fit-content;

		user-select: none;
	}
	.round {
		width: var(--height);
		height: var(--height);
		border-radius: var(--RADIUS-ROUND);
		background: #fff;
		position: absolute;
		top: 0px;
		transform: translateX(-50%);
		transition: scale var(--TRANSITION-FAST);

		scale: 1.1;
	}
	.round:hover {
		scale: 1.15;
		box-shadow: var(--SHADOW-NORMAL);
		cursor: pointer;
	}
</style>
