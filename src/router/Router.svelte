<script context="module" lang="ts">
    import { writable } from "svelte/store";
    import type { Callback } from "page";
    import type { SvelteComponent } from "svelte";
    import NotFound from "./NotFound.svelte";

    // RouteProps represents a Route
    export type RouteProps = {
        path: string;
        middlewares: Callback[];
        component: typeof SvelteComponent;
    };

    // routes will store all the registered routes in from Route.svelte
    const routes: Map<string, RouteProps> = new Map();

    // params represent query parameters from page.js
    interface ARP extends RouteProps {
        params: {};
    }
    // default active route will be *
    export const activeRoute = writable<ARP>({
        path: "*",
        middlewares: [],
        params: {},
        component: NotFound,
    });

    // register route from the Route.svelte
    export const register = (route: RouteProps) => {
        routes.set(route.path, route);
    };
</script>

<script lang="ts">
    import page, { Context } from "page";
    import { onMount, onDestroy } from "svelte";

    // base path of the application
    export let basePath = "";

    // set the active componentc
    const setActive = (route: RouteProps) => {
        return function (ctx: Context) {
            $activeRoute = { ...route, params: ctx.params };
        };
    };

    // Register pages and start page.js handler on mount
    onMount(() => {
        console.log(routes);
        // register all the routes
        routes.forEach((route) => {
            console.log(route.path, route);
            page(route.path, ...route.middlewares, setActive(route));
        });

        // set the base url path
        if (basePath.length > 0) {
            page.base(basePath);
        }

        // setup page and its click handlers
        page.start();
    });

    // remove click event handlers when component is unmounted
    onDestroy(page.stop);
</script>

<!-- Render page here -->
<slot />
