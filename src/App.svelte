<script lang="ts">
</script>

<main>
	<h1 class="header">Hello...👋</h1>
	<i>
		Welcome to the Svelte Template by
		<a href="https://shivam010.in/" target="_blank"> Shivam Rathore </a>
		<span class="eyes" />
	</i>
</main>

<style>
	main {
		height: 100%;
		text-align: center;
		width: 300px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.header {
		font-size: 64px;
		font-weight: normal;
		margin: 0;
	}

	@keyframes eyesFrames {
		0% {
			content: "(oo)";
		}
		50% {
			content: "(••)";
		}
	}
	@-webkit-keyframes eyesFrames {
		0% {
			content: "(oo)";
		}
		50% {
			content: "(••)";
		}
	}
	.eyes::after {
		content: "(oo)";
		-webkit-animation: eyesFrames 1s linear infinite alternate;
		animation: eyesFrames 1s linear infinite alternate;
	}
</style>
