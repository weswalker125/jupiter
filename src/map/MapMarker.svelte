<script>
    import { getContext } from 'svelte';
    import { mapbox, key } from './mapbox.js';

	const { getMap } = getContext(key);
	const map = getMap();

	export let lat;
	export let lon;
    export let label;
    // export let subLabel;

	const popup = new mapbox.Popup({ offset: 25 })
		.setText(label);

	const marker = new mapbox.Marker()
		.setLngLat([lon, lat])
		.setPopup(popup)
		.addTo(map);
</script>