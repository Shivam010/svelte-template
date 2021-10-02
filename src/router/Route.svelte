<script lang="ts">
    import type { Callback } from "page";
    import type { SvelteComponent } from "svelte";
    import { activeRoute, register } from "./Router.svelte";

    export let path = "/";
    export let component: typeof SvelteComponent;
    export let middlewares: Callback[] = [];

    register({ path, component, middlewares });
</script>

<!-- Render the current active route -->
{#if $activeRoute.path === path}
    <svelte:component
        this={$activeRoute.component}
        {...$$restProps}
        {...$activeRoute.params}
    />
{/if}
