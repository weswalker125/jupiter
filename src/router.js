import Home from './Home.svelte';
import F1 from './F1.svelte';
import Testing from './Testing.svelte';
import { writable } from 'svelte/store';

const router = {
    '/': Home,
    '/home': Home,
    '/f1': F1,
    '/testing': Testing
};

export default router;
export const currentRoute = writable('/home');