<script>
    import { currentRoute } from './router.js';
    export let page = { path: '/home', name: 'Home' }

    function redirectTo(event) {
        currentRoute.set(event.target.pathname);
        window.history.pushState({ path: page.path}, '', window.location.origin + page.path);
    }
</script>
<style>
    a {text-transform: uppercase;text-decoration: underline;padding: 1rem;}
</style>

<a href={page.path} on:click|preventDefault={redirectTo}>{page.name}</a>