<script>
	import Map from './map/Map.svelte';
    import MapMarker from './map/MapMarker.svelte';
    import axios from 'axios';
    
    let locations = [];
    let url = "http://localhost:3000/locations";
    axios.get(url)
        .then((response) => {
            locations = response.data;
            console.log(locations);
        })
        .catch((err) => {
            console.log("error occurred", err);
        });
</script>

<h1>Map of F1 team headquarters</h1>

<Map lat={35} lon={-84} zoom={3.5}>
    {#each locations as location}
        <MapMarker lat={location.lat} lon={location.lon} label={location.label} />
    {/each}
</Map>