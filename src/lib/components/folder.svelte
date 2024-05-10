<script>
	import { draggable } from '@neodrag/svelte';

	export let title = 'Folder';
	export let link = '/';

	let dragging = false;
</script>

<a
	href={link}
	use:draggable={{ bounds: 'parent' }}
	on:neodrag={() => (dragging = true)}
	on:neodrag:end={() => (dragging = false)}
	aria-disabled={dragging}
>
	<img src="/folder.png" alt="" />
	<label for="image"><strong>{title}</strong></label>
</a>

<style>
	a {
		text-align: center;
		text-decoration: none;
	}

	/* Makes link non-clickable: */
	a[aria-disabled='true']:active {
		cursor: grabbing;
		pointer-events: none;
	}

	label {
		display: block;
		text-align: center;
		color: white;
		text-shadow: black 1px 1px 3px;
	}

	img {
		width: 5rem;
		height: 5rem;
		pointer-events: none;
	}

	@media only screen and (max-width: 600px) {
		img {
			width: 4rem;
			height: 4rem;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		img {
			width: 6rem;
			height: 6rem;
		}
	}
</style>
