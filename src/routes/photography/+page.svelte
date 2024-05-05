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
											? 'portrait'
											: 'landscape'}
									/>
								</button>
							{/if}
						{/each}
					</div>
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
		align-items: center;
		gap: 5rem;
		max-width: 100%;
		padding-block: 1rem;

		.photoshoot {
			display: flex;
			justify-content: space-between;
			gap: 1rem;

			.attribution {
				flex: 1 1 10%;
				border-right: 1px solid black;
				padding-right: 1rem;
				min-width: 5rem;
			}

			.gallery {
				flex: 1 1 80%;
				display: flex;
				flex-flow: column wrap;
				gap: 1rem;

				.gallery-row {
					display: flex;
					justify-content: center;
					gap: 1rem;
					align-items: center;
					flex-basis: 1;

					button {
						border: none;
						background: none;
						cursor: pointer;
						padding: 0;
					}
				}
			}
		}
	}

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		.photography {
			padding-inline: 1rem;
		}
		.gallery-row {
			flex-wrap: wrap;
		}
		.photoshoot {
			flex-wrap: wrap;
		}
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
		.photography {
			padding-inline: 2.5rem;
		}


	}

	// .potrait {
	//  min-width: 100%;
	// }

	.landscape {
		min-width: 100%;
		flex: 1 1 100%;
	}

	img,
	video {
		object-fit: contain;
		max-height: 80vh;
	}
	.modalImage {
		max-width: 100%;
		height: auto;
		max-height: 100%;
		object-fit: scale-down;
	}
</style>
