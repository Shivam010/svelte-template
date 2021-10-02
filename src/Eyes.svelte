<script lang="ts">
</script>

<span class="eyes" />

<style>
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
