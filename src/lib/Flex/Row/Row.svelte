<script lang="ts">
	export let gap = '0px';
	export let style = '';
	export let justifyContent = 'unset';
	export let alignItems = 'unset';
</script>

<div
	class="row"
	style={`gap: ${gap}; justtify-content: ${justifyContent}; align-items: ${alignItems}; ${style}`}
>
	<slot />
</div>

<style lang="scss">
	.row {
		display: flex;
		flex-direction: row;
	}
</style>
