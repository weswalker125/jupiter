<script>
	import { onMount, setContext } from 'svelte';
	import { mapbox, key } from './mapbox.js';
	import axios from 'axios';

	setContext(key, {
		getMap: () => map
	});


	export let lat;
	export let lon;
	export let zoom;

	let container;
	let map;

	onMount(() => {
		let url = "http://localhost:3000/tokens";
        axios.get(url)
            .then((response) => {
				let accessToken = response.data[0].mapbox;
				const link = document.createElement('link');
				link.rel = 'stylesheet';
				link.href = 'https://unpkg.com/mapbox-gl/dist/mapbox-gl.css';
				mapbox.accessToken = accessToken;
				console.log("Access token: " + mapbox.accessToken);

				link.onload = () => {
					map = new mapbox.Map({
						container,
						style: 'mapbox://styles/mapbox/streets-v9',
						center: [lon, lat],
						zoom: zoom
					});
				};

				document.head.appendChild(link);

				return () => {
					map.remove();
					link.parentNode.removeChild(link);
				};
            })
            .catch((err) => {
                console.log(err);
            });
	});
</script>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>

<div bind:this={container}>
	{#if map}
		<slot></slot>
	{/if}
</div>