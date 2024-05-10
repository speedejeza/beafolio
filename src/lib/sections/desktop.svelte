<script>
	import Folder from '$lib/components/folder.svelte';
	import { getSrcSet } from '$lib/utils';

	export let background;
	export let folders;
</script>

<div class="desktop">
	<div class="background">
		<!-- Must support image and video formats -->
		{#if background.mime === 'video/mp4'}
			<video playsinline autoplay muted loop>
				<source src={background.url} type={background.mime} />
			</video>
		{:else}
			<img src={background.url} alt="background" />
			alt={background.alternativeText}
			srcset={getSrcSet(background)}
			sizes="(min-width: 1000px) 33vw, 96vw"
		{/if}
	</div>

	<!-- Create Folders -->
	{#each folders as folder}
		<Folder title={folder.name} link={folder.link} />
	{/each}
</div>

<style>
	.background {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	img,
	video {
		object-fit: cover;
		object-position: center;
		min-height: 100%;
		max-width: 100%;
	}

	.desktop {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	@media only screen and (max-width: 600px) {
		.desktop {
			flex-direction: column;
		}
	}
</style>
