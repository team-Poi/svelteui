<script lang="ts">
	export let style = '';
</script>

<div class={'card'} style={`--color: var(--LAYER_BACKGROUND); ${style}`}>
	<slot />
</div>

<style>
	.card {
		padding: var(--GAP-HALF);
		border-radius: var(--RADIUS-NORMAL);
		box-shadow: var(--SHADOW-LIGHT);
		width: fit-content;
		height: fit-content;
		display: inline-block;

		background: var(--color);
		transition: none;
	}
</style>
