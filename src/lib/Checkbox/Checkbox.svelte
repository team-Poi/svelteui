<script lang="ts">
	import varGen from '../ThemeProvider/varGen';
	import type Color from '../types/Color';

	export let enabled: boolean = false;
	export let color: Color = 'PRIMARY';
	export let size = '2rem';
	export let wrapperStyle = '';
	export let onClick: (
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLDivElement;
		}
	) => any = () => {};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={'checkboxWrapper ' + (enabled ? 'enabled' : '')}
	style={varGen(color) + `--width: ${size}; ${wrapperStyle}`}
	on:click={(e) => {
		enabled = !enabled;
		onClick(e);
	}}
>
	<div class="w2">
		<div class="wrapper">
			<div>
				<span class="span1" />
			</div>
			<span class="span2" />
		</div>
	</div>
</div>

<style lang="scss">
	.checkboxWrapper {
		width: var(--width);
		height: var(--width);
		border-radius: var(--RADIUS-NORMAL);
		background: var(--color-lighter);
		transition: var(--TRANSITION-SLOW);
		cursor: pointer;
		position: relative;
		.w2 {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: scale(0.95) translate(-50%, -75%);
			border-radius: 4px;
			.wrapper {
				top: 50%;
				left: 50%;
				rotate: -45deg;
				height: calc(var(--width) * 0.4);
				width: calc(var(--width) * 0.7);
				border-radius: 4px;
				div {
					--w: calc(var(--width) * 0.4);
					width: 3px;
					height: var(--w);
					rotate: 180deg;
					.span1 {
						border-radius: 2px;
						opacity: 0;
						transition: var(--TRANSITION-SLOW);
						max-height: 0px;
						width: 3px;
						height: var(--w);
						position: absolute;
						transform-origin: center;
						background: #fff;
						left: 0px;
						bottom: 0px;
					}
				}
				.span2 {
					border-radius: 2px;
					opacity: 0;
					transition: var(--TRANSITION-SLOW);
					--w: calc(var(--width) * 0.6);
					max-width: 0px;
					width: var(--w);
					height: 3px;
					position: absolute;
					transform-origin: center;
					background: #fff;
					left: 0px;
					bottom: 0px;
				}
			}
		}
	}
	.checkboxWrapper.enabled {
		background: var(--color);
		.w2 > .wrapper {
			div {
				.span1 {
					opacity: 1;
					max-height: var(--w);
					animation: on1 var(--TRANSITION-SLOW);
				}
			}
			.span2 {
				opacity: 1;
				max-width: var(--w);
				animation: on2 var(--TRANSITION-SLOW);
			}
		}
	}

	@keyframes on1 {
		0% {
			max-height: 0px;
			opacity: 0;
		}
		40% {
			max-height: var(--w);
			opacity: 1;
		}
		100% {
			max-height: var(--w);
			opacity: 1;
		}
	}
	@keyframes on2 {
		0% {
			max-width: 0px;
			opacity: 0;
		}
		60% {
			max-width: 0px;
			opacity: 0;
		}
		100% {
			max-width: var(--w);
			opacity: 1;
		}
	}
</style>
