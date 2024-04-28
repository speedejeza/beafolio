<script lang="ts">
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<section class="photography">
	{#each data.data as shoot}
		<div class="photoshoot">
			<div class="attribution">
				<h1>{shoot.attributes.title.toUpperCase()}</h1>
				<h2>{shoot.attributes.category}</h2>
				<h2>{shoot.attributes.year}</h2>
			</div>
			<div class="gallery">
				{#each shoot.attributes.gallery.data as media}
					{#if media.attributes.mime === 'video/mp4'}
						<video playsinline autoplay muted loop>
							<source src="{media.attributes.url}" type="video/mp4">
						</video>
					{:else}
						<img src="{media.attributes.url}" alt="{media.attributes.alternativeText}">
						
					{/if}
				{/each}
			</div>
		</div>
	{/each}
</section>

<style>
	.photography {
		display: flex;
		flex-direction: column;
        max-width: 80vw;
        margin-left: 20vw;
	}

	.photoshoot {
		display: flex;
		justify-content: space-between;
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
</style>
