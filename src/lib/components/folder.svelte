<script>
	import { draggable } from '@neodrag/svelte';

	export let left = 100;
	export let top = 100;
	export let title = 'Folder';
	export let link = '/';
</script>

<div use:draggable={{ defaultPosition: { x: left, y: top }, bounds: 'parent' }}>
	<a draggable="false" href={link}>
		<img src="/folder.png" alt="" />
		<label for="image"><strong>{title}</strong></label>
	</a>
</div>

<style>
	div {
		width: max-content;
		text-align: center;
	}
	a {
		width: 100%;
		height: 100%;
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
