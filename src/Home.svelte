<script>
	import Content from './Content.svelte';
	import Modal from './Modal.svelte';
</script>

<main>
	<img class='logo' src='./jupiter.svg' alt='Application logo, jupiter'/>
	<h1>Jupiter</h1>
	<p>How can we help you?</p>
	
	<Modal>
		<Content/>
	</Modal>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.logo {
		width: 10em;
	}
</style>