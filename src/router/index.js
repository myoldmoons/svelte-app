import Home from '../component/home.svelte';
import Mine from '../component/mine.svelte';
import List from '../component/list.svelte';
import NotFound from '../component/notFound.svelte';
const routes = {
    '/home': Home,
    '/mine': Mine,
    '/list': List,
    '*': NotFound
};
export default routes;