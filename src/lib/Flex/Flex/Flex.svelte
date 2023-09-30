<script lang="ts">
	export let flex: number = 1;
	export let style = '';
</script>

<div style={`flex: ${flex}; ${style}`}>
	<slot />
</div>
