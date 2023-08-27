<script>
	import '@/styles/global.css';

	import { ThemeProvider } from '@/lib';
</script>

<div class="App">
	<ThemeProvider>
		<slot />
	</ThemeProvider>
</div>
