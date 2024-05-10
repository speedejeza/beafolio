<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import Prodvideo from '$lib/components/prodvideo.svelte';
	import type { PageData } from '../$types';
	import { onMount } from 'svelte';

	export let data: PageData;

	let videoPaused: boolean[] = Array<boolean>(data.data.length).fill(true);
	onMount(() => {
		videoPaused[0] = false;
	});
	function pageChange(event: { detail: number }) {
		videoPaused = videoPaused.map((_, i) => i != event.detail);
	}

	register();

	const spaceBetween = 10;
	const onProgress = (e) => {
		const [swiper, progress] = e.detail;
		console.log(progress);
	};
	const onSlideChange = (e) => {
		console.log(e.detail[0].activeIndex);
		videoPaused = videoPaused.map((_, i) => i != e.detail[0].activeIndex);
	};
</script>

<swiper-container
	class="carousel"
	navigation="true"
	pagination="true"
	rewind="true"
	centered-slides="true"
	grab-cursor="true"
	on:swiperprogress={onProgress}
	on:swiperslidechange={onSlideChange}
>
	{#each data.data as video, index}
		<swiper-slide>
			<Prodvideo
				url={video.attributes.video.data.attributes.url}
				title={video.attributes.title}
				credits={video.attributes.credits}
				bind:paused={videoPaused[index]}
			/>
		</swiper-slide>
	{/each}
</swiper-container>

<style lang="scss">
	.carousel {
		min-width: 100%;
		// min-height: var(--fullscreen-height);
		color: white;
		background-color: black;
	}
</style>
