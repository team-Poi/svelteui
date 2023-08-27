<script lang="ts">
	export let Layer: '1' | '2' | '3';
	export let style = '';

	let COLOR = 'FIRST';
	if (Layer == '2') COLOR = 'SECOND';
	if (Layer == '3') COLOR = 'THIRD';
</script>

<div class={'card'} style={`--color: var(--LAYER_BACKGROUND-${COLOR}); ${style}`}>
	<slot />
</div>

<style>
	.card {
		padding: 8px;
		border-radius: var(--RADIUS-NORMAL);
		box-shadow: var(--SHADOW-LIGHT);
		width: fit-content;
		height: fit-content;
		display: inline-block;

		background: var(--color);
		transition: none;
	}
</style>
