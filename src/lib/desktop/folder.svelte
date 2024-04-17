<script>
	import Draggable from '$lib/Draggable.svelte';

	export let left = 100;
	export let top = 100;
	export let title = 'Folder';
	export let link = '/';
</script>

<a draggable="false" href={link}>
	<Draggable {left} {top}>
		<img src="/folder.png" alt="" />
		<label for="image"><strong>{title}</strong></label>
	</Draggable>
</a>

<style>
	a {
		text-decoration: none;
		user-select: none;
		-webkit-user-drag: none;
	}
	img {
		width: 100px;
		height: 100px;
		pointer-events: none;
	}

	label {
		display: block;
		text-align: center;
		color: white;
		text-shadow: black 1px 1px 3px;
	}
</style>
