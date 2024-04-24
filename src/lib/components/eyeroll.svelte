<script lang="ts">
	let mouseCoords = { x: 0, y: 0 };

	function onMouseMove(event: MouseEvent) {
		mouseCoords = { x: event.x, y: event.y };
	}

	let lefteye: HTMLImageElement, righteye: HTMLImageElement;
	let leftangle = 0,
		rightangle = 0;
	const startingangle = 90;
	$: if (lefteye && mouseCoords) {
		const leftrect = lefteye.getBoundingClientRect();
		const leftcenter = {
			x: leftrect.x + leftrect.width / 2,
			y: leftrect.y + leftrect.height / 2
		};
		leftangle =
			startingangle +
			Math.atan2(mouseCoords.y - leftcenter.y, mouseCoords.x - leftcenter.x) * (180 / Math.PI);

		const rightrect = righteye.getBoundingClientRect();
		const rightcenter = {
			x: rightrect.x + rightrect.width / 2,
			y: rightrect.y + rightrect.height / 2
		};
		rightangle =
			startingangle +
			Math.atan2(mouseCoords.y - rightcenter.y, mouseCoords.x - rightcenter.x) * (180 / Math.PI);
	}
	// Reference: https://svelte.dev/repl/f8622f8badd14cf991c38a01eb30f8d8
	// Reference: https://jsfiddle.net/4c039kn6/1/
</script>

<svelte:window on:mousemove={onMouseMove} />

<div>
	<img
		src="/eyeballs.svg"
		alt="eyeballs"
		bind:this={lefteye}
		style="transform: rotate({leftangle}deg);"
	/>
	<img
		src="/eyeballs.svg"
		alt="eyeballs"
		bind:this={righteye}
		style="transform: rotate({rightangle}deg);"
	/>
</div>