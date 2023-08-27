<script lang="ts">
	import Card from '../Card/Card.svelte';
	import THEME from './theme';

	let colorFlatten: { [key: string]: string } = {};

	Object.keys(THEME).forEach((key) => {
		const V = (THEME as any)[key];
		if (typeof V == 'string') return (colorFlatten['--' + key] = V);
		Object.keys(V).forEach((keysub) => {
			colorFlatten[`--${key}-${keysub}`] = V[keysub];
		});
	});

	const isColor = (c: string) => {
		return (
			(c.length == 7 && c[0] == '#') || isGridient(c) || (isVarable(c) && includes(c, 'color'))
		);
	};
	const includes = (s: string, f: string) => {
		return s.toLocaleLowerCase().includes(f);
	};
	const isVarable = (v: string) => {
		return v.startsWith('var(--');
	};
	const isGridient = (g: string) => {
		return g.startsWith('linear-gradient') || (isVarable(g) && includes(g, 'gridient'));
	};
	const isTransition = (k: string) => {
		return includes(k, 'transition');
	};
	const isRadius = (k: string) => includes(k, 'radius');
	const flattened = (f: string) => {
		if (isVarable(f)) return f.replace('var(--', '').slice(0, -1);
		return f;
	};
</script>

<div class="containerWrapper">
	<Card Layer="2" style="margin-top: 1rem;">
		<div class="wrapper">
			{#each Object.keys(colorFlatten) as k}
				<Card Layer="3" style="margin: 5px">
					<div class="cont">
						<div class="title">{k}</div>
						<div class="grid">
							{#if isColor(colorFlatten[k])}
								<div class="viewer" style={`--color: ${colorFlatten[k]}`} />
							{:else if isRadius(k)}
								<div class="viewer radius" style={`--value: ${colorFlatten[k]}`} />
							{:else if isTransition(k)}
								<div class="viewer transition" style={`--transition: ${colorFlatten[k]}`}>
									<div class="transitionHoverMe">Hover Me!</div>
									<div class="transitionHovered">You hovered!</div>
								</div>
							{:else}
								<div class="viewer colornview" />
							{/if}

							{#if isGridient(colorFlatten[k])}
								<div class="colorname">Hidden...</div>
							{:else}
								<div class="colorname">{flattened(colorFlatten[k])}</div>
							{/if}
						</div>
					</div>
				</Card>
			{/each}
		</div>
	</Card>
</div>

<style>
	.containerWrapper {
		width: 100%;
	}
	.wrapper {
		padding: 0.7rem;
	}
	.title {
		font-weight: bold;
	}
	.grid {
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
		margin-left: 0.5rem;
		gap: 8px;
		margin-top: 5px;
	}
	.colorname {
		margin-bottom: 5px;
		font-weight: lighter;
	}
	.viewer {
		background: var(--color);
		width: 3rem;
		box-sizing: border-box;
		height: 3rem;
		border-radius: var(--RADIUS-NORMAL);
		box-shadow: var(--SHADOW-LIGHT);
		transition: var(--TRANSITION-FAST);
		cursor: pointer;
		border: 0px solid #ffffff00;
	}
	.radius {
		background: #fff;
		border-radius: var(--value);
	}
	.colornview {
		background: none;
		box-shadow: none;
		border: none;
		width: 0px;
	}
	.transition {
		transition: var(--transition);
		background-color: #fff;
		rotate: 0deg;
		transform: scale(1);
		position: relative;
	}
	.transition:hover {
		rotate: 90deg;
		transform: scale(1.15);
	}
	.transitionHoverMe,
	.transitionHovered {
		position: absolute;
		color: black;
		text-align: center;
		left: 50%;
		top: 50%;

		transition: var(--transition);
		opacity: 0;
		font-size: 0.5em;
	}
	.transition:hover > .transitionHoverMe {
		transform: translate(-50%, -50%) rotate(-90deg) scale(0.8);
	}
	.transition:not(:hover) > .transitionHoverMe {
		opacity: 1;
		transform: translate(-50%, -50%) rotate(0deg) scale(1);
	}
	.transition:not(:hover) > .transitionHovered {
		transform: translate(-50%, -50%) rotate(0deg) scale(0.8);
	}
	.transition:hover > .transitionHovered {
		opacity: 1;
		transform: translate(-50%, -50%) rotate(-90deg) scale(1);
	}

	.viewer:not(.transition):hover {
		transform: scale(1.5);
		border: 1px solid #fff;
		box-shadow: var(--SHADOW-NORMAL);
	}
</style>
