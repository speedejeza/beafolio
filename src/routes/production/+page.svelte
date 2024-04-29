<script lang="ts">
	import { browser } from '$app/environment';
	import Carousel from 'svelte-carousel';
	import Prodvideo from '$lib/components/prodvideo.svelte';
	import type { PageData } from '../$types';
	import { onMount } from 'svelte';

	export let data: PageData;

	let videoPaused: boolean[] = Array<boolean>(data.data.length).fill(true);

	onMount(() => {
		videoPaused[0] = false;
	});

	function pageChange(event) {
		videoPaused = videoPaused.map((_, i) => i != event.detail);
	}
</script>

<div class="carousel">
	{#if browser}
		<Carousel infinite={false} on:pageChange={pageChange}>
			{#each data.data as video, index}
				<Prodvideo
					url={video.attributes.video.data.attributes.url}
					title={video.attributes.title}
					credits={video.attributes.credits}
					bind:paused={videoPaused[index]}
				/>
			{/each}
		</Carousel>
	{/if}
</div>

<style lang="scss">
	.carousel {
		width: 100%;
		height: 100vh;
		color: white;
	}
</style>
