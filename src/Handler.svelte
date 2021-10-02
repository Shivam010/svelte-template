<script lang="ts">
    import App from "./App.svelte";
    import Route from "./router/Route.svelte";
    import Router from "./router/Router.svelte";
</script>

<Router>
    <Route path="/" component={App} />
    <Route path="/thanks" component={App} thanks />
    <Route path="*" component={App} />
</Router>
