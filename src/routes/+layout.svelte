<script lang="ts">
	import Clock from '$lib/components/clock.svelte';
	import Eyeroll from '$lib/components/eyeroll.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let logoScale = 0.05;
	let headerHeight = 50;
</script>

<header bind:clientHeight={headerHeight}>
	<nav>
		<div class="nav-left">
			<a href="/">
				<span class="apple-logo"></span>
				<strong>Beatrice Chen</strong>
			</a>
		</div>
		<div class="nav-center">
			<Eyeroll />
		</div>
		<div class="nav-right">
			<div class="socials">
				{#each data.data as social}
					<a href={social.attributes.link} target="_blank" rel="noreferrer">
						<img
							src={social.attributes.logo.data.attributes.url}
							alt={social.attributes.logo.data.attributes.alternativeText}
							width={social.attributes.logo.data.attributes.width * logoScale}
							height={social.attributes.logo.data.attributes.height * logoScale}
						/>
					</a>
				{/each}
			</div>
			<Clock />
		</div>
	</nav>
</header>

<main>
	<slot {headerHeight} />
</main>

<footer>
	<aside>
		<p>Made with ❤️ by Jeremy</p>
	</aside>
</footer>

<style lang="scss">
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif, 'Sans Serif', Icons;
	}
	:global(body) {
		margin: 0;
	}

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		:global(body) {
			font-size: 0.75rem;
		}
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

	header {
		// background-color: rgb(230, 124, 115);
		background-color: black;
		color: white;
		padding: 0.5rem;
		position: sticky;
		top: 0;
		z-index: 20;
		a {
			color: white;
			text-decoration: none;
		}

		nav {
			display: flex;
			align-items: center;

			.nav-left {
				flex: 1;
			}

			.nav-left > a {
				display: flex;
				align-items: center;
				gap: 1rem;
			}

			.apple-logo {
				font-size: 2rem;
				display: inline-block;
				transform: rotate(-180deg) scale(-1, 1);
			}

			.nav-right {
				flex: 1;
				display: flex;
				justify-content: flex-end;
				align-items: center;
			}

			.socials {
				margin-right: 1rem;
			}
		}

		img {
			filter: invert(1);
		}
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(230, 125, 115, 0.339);
		min-height: 10rem;
		p {
			text-align: center;
			font-family: monospace;
		}
	}
</style>
