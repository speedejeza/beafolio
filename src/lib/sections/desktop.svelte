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
			<img
				src={background.url}
				alt={background.alternativeText}
			/>
		{/if}
	</div>

	<!-- Create Folders -->
	{#each folders as folder}
		<Folder title={folder.name} link={folder.link} />
	{/each}
</div>

<style>
	.desktop {
		height: var(--fullscreen-height);
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	.background {
		position: absolute;
		height: var(--fullscreen-height);
		z-index: -1;
	}

	img,
	video {
		object-fit: cover;
		object-position: center;
		min-height: 100%;
		max-width: 100%;
	}

	@media only screen and (max-width: 600px) {
		.desktop {
			flex-direction: column;
		}
	}
</style>
