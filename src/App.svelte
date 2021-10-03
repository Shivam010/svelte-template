<script lang="ts">
	import Eyes from "./Eyes.svelte";

	export let thanks = false;
</script>

<main>
	<h1 class="header">
		{#if !thanks} Hello...👋{:else} Thank You{/if}
	</h1>
	<i>
		{#if !thanks} Welcome {:else} For your visit {/if}
		to the Svelte Template by
		<a href="https://shivam010.in/" target="_blank" rel="noopener">
			Shivam Rathore
		</a>
		<Eyes />
	</i>
	<nav>
		<a href="/"> Home </a>
		<a href="/thanks"> Thanks </a>
	</nav>
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

	nav {
		margin: 24px;
		padding: 16px;
		display: flex;
		font-style: italic;
		justify-content: space-around;
		border-top: 1px solid;
	}
</style>
