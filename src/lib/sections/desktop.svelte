<script>
    import Folder from "../components/folder.svelte";
</script>

<div class="video-background">
	<video playsinline autoplay muted loop>
		<source
			src="https://videos.pexels.com/video-files/1722882/1722882-uhd_3840_2160_25fps.mp4"
			type="video/mp4"
		/>
	</video>
</div>

<div class="desktop">
    <Folder title="Photography" left={100} top={100} link="/photography" />
    <Folder title="Social Media Creation" left={400} top={450} />
    <Folder title="Production" left={800} top={150} />
    <Folder title="Design" left={1000} top={500} />
</div>

<style>
	video {
		position: absolute;
		width: 100%;
		z-index: -1;
	}

    .desktop {
        height: 100vh;
    }
</style>
