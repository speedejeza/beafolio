<script lang="ts">
	import Header from '$lib/sections/header.svelte';
	import Footer from '$lib/sections/footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	:root  {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif, 'Sans Serif', Icons;
	}
    :global(body) {
        margin: 0;
        font-size: 1.25rem;
    }
</style>
