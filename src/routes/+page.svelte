<script lang="ts">
	import Folder from '$lib/components/folder.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

		// Temporary Links
		let links = [
		{
			title: 'Photography',
			link: '/photography',
			left: 50,
			top: 50
		},
		{
			title: 'Social Media Creation',
			link: '/social-media-creation',
			left: 1000,
			top: 60
		},
		{
			title: 'Production',
			link: '/production',
			left: 150,
			top: 200
		},
		{
			title: 'Design',
			link: '/design',
			left: 1000,
			top: 300
		}
	];

	let width: number, height: number;
	let mounted = false;
	/* divide div.desktop into 4 quadrants and place folder in each
		N
		x=floor(sqrt(N))
		y=raise(N/x)
	Ref: https://stackoverflow.com/a/2197543 */
	onMount(() => {
		let n = links.length;
		// let s = Math.floor(Math.sqrt(n)); // closests square root
		// let x = width / s;
		// let y = height / s;

		for (let i = 0; i < n; i++) {
			// links[i].left = getRandomArbitrary(i * x, (i + 1) * x);
			// links[i].top = getRandomArbitrary(i * y, (i + 1) * y);
			links[i].left = getRandomArbitrary(0, width);
			links[i].top = getRandomArbitrary(0, height);
		}

		mounted = true;
	});

	function getRandomArbitrary(min: number, max: number) {
		return Math.random() * (max - min) + min;
	}

</script>

<div
	class="desktop"
	style="background-image: url({data.data.attributes.background.data.attributes.url})"
	bind:clientWidth={width}
	bind:clientHeight={height}
>
	{#if mounted}
		{#each links as link}
			<Folder title={link.title} left={link.left} top={link.top} link={link.link} />
		{/each}
	{/if}
	<!-- <Folder title="Photography" left={100} top={100} link="/photography" />
	<Folder title="Social Media Creation" left={400} top={450} />
	<Folder title="Production" left={800} top={150} />
	<Folder title="Design" left={1000} top={500} /> -->
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
