<script>
	import ColorViewer from '@/lib/ThemeProvider/ColorViewer.svelte';
	import { Progress, Container, Card, Button } from '@/lib';
	let pro = 0.5;
</script>

<Container>
	<ColorViewer />
	<div style="width: 100%; box-sizing: border-box;">
		<Card Layer="2" style="width: 100%; box-sizing: border-box; margin-top: 1rem;">
			<div>PRIMARY</div>
			<Progress progress={pro} size="SMALL" color="PRIMARY" />
			<div>SECONDARY</div>
			<Progress progress={pro} size="NORMAL" color="SECONDARY" />
			<div>SUCCESS</div>
			<Progress progress={pro} size="BIG" color="SUCCESS" />
			<div>INFO</div>
			<Progress progress={pro} size="SMALL" color="INFO" />
			<div>ERROR</div>
			<Progress progress={pro} size="NORMAL" color="ERROR" />
			<div>WARNING</div>
			<Progress progress={pro} size="BIG" color="WARNING" />
		</Card>
	</div>
	<Card Layer="2" style="width: 100%; box-sizing: border-box; margin-top: 1rem;">
		<div>PRIMARY</div>
		<Button color="PRIMARY">PRIMARY</Button>
		<div>SECONDARY</div>
		<Button color="SECONDARY">SECONDARY</Button>
		<div>SUCCESS</div>
		<Button color="SUCCESS">SUCCESS</Button>
		<div>INFO</div>
		<Button color="INFO">INFO</Button>
		<div>ERROR</div>
		<Button color="ERROR">ERROR</Button>
		<div>WARNING</div>
		<Button color="WARNING">WARNING</Button>
	</Card>
</Container>
