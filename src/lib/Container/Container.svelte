<script lang="ts">
	export let background = 'none';
	export let style = '';
</script>

<div class="wrapper" style:background>
	<div class="container" style:background {style}>
		<slot />
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		height: fit-content;
		box-sizing: border-box;
	}
	.container {
		padding: 0px var(--GAP-MAIN);
		margin-right: auto;
		margin-left: auto;
	}

	@media (min-width: 768px) {
		.container {
			width: 750px;
		}
	}

	@media (min-width: 992px) {
		.container {
			width: 970px;
		}
	}

	@media (min-width: 1200px) {
		.container {
			width: 1170px;
		}
	}
</style>
