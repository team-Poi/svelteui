<script lang="ts">
	let transition = 'initial';
	let opacity = 0;
	let tranform = 'translate(-50%, -50%)';
	let left_ = 0;
	let top_ = 0;

	const onClick = (
		ev: MouseEvent & {
			currentTarget: EventTarget & HTMLDivElement;
		}
	) => {
		ev.stopPropagation();
		const { pageX, pageY, currentTarget } = ev;

		const rect = (currentTarget as HTMLElement).getBoundingClientRect();

		left_ = pageX - (rect.left + window.scrollX);
		top_ = pageY - (rect.top + window.scrollY);
		const size = Math.max(rect.width, rect.height);

		tranform = 'translate(-50%, -50%)';
		opacity = 1;
		transition = 'initial';

		setTimeout(() => {
			opacity = 0;
			transition = `var(--TRANSITION-SLOW)`;
			tranform = `scale(${size / 9})`;
		}, 50);
	};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:pointerup={(e) => {
		onClick(e);
	}}
	class="ripple"
>
	<slot />

	<s
		class="rippleS"
		style={`
            top: ${top_}px;
            left: ${left_}px;
            transform: ${tranform};
            opacity: ${opacity};
            transition: ${transition};
        `}
	/>
</div>

<style>
	.ripple {
		position: relative;
		display: inline-flex;
		overflow: hidden;
	}
	.rippleS {
		position: absolute;
		border-radius: var(--RADIUS-ROUND);
		background: rgba(0, 0, 0, 0.3);
		width: 35px;
		height: 35px;
		pointer-events: none;
		border: none;
		outline: none;
	}
</style>
