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
		<!-- <div class="photoshoot"> -->
		<div class="attribution">
			{shoot.attributes.title.toUpperCase()}<br />
			{shoot.attributes.category}<br />
			<i>{shoot.attributes.year}</i>
		</div>
		<div class="gallery">
			{#each shoot.attributes.row as row}
				<div class="gallery-row">
					{#each row.photos.data as media}
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
									class={media.attributes.width < media.attributes.height
										? 'potrait'
										: 'landscape'}
								/>
							</button>
						{/if}
					{/each}
				</div>
			{/each}
		</div>
		<!-- </div> -->
	{/each}
	<Modal bind:showModal>
		<img class="modalImage" alt="modal" src={modalImg} />
	</Modal>
</section>

<style lang="scss">
	.photography {
		display: grid;
		grid-template-columns: min-content 1fr;
		max-width: 100%;
		padding: 1.5rem 2.5rem;

		// .photoshoot {
		// 	display: flex;
		// 	justify-content: space-between;
		// 	gap: 1rem;
		// 	padding-block: 1rem;
		// }
	}

	.attribution {
		border-right: 0.25rem solid black;
		padding: 1rem 2.5rem 1rem 0;
		min-width: 5rem;
	}

	.gallery {
		display: flex;
		flex-flow: column wrap;
		gap: 1rem;
		padding: 1rem;
	}
	.gallery-row {
		display: flex;
		justify-content: center;
		gap: 1rem;
		align-items: center;
		// flex-basis: 1;

		button {
			border: none;
			background: none;
			cursor: pointer;
			padding: 0;
		}
	}

	@media only screen and (max-width: 992px) {
		.photography {
			padding: 1rem;
			grid-template-columns: 1fr;
		}
		.gallery-row {
			flex-wrap: wrap;
		}
		.gallery {
			padding: 1rem 0 1rem 0;
		}
		.photoshoot {
			flex-wrap: wrap;
		}
	}

	.potrait {
		// width: 20px;
	}

	// .landscape {
	// 	width: 100vw;
	// 	height: auto;
	// }

	img,
	video {
		object-fit: contain;
		max-height: 85vh;
		max-width: 100%;
		width: 100vw;
	}

	.modalImage {
		max-width: 100%;
		height: auto;
		max-height: 100%;
		object-fit: scale-down;
	}
</style>
