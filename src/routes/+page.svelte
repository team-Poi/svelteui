<script lang="ts">
	import ColorViewer from '@/lib/ThemeProvider/ColorViewer.svelte';
	import { Progress, Container, Card, Button, Input } from '@/lib';
	import Textarea from '@/lib/Textarea';
	import _0x53f95b from './encrypt.js';
	import Checkbox from '@/lib/Checkbox/Checkbox.svelte';
	import Loading from '@/lib/Loading/Loading.svelte';
	let pro = 0.5;

	let a = '';
	let b = '';
	let c = '';

	$: {
	}
</script>

<Container>
	<div style="padding-top: var(--GAP-MAIN);" />
	<Card
		style="width: 100%; box-sizing: border-box; display: flex; flex-direction: column; flex-wrap: wrap; gap: var(--GAP-HALF); "
	>
		<Textarea placeholder="Input" bind:value={a} />
		<Input placeholder="API Endpoint" bind:value={b} />
		<Textarea placeholder="Result" readonly bind:value={c} />
	</Card>

	<ColorViewer />
	<div style="width: 100%; box-sizing: border-box;">
		<Card style="width: 100%; box-sizing: border-box; margin-top: var(--GAP-MAIN);">
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
	<Card style="width: 100%; box-sizing: border-box; margin-top: var(--GAP-MAIN);">
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
	<div style="width: 100%; box-sizing: border-box;">
		<Card
			style="width: 100%; box-sizing: border-box; margin-top: var(--GAP-MAIN); display: flex; flex-direction: column; gap: var(--GAP-HALF)"
		>
			<Input placeholder="NORMAL" />
			<Input color="PRIMARY" placeholder="PRIMARY" />
			<Input color="SECONDARY" placeholder="SECONDARY" />
			<Input color="SUCCESS" placeholder="SUCCESS" />
			<Input color="INFO" placeholder="INFO" />
			<Input color="ERROR" placeholder="ERROR" />
			<Input color="WARNING" placeholder="WARNING" />
		</Card>
	</div>

	<Card
		style="width: 100%; box-sizing: border-box; margin-top: var(--GAP-MAIN); display: flex; flex-wrap: wrap; gap: var(--GAP-HALF); justify-content: center;"
	>
		<Loading size="8rem" color="PRIMARY" />
		<Loading size="8rem" color="SECONDARY" />
		<Loading size="8rem" color="SUCCESS" />
		<Loading size="8rem" color="INFO" />
		<Loading size="8rem" color="ERROR" />
		<Loading size="8rem" color="WARNING" />
	</Card>
	<Card
		style="width: 100%; box-sizing: border-box; margin-top: var(--GAP-MAIN); display: flex; flex-wrap: wrap; gap: var(--GAP-HALF); justify-content: center;"
	>
		<Checkbox color="PRIMARY" />
		<Checkbox color="SECONDARY" />
		<Checkbox color="SUCCESS" />
		<Checkbox color="INFO" />
		<Checkbox color="ERROR" />
		<Checkbox color="WARNING" />
	</Card>
	<Card
		style="width: 100%; box-sizing: border-box; margin-top: var(--GAP-MAIN); display: flex; flex-wrap: wrap; gap: var(--GAP-HALF); justify-content: center;"
	/>
</Container>
