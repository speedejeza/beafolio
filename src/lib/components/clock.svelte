<script>
	import { onMount } from 'svelte';

	let time = new Date();

	// these automatically update when `time`
	// changes, because of the `$:` prefix
	$: hours = time.getHours();
	$: minutes = time.getMinutes();
	$: seconds = time.getSeconds();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<time>{hours.toString().padStart(2,'0')}:{minutes.toString().padStart(2,'0')}:{seconds.toString().padStart(2,'0')}</time>

<style>
	time {
		display: inline-block;
	}
</style>
