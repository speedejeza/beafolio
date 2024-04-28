<script lang="ts">
	import Folder from '$lib/components/folder.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div
	class="desktop"
	style="background-image: url({data.data.attributes.background.data.attributes.url})"
>
	<Folder title="Photography" link="/photography" />
	<Folder title="Social Media Creation" link="/social-media-creation" />
	<Folder title="Production" link="/production" />
	<Folder title="Design" link="/design" />
</div>

<div class="about">
	<h1 class:rotate={data.data.attributes.titleSpin}>{data.data.attributes.title}</h1>
	<p>{@html data.data.attributes.about}</p>
</div>

<style lang="scss">
	.video-background {
		position: relative;
		width: 100%;
		z-index: -1;
	}

	.desktop {
		height: 100vh;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.about {
		padding: 2rem;

		h1 {
			font-family: 'Arizona Serif Variable';
			font-size: 6.6rem;
			letter-spacing: 0.075rem;
		}

		.rotate {
			display: inline-block;
			transition: transform 0.7s ease-in-out;
		}

		.rotate:hover {
			transform: rotate(360deg);
		}
	}
</style>
