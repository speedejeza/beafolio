<script lang="ts">
	import Clock from './clock.svelte';
	import Eyeroll from './eyeroll.svelte';
</script>

<header>
	<nav>
		<div class="nav-left">
			<a href="/">
				<span class="apple-logo"></span>
				<strong>Beatrice Chen</strong>
			</a>
		</div>
		<div class="nav-center">
			<Eyeroll />
		</div>
		<div class="nav-right">
			<div class="socials">
				<a href="https://www.instagram.com/usuallybeatrice/" target="_blank" rel="noreferrer">
					<img src="/icon/instagram.svg" alt="Link to Instagram" />
				</a>
                <a href="https://www.linkedin.com/in/beatrice-chen-a274421b7/" target="_blank" rel="noreferrer">
					<img src="/icon/linkedin.svg" alt="Link to LinkedIn" />
				</a>
			</div>
			<Clock />
		</div>
	</nav>
</header>

<style>
	header {
		background-color: rgb(230, 124, 115);
		color: white;
		padding: 1rem;
	}

	a {
		color: white;
		text-decoration: none;
	}

	nav {
		display: flex;
		align-items: center;
	}

	.nav-left {
		flex: 1;
	}

	.nav-left > a {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.apple-logo {
		font-size: 2rem;
		display: inline-block;
		transform: rotate(-180deg) scale(-1, 1);
	}

	.nav-right {
		flex: 1;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.socials {
		margin-right: 1rem;
	}

	img {
		filter: invert(1);
	}
</style>
