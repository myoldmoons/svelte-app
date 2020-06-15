import { writable, readable } from 'svelte/store';
const count = writable(20);
const isShowLogin = writable(false);
const screenWidth = readable(window.screen.width);
export { count, isShowLogin, screenWidth };