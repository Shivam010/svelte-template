import page from 'page';
import Router from './Router.svelte';
import Route from './Route.svelte';

// redirect from (optional) a route to another one
const redirect = (args: { from?: string, to: string }) => {
    if (args.from) page.redirect(args.from, args.to);
    else page.redirect(args.to);
};

export { Router, Route, redirect };
