import { writable, readable } from 'svelte/store';
const isShowLogin = writable(false);
const isShowLoading = writable(false);
const screenWidth = readable(window.screen.width);
export { isShowLogin, screenWidth, isShowLoading };