<script>
	export let url,
		title,
		credits,
		paused = true;
</script>

<div class="item">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		playsinline
		loop
		autoplay
		controlslist="nofullscreen nodownload noremoteplayback"
		disablepictureinpicture
		disableremoteplayback
		src={url}
		bind:paused
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
</style>
