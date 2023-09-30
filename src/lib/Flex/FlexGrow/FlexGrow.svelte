<script lang="ts">
	export let grow = 1;
	export let style = '';
</script>

<div style={`flex-grow: ${grow}; ${style}`}>
	<slot />
</div>
