<script>
	export let url,
		title,
		credits,
		paused = true,
		index;

	/**
	 * @type {HTMLVideoElement}
	 */
	let video;
</script>

<div class="item">
	<!-- Add play button at center of video -->
	{#if index == 0}
		<button
			class="play-button"
			on:click={(e) => {
				video.play();
				e.currentTarget.remove();
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="white"
				width="96px"
				height="96px"
			>
				<path d="M8 5v14l11-7z" />
			</svg>
		</button>
	{/if}
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		playsinline
		loop
		preload={index == 0 ? 'auto' : 'none'}
		controlslist="nofullscreen nodownload noremoteplayback"
		disablepictureinpicture
		disableremoteplayback
		src={url}
		bind:paused
		bind:this={video}
	/>
	<div class="credits">
		{#if title}
			<h1>{title}</h1>
		{/if}
		{#if credits}
			<p>{credits}</p>
		{/if}
	</div>
</div>

<style lang="scss">
	.item {
		display: grid;
		isolation: isolate;
		place-items: end start;

		* {
			grid-column: 1/-1;
			grid-row: 1/-1;
		}
	}

	video {
		width: 100%;
		object-fit: contain;
		object-position: center;
		display: block;
	}

	.credits {
		pointer-events: none;
		padding: 3rem;
		text-shadow: 0 0 10px black;
		white-space: pre-line;
		z-index: 10;
	}

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		.item {
			min-height: calc(100vh - 3.375rem);
		}
		video {
			position: absolute;
			transform: rotate(90deg);
			transform-origin: bottom left;
			width: calc(100vh - 3.375rem);
			height: 100vw;
			margin-top: -100vw;
			object-fit: cover;
			z-index: -1;
		}
	}

	.play-button {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: none;
		border: none;
		cursor: pointer;
		z-index: 10;
	}
</style>
