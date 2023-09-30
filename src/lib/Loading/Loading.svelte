<script lang="ts">
	import type Color from '../types/Color';

	export let size = '3rem';
	export let color: Color = 'PRIMARY';

	export let wrapperStyle = '';
	export let svgWrapperStyle = '';
	export let svgStyle = '';
</script>

<div id="wrapper" style={`--size: ${size}; --color: var(--COLORS-${color}); ${wrapperStyle}`}>
	<div class="profile-main-loader">
		<div class="loader" style={svgWrapperStyle}>
			<svg class="circular-loader" viewBox="25 25 50 50" style={svgStyle}>
				<circle
					class="loader-path"
					cx="50"
					cy="50"
					r="20"
					fill="none"
					stroke={`var(--COLORS-${color})`}
					stroke-width="2"
				/>
			</svg>
		</div>
	</div>
</div>

<style>
	#wrapper {
		position: relative;
		aspect-ratio: 1/ 1;
		width: var(--size);
		height: var(--size);
		overflow: hidden;
	}

	.profile-main-loader {
		position: relative;
	}

	.profile-main-loader .loader {
		position: relative;
		margin: 0px auto;
		width: var(--size);
		height: var(--size);
		aspect-ratio: 1/ 1;
	}
	.profile-main-loader .loader:before {
		content: '';
		display: block;
		padding-top: 100%;
	}

	.circular-loader {
		animation: rotate 2s linear infinite;
		color: var(--color);
		height: 100%;
		-webkit-transform-origin: center center;
		-ms-transform-origin: center center;
		transform-origin: center center;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		margin: auto;
	}

	.loader-path {
		stroke-dasharray: 150, 200;
		stroke-dashoffset: -10;
		animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
		stroke-linecap: round;
	}

	@keyframes rotate {
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
	@keyframes dash {
		0% {
			stroke-dasharray: 1, 200;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 89, 200;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 89, 200;
			stroke-dashoffset: -124;
		}
	}
</style>
