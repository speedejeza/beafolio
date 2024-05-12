<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import Prodvideo from '$lib/components/prodvideo.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;

	let videoPaused: boolean[] = Array<boolean>(data.data.length).fill(true);

	register();

	const onSlideChange = (e) => {
		videoPaused = videoPaused.map((_, i) => i != e.detail[0].activeIndex);
		console.log(videoPaused);
	};
</script>

<swiper-container
	class="carousel"
	navigation="true"
	pagination="true"
	rewind="true"
	centered-slides="true"
	grab-cursor="true"
	on:swiperslidechange={onSlideChange}
	on:swiperafterinit={() => console.log('swiper init')}
>
	{#each data.data as video, index}
		<swiper-slide>
			<Prodvideo
				url={video.attributes.video.data.attributes.url}
				title={video.attributes.title}
				credits={video.attributes.credits}
				{index}
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

	swiper-container::part(button-prev),
	swiper-container::part(button-next) {
		color: white;
	}
</style>
