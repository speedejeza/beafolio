<script>
	export let url, title, credits, paused = true;
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
        bind:paused={paused}
	/>
	<div class="credits">
		<h1>{title}</h1>
		<p>{credits}</p>
	</div>
</div>

<style lang="scss">
	.item {
		display: grid;
		isolation: isolate;
        place-items: end start;
		// width: 100%;
		// height: 100%;

        * {
            grid-column: 1/-1;
            grid-row: 1/-1;
        }
	}

    
	video {
		width: 100%;
		height: 100%;
		object-fit: contain;
		display: block;
	}

	.credits {
        pointer-events: none;
        padding: 3rem;
		text-shadow: 0 0 10px black;
		white-space: pre-line;
		z-index: 10;
	}
</style>
