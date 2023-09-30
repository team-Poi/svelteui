<script lang="ts">
	export let gap = '0px';
	export let style = '';
	export let justifyContent = 'unset';
	export let alignItems = 'unset';
</script>

<div
	class="column"
	style={`gap: ${gap}; justtify-content: ${justifyContent}; align-items: ${alignItems}; ${style}`}
>
	<slot />
</div>

<style lang="scss">
	.column {
		display: flex;
		flex-direction: column;
	}
</style>
