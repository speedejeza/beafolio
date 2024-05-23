<script>
	import Desktop from '$lib/sections/desktop.svelte';

	export let data;
	let background = data.data.attributes.background.data.attributes;
	let folders = data.data.attributes.folders;
	let about = data.data.attributes.about;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Desktop {background} {folders} />

{#if about}
	<div class="about">
		<h1 class:rotate={about.titleSpin}>{about.title}</h1>
		<p>{@html about.content}</p>
	</div>
{/if}

<style lang="scss">
	.about {
		padding: 2rem;
		background-color: white;

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
