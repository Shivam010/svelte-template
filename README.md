# svelte template
[![build](https://github.com/Shivam010/svelte-template/actions/workflows/ci.yml/badge.svg)](https://github.com/Shivam010/svelte-template/actions/workflows/ci.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/fe07fc76-6b5d-4cec-978d-fc8d6685a18f/deploy-status)](https://svelte-tmpl.netlify.app/)

This is a minimalized project template for [Svelte](https://svelte.dev) apps. It lives at [`Shivam010/svelte-template`](https://github.com/Shivam010/svelte-template). It adds some major functionalities in the [`Svelte official template`](https://github.com/sveltejs/template)

- It comes with the _**default typescript setup**_
- And provides _**minimalized default routing**_ to the application using [`Page.js`](https://visionmedia.github.io/page.js/) wrapped for svelte in [`./src/router`](https://github.com/Shivam010/svelte-template/blob/main/src/router), you can see the example in the [`Handler.svelte`](https://github.com/Shivam010/svelte-template/blob/main/src/Handler.svelte) component. 
- Also, it has default setup for _**handling environment variable**_ files `.env` for configurations, using [`dotenv`](https://github.com/motdotla/dotenv) library, just define them in [`rollup.config.js`](https://github.com/Shivam010/svelte-template/blob/main/rollup.config.js) and create corresponding type definitions in [`./src/global.d.ts`](https://github.com/Shivam010/svelte-template/blob/main/src/global.d.ts)

## Get started

Install the dependencies...

```bash
cd svelte-template
npm install
```

...then start [`Rollup`](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [`localhost:5000`](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## License
This template is licensed under MIT License by [Shivam010](https://github.com/Shivam010/svelte-template/blob/main/LICENSE) and [SvelteJs Contributors](https://github.com/sveltejs/svelte/blob/master/LICENSE.md)
