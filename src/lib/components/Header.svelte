<script lang="ts">
	export let toggleTheme: () => void;
	export let darkMode: boolean;
</script>

<header>
	<div class="header-content">
		<h1>Fatih G</h1>
		<button class="theme-toggle" on:click={toggleTheme}>
			{#if darkMode}
				<i class="fas fa-sun sun-icon"></i> <!-- Sun icon -->
			{:else}
				<i class="fas fa-moon moon-icon"></i> <!-- Moon icon -->
			{/if}
		</button>
	</div>
</header>

<style>
	header {
		padding: 20px 40px;
		color: #007bff;
		text-align: center;
    font-size: 143%;
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
	}

	.theme-toggle {
		background-color: transparent;
		color: #007bff;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
	}

	/* Use the global icon color variable */
	.theme-toggle i {
		color: var(--icon-color);
	}

	.theme-toggle:hover i {
		color: var(--btn-bg);
	}

	.theme-toggle:hover {
		color: var(--btn-bg);
	}
</style>
