<script>
import router, { currentRoute } from './router.js';
import RouterLink from './RouterLink.svelte';
import { onMount } from 'svelte';

onMount(() => {
	currentRoute.set(window.location.pathname);
	if (!history.state) {
		window.history.replaceState({ path: window.location.pathname}, '', window.location.href);
	}
});

function handlerBackNavigation(e) {
	currentRoute.set(e.state.path);
}
</script>

<svelte:window on:popstate={handlerBackNavigation} />
<RouterLink page={{path: '/home', name: 'Home'}} />
<RouterLink page={{path: '/f1', name: 'F1'}} />
<RouterLink page={{path: '/testing', name: 'Testing'}} />

<div id="pageContent">
	<!-- Page component updates here -->
	<svelte:component this={router[$currentRoute]} />
</div>