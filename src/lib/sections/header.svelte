<script>
	import Clock from '$lib/components/clock.svelte';
	import Eyeroll from '$lib/components/eyeroll.svelte';

	export let profile;
	export let socials;
</script>

<header>
	<nav>
		<div class="nav-left">
			<a href="/">
				<span class="apple-logo"></span>
				<strong>{profile.displayName}</strong>
			</a>
		</div>
		<div class="nav-center">
			<Eyeroll />
		</div>
		<div class="nav-right">
			<div class="socials">
				{#each socials as social}
					<a href={social.link} target="_blank" rel="noreferrer">
						<img
							src={social.logo.data.attributes.url}
							alt={social.logo.data.attributes.alternativeText}
							width="25em"
							height="25em"
						/>
					</a>
				{/each}
			</div>
			<Clock />
		</div>
	</nav>
</header>

<style>
	header {
		/* background-color: rgb(230, 124, 115); */
		background-color: black;
		color: white;
		padding: 0.5rem;
		position: sticky;
		top: 0;
		z-index: 20;
		height: calc(var(--header-height) - 1rem); /* 1rem padding top and bottom */
	}

	a {
		color: white;
		text-decoration: none;
	}

	nav {
		display: flex;
		align-items: center;
	}

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

	img {
		filter: invert(1);
	}

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		.nav-center {
			display: none;
		}
	}
</style>
