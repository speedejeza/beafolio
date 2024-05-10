<script>
	import Header from '$lib/sections/header.svelte';
	import Footer from '$lib/sections/footer.svelte';

	export let data;
	let profile = data.data.attributes;
	let socials = data.data.attributes.socials;
</script>

<Header {profile} {socials} />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif, 'Sans Serif', Icons;

		--header-height: 3.375rem;
		--fullscreen-height: calc(100vh - var(--header-height));
	}
	:global(body) {
		margin: 0;
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
		:global(body) {
			font-size: 1rem;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		:global(body) {
			font-size: 1.25rem;
		}
	}
</style>
