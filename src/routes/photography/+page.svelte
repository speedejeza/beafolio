<script lang="ts">
	import Modal from '$lib/components/modal.svelte';

	export let data;

	function getSrcSet(media) {
		let srcs: string[] = [`${media.attributes.url} ${media.attributes.width}w`];

		for (const [, value] of Object.entries(media.attributes.formats)) {
			srcs.push(`${value.url} ${value.width}w`);
		}

		return srcs.join(', ');
	}

	let modalImg = '';
	let showModal = false;

	function imageClick(media) {
		modalImg = media.attributes.url;
		showModal = true;
	}
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
							<source src={media.attributes.url} type={media.attributes.mime} />
						</video>
					{:else}
						<button on:click={() => imageClick(media)}>
							<img
								alt={media.attributes.alternativeText}
								srcset={getSrcSet(media)}
								sizes="(min-width: 1000px) 33vw, 96vw"
							/>
						</button>
					{/if}
				{/each}
			</div>
		</div>
	{/each}
	<Modal bind:showModal>
		<img class="modalImage" alt="modal" src={modalImg} />
	</Modal>
</section>

<style lang="scss">
	.photography {
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 80vw;
		gap: 5rem;
	}

	.photoshoot {
		display: flex;
		justify-content: space-between;
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		grid-template-rows: auto;
		grid-auto-flow: dense;
		grid-gap: 1rem;
		place-items: center;

		img,
		video {
			width: 100%;
			height: auto;
			object-fit: contain;
		}

		button {
			background: none;
			border: none;
			cursor: pointer;
			padding: 0;
		}
	}
	
	.modalImage {
		max-width: 100%;
		max-height: 100%;
		object-fit: scale-down;
	}
</style>
